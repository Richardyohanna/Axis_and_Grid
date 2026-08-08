import type { RefObject } from "react";
import { useLayoutEffect } from "react";
import gsap from "../animations/gsap";

const useBlueprint = (
  ref: RefObject<HTMLElement | null>,
  direction: "x" | "y" = "x"
) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      scaleX: direction === "x" ? 0 : 1,
      scaleY: direction === "y" ? 0 : 1,
      transformOrigin:
        direction === "x" ? "left center" : "center top",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, [ref, direction]);
};

export default useBlueprint;