import type { RefObject } from "react";
import { useLayoutEffect } from "react";
import gsap from "../animations/gsap";

const useParallax = (
  ref: RefObject<HTMLElement | null>,
  y = 150
) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y,

      ease: "none",

      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

  }, [ref, y]);
};

export default useParallax;