import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

const AboutCTA = () => {
  return (
    <Section className="relative overflow-hidden bg-[#F5C400]">
      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
          bg-[linear-gradient(rgba(17,17,17,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.5)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Axis */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-black/10" />

      <Container>
        <div className="relative z-10 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">
                NEXT PROJECT
              </span>

              <span className="h-px w-12 bg-black/40" />
            </div>

            <h2 className="mt-8 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-7xl lg:text-8xl">
              LET'S BUILD
              <br />
              WITH
              <br />
              PRECISION.
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-sm"
          >
            <p className="text-sm leading-7 text-black/60 md:text-base">
              From initial site assessment to final handover, Axis & Grids can
              help bring structure and professional supervision to your next
              construction project.
            </p>

            <a
              href="mailto:info@axisandgrids.ng"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-4
                bg-[#111111]
                px-7
                py-4
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              Start a Project

              <ArrowUpRight
                size={18}
                className="text-[#F5C400] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom engineering reference */}
        <div className="relative z-10 mt-20 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.25em] text-black/35">
          <span>A1</span>

          <span className="h-px flex-1 bg-black/20" />

          <span>AXIS & GRIDS / ABOUT</span>

          <span className="h-px flex-1 bg-black/20" />

          <span>01</span>
        </div>
      </Container>
    </Section>
  );
};

export default AboutCTA;