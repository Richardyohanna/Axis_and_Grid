import { motion } from "framer-motion";
import type { ProcessStep as ProcessStepType } from "../../../data/process";

interface Props {
  step: ProcessStepType;
  index: number;
}

const ProcessStep = ({ step, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex-1"
    >
      {/* Technical reference */}
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-xs tracking-[0.25em] text-yellow">
          {step.reference}
        </span>

        <span className="font-mono text-xs text-white/60">
          PROCESS_{step.number}
        </span>
      </div>

      {/* Node */}
      <div className="relative mb-8 flex items-center">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-yellow bg-[#111111]">
          <span className="font-mono text-sm text-yellow">
            {step.number}
          </span>
        </div>

        {/* Connector */}
        {index < 3 && (
          <div className="hidden h-px flex-1 bg-white/10 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.15 + 0.3,
              }}
              viewport={{ once: true }}
              className="h-full origin-left bg-yellow"
            />
          </div>
        )}
      </div>

      <h3 className="text-2xl font-bold text-white">
        {step.title}
      </h3>

      <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
        {step.description}
      </p>

      {/* Coordinate marker */}
      {/* <div className="mt-8 flex items-center gap-3">
        <span className="h-px w-8 bg-yellow/50" />

        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          Axis {index + 1}
        </span>
      </div> */}
    </motion.div>
  );
};

export default ProcessStep;