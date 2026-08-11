import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

const steps = [
  {
    number: "01",
    title: "SITE VISIT & QUOTE",
    description:
      "We assess the site and provide an itemized Bill of Quantities before work begins.",
  },
  {
    number: "02",
    title: "MOBILIZATION",
    description:
      "Materials are sourced, the site is prepared and a project schedule is agreed with the client.",
  },
  {
    number: "03",
    title: "CONSTRUCTION",
    description:
      "Work proceeds under professional site supervision with milestone check-ins and payments.",
  },
  {
    number: "04",
    title: "HANDOVER",
    description:
      "Final inspection, snag-list closeout and formal handover of the completed project.",
  },
];

const ServicesProcess = () => {
  return (
    <Section className="relative overflow-hidden bg-[#111111] text-white">
      {/* Blueprint grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <Container>
        <div className="relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F5C400]">
                02 / WORKFLOW
              </span>

              <span className="h-px w-16 bg-[#F5C400]/40" />
            </div>

            <h2 className="mt-8 text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-7xl">
              FROM
              <br />
              FIRST LINE
              <br />
              TO HANDOVER.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 md:text-base">
              Every project follows a structured sequence designed to keep
              scope, cost, materials and construction progress under control.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-[19px] hidden h-px bg-white/10 lg:block" />

            <div className="grid lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="group relative border-l border-white/10 px-6 py-8 first:border-l-0 lg:min-h-[330px]"
                >
                  {/* Node */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#111111] transition-colors duration-300 group-hover:border-[#F5C400]">
                    <span className="font-mono text-[10px] text-[#F5C400]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-14 max-w-[220px] text-xl font-black uppercase leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-[250px] text-sm leading-7 text-white/40">
                    {step.description}
                  </p>

                  {/* Technical line */}
                  <div className="absolute bottom-5 left-6 flex items-center gap-2 opacity-40">
                    <span className="h-px w-8 bg-[#F5C400]" />
                    <span className="font-mono text-[8px] text-white/40">
                      AX-{step.number}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesProcess;