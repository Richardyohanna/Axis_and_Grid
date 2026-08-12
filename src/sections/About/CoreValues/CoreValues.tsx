import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import EngineeringBackground from "../../../components/effects/EngineeringBackground";

const values = [
  {
    id: "A1",
    title: "PRECISION",
    description:
      "We approach every project with careful planning, accurate measurement and attention to construction detail.",
    reference: "AX / 001",
  },
  {
    id: "A2",
    title: "QUALITY",
    description:
      "From materials to workmanship, we maintain standards that support durable and dependable construction.",
    reference: "AX / 002",
  },
  {
    id: "A3",
    title: "TRANSPARENCY",
    description:
      "Clear scopes, itemized quotations and structured communication keep clients informed throughout the project.",
    reference: "AX / 003",
  },
  {
    id: "A4",
    title: "ACCOUNTABILITY",
    description:
      "Professional supervision and milestone-based project management keep responsibilities and progress visible.",
    reference: "AX / 004",
  },
];

const CoreValues = () => {
  return (
    <Section className="relative overflow-hidden -mt-20 bg-[#ffffff] text-black">
      {/* Blueprint grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.35]
          
          bg-[size:50px_50px]
        "
        // bg-[linear-gradient(rgba(17,17,17,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.08)_1px,transparent_1px)]
      />

      {/* Vertical engineering axis */}
      {/* <div className="pointer-events-none absolute left-[12%] top-0 h-full w-px bg-black/10" /> */}

      <EngineeringBackground>
        <Container>
            <h2 className="uppercase w-full mb-6 text-4xl font-bold tracking-[0.2em] flex justify-center text-yellow">
              WHAT DRIVES US
          </h2>
          <div className="relative z-10">
            {/* Header */}
            <div className="w-full">
              {/* <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5C400]">
                    03
                  </span>

                  <span className="h-px w-10 bg-black/20" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">
                    CORE VALUES
                  </span>
                </div> */}

                {/* <h2 className="mt-8 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
                  WHAT DRIVES
                  <br />
                  US.
                </h2> 
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-full w-full"
              >
                <p className="space-y-6 text-medium leading-8 text-black/55 md:text-base text-center">
                  Good construction is more than putting materials together.
                  It requires discipline, coordination and responsibility at
                  every stage.
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <div className="mt-3 grid border-l border-t border-black/10 md:grid-cols-2">
              {values.map((value, index) => (
                <motion.article
                  key={value.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    relative
                    min-h-[330px]
                    overflow-hidden
                    border-b
                    border-r
                    border-black/10
                    bg-white/40
                    p-8
                    transition-colors
                    duration-500
                    hover:bg-[#111111]
                    md:p-10
                  "
                >
                  {/* Large background number */}
                  {/* <span
                    className="
                      pointer-events-none
                      absolute
                      -right-3
                      -top-8
                      font-mono
                      text-[150px]
                      font-bold
                      leading-none
                      text-black/[0.35]
                      transition-colors
                      duration-500
                      group-hover:text-white/[0.04]
                    "
                  >
                    {index + 1}
                  </span> */}

                  {/* Reference */}
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-xs text-[#F5C400]">
                      {value.id}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/30 transition-colors group-hover:text-white/30">
                      {value.reference}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-20 text-3xl font-black tracking-tight transition-colors duration-500 group-hover:text-white md:text-4xl">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-5 max-w-md text-medium leading-7 text-black/50 transition-colors duration-500 group-hover:text-white/45">
                    {value.description}
                  </p>

                  {/* Technical corner */}
                  <div className="absolute bottom-7 right-7 flex items-end gap-1 opacity-40">
                    <span className="h-3 w-px bg-[#F5C400]" />
                    <span className="h-px w-3 bg-[#F5C400]" />
                  </div>

                  {/* Yellow hover line */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#F5C400] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </EngineeringBackground>
    </Section>
  );
};

export default CoreValues;
