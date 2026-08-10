import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

const principles = [
  {
    number: "01",
    grid: "A·01",
    title: "PLAN",
    text: "Every project begins with understanding the site, scope, requirements and cost before construction begins.",
  },
  {
    number: "02",
    grid: "A·02",
    title: "CONTROL",
    text: "Materials, subcontractors, schedules and project milestones are coordinated under structured supervision.",
  },
  {
    number: "03",
    grid: "B·01",
    title: "BUILD",
    text: "Construction is executed with attention to specification, workmanship, safety and quality.",
  },
  {
    number: "04",
    grid: "B·02",
    title: "DELIVER",
    text: "Projects conclude with inspection, snag-list closeout and formal handover.",
  },
];

const rulerTicks = ["00", "25", "50", "75", "100"];
const rowLabels = ["A", "B"];

const EngineeringApproach = () => {
  return (
    <Section className="relative -mt-20 overflow-hidden bg-white">
      {/* Faint blueprint grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          bg-[size:60px_60px]
        "
      />

      <span className="uppercase w-full tracking-[0.2em] flex justify-center text-yellow text-2xl">
        HOW WE BUILD
      </span>

      <Container>
        <div className="relative z-10">
          <div className="max-w-full text-center">
            <p className="max-w-full text-sm leading-7 text-black/55 md:text-base">
              Our approach is structured around clarity, coordination and
              control — creating a predictable path from project concept to
              completed construction.
            </p>
          </div>

          {/* Drawing sheet: ruler + grid */}
          <div className="mt-10">
            {/* Top ruler */}
            <div className="ml-8 hidden items-end justify-between border-b border-black/20 pb-2 font-mono text-[10px] text-black/30 md:flex">
              {rulerTicks.map((tick) => (
                <span key={tick} className="relative">
                  {tick}
                  <span className="absolute -bottom-2 left-1/2 h-2 w-px -translate-x-1/2 bg-black/20" />
                </span>
              ))}
            </div>

            <div className="flex">
              {/* Left ruler */}
              <div className="hidden w-8 flex-col justify-between py-10 font-mono text-[10px] text-black/30 md:flex">
                {rowLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>

              {/* Grid of principle cards */}
              <div className="grid flex-1 border-l border-t border-black/20 md:grid-cols-2">
                {principles.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="
                      group
                      relative
                      min-h-[280px]
                      overflow-hidden
                      border-b
                      border-r
                      border-black/20
                      bg-white/40
                      p-8
                      transition-colors
                      duration-500
                      hover:bg-[#111111]
                      md:p-10
                    "
                  >
                    <div className="relative flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-yellow">
                        {item.number}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-black/30 transition-colors duration-500 group-hover:text-white/30">
                        GRID {item.grid}
                      </span>
                    </div>

                    <h3 className="relative mt-16 text-3xl font-black tracking-tight text-[#111111] transition-colors duration-500 group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="relative mt-5 max-w-md text-sm leading-7 text-black/45 transition-colors duration-500 group-hover:text-white/45">
                      {item.text}
                    </p>

                    {/* Technical corner — matches CoreValues */}
                    <div className="absolute bottom-7 right-7 flex items-end gap-1 opacity-40">
                      <span className="h-3 w-px bg-yellow" />
                      <span className="h-px w-3 bg-yellow" />
                    </div>

                    {/* Yellow hover line */}
                    <span className="absolute bottom-0 left-0 h-1 w-0 bg-yellow transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default EngineeringApproach;