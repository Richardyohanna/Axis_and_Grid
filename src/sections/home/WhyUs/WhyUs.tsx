import { motion } from "framer-motion";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

import { whyUsItems } from "../../../data/whyUs";

import WhyUsItem from "./WhyUsItem";
import EngineeringMetric from "./EngineeringMetric";

const WhyUs = () => {
  return (
    <Section className="relative overflow-hidden bg-[#0B0B0B]">
      {/* Blueprint grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Vertical engineering axis */}
      <div className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-yellow/10" />

      <Container>
        <div className="relative z-10 grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-yellow">
              WHY AXIS & GRID
            </span>

            <h2 className="mt-6 text-4xl font-black leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Precision
              <br />
              Is The
              <br />
              Standard.
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-white/50">
              We approach construction through structured planning,
              professional supervision and transparent project execution.
            </p>

            {/* Metrics */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <EngineeringMetric
                value="CAC"
                label="Registered company"
              />

              <EngineeringMetric
                value="FCT"
                label="Based in Abuja"
              />

              <EngineeringMetric
                value="BOQ"
                label="Itemized quoting"
              />

              <EngineeringMetric
                value="NG"
                label="Nationwide work"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <div>
            {whyUsItems.map((item, index) => (
              <WhyUsItem
                key={item.id}
                item={item}
                index={index}
              />
            ))}

            {/* Technical footer */}
            <div className="mt-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
              <span>AX-GRID / SPECIFICATION</span>

              <span>04 / 04</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyUs;