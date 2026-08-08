// import heroImage from "../../assets/images/hero/hero.png";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
// import GridOverlay from "../../components/ui/GridOverlay";
// import StatisticCard from "../../components/ui/StatisticCard";
import FloatingProjectCard from "../../components/ui/FloatingProjectCard";
import useParallax from "../../hooks/useParallax";
import { useRef } from "react";
// import RevealImage from "../../components/effects/RevealImage";
import useHeroAnimation from "../../hooks/useHeroAnimation";

const Hero = () => {

  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
const contentRef = useRef<HTMLDivElement>(null);

  useParallax(imageRef,120);
  useHeroAnimation({
  title: titleRef,
  content: contentRef,
});


  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-28 lg:pt-32">
      {/* Background Image */}
      {/* <RevealImage>
        <img
          ref={imageRef}
          src={heroImage}
          alt="Engineering Project"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </RevealImage> */}

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}

      {/* Blueprint Grid */}
      {/* <GridOverlay className="opacity-40" /> */}

      {/* Content */}
      <Container className="relative z-10 flex flex-col justify-center py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* <span className="mb-6 inline-block border border-yellow px-4 py-2 text-xs uppercase tracking-[0.4em] text-yellow">
            Solid Strata Engineering & Construction
          </span> */}

          <h1 ref={titleRef} className="text-3xl font-black uppercase leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Precision
            <br />
            from the first line

          </h1>
          
          
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">
                Axis & Grids delivers residential, commercial, and renovation 
                projects across Nigeria with registered, professionally 
                supervised construction from foundation to handover.
          </p>

          <div  className="mt-10 flex flex-wrap gap-5">
            <Button>Start Your Project</Button>

            {/* variant="outline" THis is BUtton for Explore  */}
            <Button variant="secondary">Explore Projects</Button>
          </div>

          {/* <div className="mt-16 flex flex-wrap gap-4">
            <StatisticCard number="25+" label="Years Experience" />
            <StatisticCard number="300+" label="Projects" />
            <StatisticCard number="120+" label="Engineers" />
            <StatisticCard number="98%" label="Client Satisfaction" />
          </div> */}
        </div>

        {/* Floating card now sits relative to the content container,
            not the whole viewport, so it can't drift off-layout */}
        <div className="pointer-events-none absolute bottom-8 right-4 hidden lg:block xl:right-8">
          <div className="pointer-events-auto">
            <FloatingProjectCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;