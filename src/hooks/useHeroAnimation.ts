import type { RefObject} from "react";
import { useLayoutEffect } from "react";
import gsap from "../animations/gsap";

interface HeroRefs {
  title: RefObject<HTMLDivElement | null>;
  content: RefObject<HTMLDivElement | null>;
  stats?: RefObject<HTMLDivElement | null>;
  background?: RefObject<HTMLDivElement | null>;
}

const useHeroAnimation = ({
  title,
  content,
  stats,
  background,
}: HeroRefs) => {
  useLayoutEffect(() => {
    const heroTitle = title.current;
    const heroContent = content.current;
    const heroStats = stats?.current;
    const heroBackground = background?.current;

    if (!heroTitle || !heroContent) {
      return;
    }

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(heroTitle, {
      y: 80,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        heroContent,
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.5"
      );

    if (heroStats) {
      tl.from(
        heroStats,
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
        },
        "-=0.3"
      );
    }

    if (heroBackground) {
      gsap.to(heroBackground, {
        y: 180,
        ease: "none",
        scrollTrigger: {
          trigger: heroBackground,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      tl.kill();
    };
  }, [background, content, stats, title]);
};

export default useHeroAnimation;