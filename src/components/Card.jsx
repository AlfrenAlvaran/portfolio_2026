import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef
} from "react";
import gsap from "gsap";

/* =========================
   CARD COMPONENT
========================= */
export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border border-black bg-white [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));

Card.displayName = "Card";

/* =========================
   SLOT CALCULATION
========================= */
const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

/* =========================
   PLACE FUNCTION
========================= */
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true
  });

/* =========================
   CARD SWAP COMPONENT
========================= */
const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);

  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  /* =========================
     MAIN EFFECT
  ========================= */
  useEffect(() => {
    const total = refs.length;

    /* =========================
       🔥 ENTRY ANIMATION (FIX)
       CARDS COME FROM LEFT
    ========================= */
    refs.forEach((r, i) => {
      const el = r.current;
      if (!el) return;

      const slot = makeSlot(i, cardDistance, verticalDistance, total);

      // START OFF SCREEN LEFT
      gsap.set(el, {
        x: -800,
        y: 0,
        z: 0,
        opacity: 0,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "center center"
      });

      // ANIMATE INTO STACK
      gsap.to(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        opacity: 1,
        duration: 1.2,
        delay: i * 0.08,
        ease: "power3.out",
        onComplete: () => {
          placeNow(el, slot, skewAmount);
        }
      });
    });

    /* =========================
       SWAP FUNCTION
    ========================= */
    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);

        tl.set(el, { zIndex: slot.zIndex }, "promote");

        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );

      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);

      tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      }, null, "return");

      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    /* =========================
       START LOOP
    ========================= */
    const startDelay = setTimeout(() => {
      swap();
      intervalRef.current = setInterval(swap, delay);
    }, 1200); // wait for intro animation

    /* =========================
       PAUSE ON HOVER
    ========================= */
    if (pauseOnHover) {
      const node = container.current;

      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };

      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = setInterval(swap, delay);
      };

      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);

      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearTimeout(startDelay);
        clearInterval(intervalRef.current);
      };
    }

    return () => {
      clearTimeout(startDelay);
      clearInterval(intervalRef.current);
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  /* =========================
     RENDER CARDS
  ========================= */
  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;