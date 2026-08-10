import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import FloatingProjectCard from "../../components/ui/FloatingProjectCard";
import useParallax from "../../hooks/useParallax";
import useHeroAnimation from "../../hooks/useHeroAnimation";
import { heroFeaturedProjects } from "../../data/projects";

const HEADLINE_LINES = [
  "from the First Line of Design",
  "in Every Detail, Built to Last.",
  "strength. endurance",
  `built to outlast `,
  
];

const ROTATE_INTERVAL = 5000;

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useParallax(imageRef, 120);
  useHeroAnimation({
    title: titleRef,
    content: contentRef,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroFeaturedProjects.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const activeProject = heroFeaturedProjects[activeIndex];
  const activeLine = HEADLINE_LINES[activeIndex % HEADLINE_LINES.length];

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 lg:pt-42">
      {/* Rotating background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.img
              src={activeProject.image}
              alt={activeProject.title}
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: ROTATE_INTERVAL / 1000 + 1.2, ease: "linear" }}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10 " />

      <Container
        className="
          relative z-10
          flex flex-col justify-center
          items-center
          py-16
          lg:items-start
          lg:py-20
        "
      >
        <div className="max-w-3xl text-center lg:text-left">

          <h1
            ref={titleRef}
            className="text-3xl font-black uppercase leading-[1.05] text-white sm:text-4xl lg:text-6xl xl:text-6.5xl"
          >
            Precision
            <br />

            {/* Fixed-height wrapper reserves room for a 2-line wrap at every
               breakpoint, so the headline never changes the layout height
               when it swaps to a longer/shorter line. */}
            <span className="relative block min-h-[38px] overflow-hidden sm:min-h-[38px] lg:min-h-[38px] xl:min-h-[52px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeLine}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="inline-block text-yellow"
                >
                  {activeLine}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-lg leading-8 text-white/80 lg:mx-0">
            Axis & Grids delivers residential, commercial, and renovation
            projects across Nigeria with registered, professionally
            supervised construction from foundation to handover.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-5 lg:justify-start">
            <Button>Start Your Project</Button>
            <Button variant="secondary">Explore Projects</Button>
          </div>

          {/* Live "now building" indicator */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
            </span>

            {/* Fixed-width, truncated so varying project name/category
               lengths don't push the dots around */}
            <div className="w-[220px] shrink-0 sm:w-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.4 }}
                  className="truncate font-mono text-xs uppercase tracking-[0.25em] text-white/60"
                  title={`Now Building — ${activeProject.category} / ${activeProject.location}`}
                >
                  Now Building — {activeProject.category} /{" "}
                  {activeProject.location}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden gap-1.5 sm:flex">
              {heroFeaturedProjects.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show ${project.title}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-6 bg-yellow"
                      : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

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