import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

const services = [
  {
    number: "01",
    code: "RES-01",
    title: "Residential Construction",
    description:
      "New builds and extensions for homeowners and landlords, managed from site setup through final finishes.",
    category: "BUILD",
  },
  {
    number: "02",
    code: "COM-02",
    title: "Commercial Construction",
    description:
      "Offices, retail units and warehouses built to specification with coordinated scheduling and cost control.",
    category: "BUILD",
  },
  {
    number: "03",
    code: "REN-03",
    title: "Renovation & Fit-out",
    description:
      "Structural upgrades, remodeling and interior fit-outs for existing residential and commercial spaces.",
    category: "RENEW",
  },
  {
    number: "04",
    code: "CIV-04",
    title: "Civil Works",
    description:
      "Fencing, access roads, drainage and paving for standalone projects and larger construction packages.",
    category: "CIVIL",
  },
  {
    number: "05",
    code: "SUP-05",
    title: "Project Supervision",
    description:
      "Independent construction management for developers requiring a trusted and professional site presence.",
    category: "MANAGE",
  },
  {
    number: "06",
    code: "PRC-06",
    title: "Procurement & Subcontracting",
    description:
      "Vetted electrical, mechanical and plumbing subcontractors coordinated under one point of contact.",
    category: "MANAGE",
  },
];

const ServicesGrid = () => {
  return (
    <Section className="relative overflow-hidden bg-[#F5F5F3]">
      {/* Background engineering grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.25]
          bg-[linear-gradient(rgba(17,17,17,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.07)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      <Container>
        <div className="relative z-10">
          {/* Section heading */}
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5C400]">
                  01
                </span>

                <span className="h-px w-10 bg-black/20" />

                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">
                  SERVICES
                </span>
              </div>

              <h2 className="mt-8 text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-7xl">
                WHAT
                <br />
                WE
                <br />
                BUILD.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl lg:pt-16"
            >
              <p className="text-xl leading-relaxed text-black/60 md:text-2xl">
                Construction services organized around clear scopes,
                professional supervision and controlled execution.
              </p>
            </motion.div>
          </div>

          {/* Service panels */}
          <div className="mt-20 grid border-l border-t border-black/10 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.number}
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
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  group
                  relative
                  min-h-[380px]
                  overflow-hidden
                  border-b
                  border-r
                  border-black/10
                  bg-white/60
                  p-8
                  transition-colors
                  duration-500
                  hover:bg-[#111111]
                  md:p-10
                "
              >
                {/* Large index */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-2
                    -top-8
                    font-mono
                    text-[160px]
                    font-bold
                    leading-none
                    text-black/[0.035]
                    transition-colors
                    duration-500
                    group-hover:text-white/[0.04]
                  "
                >
                  {service.number}
                </span>

                {/* Top metadata */}
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#F5C400]">
                    {service.number}
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/30 transition-colors group-hover:text-white/30">
                    {service.code}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mt-20 max-w-lg text-3xl font-black uppercase leading-none tracking-tight transition-colors duration-500 group-hover:text-white md:text-4xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative mt-6 max-w-lg text-sm leading-7 text-black/50 transition-colors duration-500 group-hover:text-white/45">
                  {service.description}
                </p>

                {/* Category */}
                <div className="absolute bottom-8 left-8">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/30 transition-colors group-hover:text-white/30">
                    {service.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center border border-black/10 transition-all duration-500 group-hover:border-[#F5C400]">
                  <ArrowUpRight
                    size={17}
                    className="transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F5C400]"
                  />
                </div>

                {/* Bottom yellow line */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#F5C400] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesGrid;