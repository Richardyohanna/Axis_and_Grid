import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import FloatingProjectCard from "../../components/ui/FloatingProjectCard";
import useParallax from "../../hooks/useParallax";
import useHeroAnimation from "../../hooks/useHeroAnimation";
import { heroFeaturedProjects } from "../../data/projects";


// Rotating second line of the headline — cycles in step with the
// background project so the whole hero feels like one live system.
const HEADLINE_LINES = [
  "from the first line",
  "in Every Detail",
  `built to outlast `,
  "strength. endurance.",
  
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
    <section className="relative min-h-[90vh] overflow-hidden pt-28 lg:pt-32">
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

      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <Container className="relative z-10 flex flex-col justify-center py-16 lg:py-20">
        <div className="max-w-3xl">
          <h1
            ref={titleRef}
            className="text-2xl font-black uppercase leading-[1.05] text-white sm:text-4xl lg:text-4xl xl:text-6xl"
          >
            Precision
            <br />
            <span className="relative inline-block overflow-hidden align-top">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeLine}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="inline-block text-yellow"
                >
                  {activeLine}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">
            Axis & Grids delivers residential, commercial, and renovation
            projects across Nigeria with registered, professionally
            supervised construction from foundation to handover.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Button>Start Your Project</Button>
            <Button variant="secondary">Explore Projects</Button>
          </div>

          {/* Live "now building" indicator */}
          <div className="mt-12 flex items-center gap-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.4 }}
                className="font-mono text-xs uppercase tracking-[0.25em] text-white/60"
              >
                Now Building — {activeProject.category} / {activeProject.location}
              </motion.div>
            </AnimatePresence>

            <div className="hidden gap-1.5 sm:flex">
              {heroFeaturedProjects.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show ${project.title}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex ? "w-6 bg-yellow" : "w-1.5 bg-white/30"
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