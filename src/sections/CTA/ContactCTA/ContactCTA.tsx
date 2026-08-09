import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

const ContactCTA = () => {
  return (
    <Section className="relative overflow-hidden bg-[#F5C400]">
      {/* Blueprint grid */}
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

      {/* Large engineering axis */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-black/10" />

      <Container>
        <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_0.8fr]">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.35em]">
                PROJECT INITIATION
              </span>

              <span className="h-px w-16 bg-black/40" />
            </div> */}

            <h2 className="mt-8 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-black md:text-6xl lg:text-8xl">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              PRECISE.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-black/65 md:text-lg">
              Planning a residential, commercial, renovation or civil works
              project? Tell us what you are building and our team can assess
              the next step.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:info@axisandgrids.ng"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  bg-[#111111]
                  px-7
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-black
                "
              >
                Contact

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Technical panel */}
            <div className="border border-black/20 bg-black/[0.4] p-6 md:p-8">
              
              <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-5">
                <span className="font-mono text-xs font-bold tracking-[0.2em]">
                  PROJECT DATA
                </span>

                <span className="font-mono text-[10px] opacity-50">
                  AX-GRID / 001
                </span>
              </div>

              <div className="space-y-7">
                <div>
                  <label className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                    Project Type
                  </label>

                  <div className="border-b border-black/20 pb-3 text-sm">
                    Residential / Commercial / Civil Works
                  </div>
                </div>

                <div>
                  <label className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                    Location
                  </label>

                  <div className="border-b border-black/20 pb-3 text-sm">
                    Abuja / Nigeria
                  </div>
                </div>

                <div>
                  <label className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                    Initial Requirement
                  </label>

                  <div className="min-h-24 border border-black/15 p-4 text-sm text-black/45">
                    Tell us briefly about the project...
                  </div>
                </div>

                <a
                  href="mailto:info@axisandgrids.ng"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    border
                    border-black
                    px-5
                    py-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    hover:bg-black
                    hover:text-white
                  "
                >
                  Start Project Inquiry

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Coordinates */}
            <div className="mt-5 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
              <span>LAT 09.0765</span>
              <span>LONG 07.3986</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactCTA;