import { motion } from "framer-motion";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

import { processSteps } from "../../../data/process";
import ProcessStep from "./ProcessStep";

const Process = () => {
  return (
    <Section className="relative overflow-hidden">

      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Horizontal engineering axis */}
      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full bg-yellow/10 lg:block" />

      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-full "
        >
          {/* <span className="font-mono text-xl uppercase tracking-[0.2em] text-yellow">
            HOW A PROJECT RUNS
          </span> */}
           <span className="uppercase tracking-[0.2em] flex justify-center text-yellow text-xl">
            HOW A PROJECT RUNS
          </span>
          {/* <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            From First Site Visit
            <br />
            To Final Handover.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
            Every project follows a structured process designed to maintain
            transparency, quality and control from the first assessment
            through completion.
          </p> */}
        </motion.div>

        {/* Process */}
        <div className="relative z-10 mt-10 grid gap-16 lg:flex lg:gap-10">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
            />
          ))}
        </div>

        {/* Bottom technical information */}
        {/* <div className="mt-24 flex flex-col justify-between gap-6 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 md:flex-row">
          <span>AXIS / PROCESS / 001</span>

          <span>ENGINEERING CONTROL SYSTEM</span>

          <span>ABUJA · NIGERIA</span>
        </div> */}
      </Container>
    </Section>
  );
};

export default Process;