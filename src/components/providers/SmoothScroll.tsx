import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "../../animations/gsap";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      lerp: 0.08,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
