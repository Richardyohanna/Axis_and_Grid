import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import about from "../../../assets/images/hero/hero.png";

const CompanyOverview = () => {
  return (
    <Section className="relative -mt-20 bg-white">
        
        <span className="uppercase w-full mb-10  tracking-[0.2em] flex justify-center text-yellow text-2xl">
            WHO WE ARE
        </span>
      <Container>
        <div className="grid gap-16  lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32 w-full h-full">
              {/* <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5C400]">
                  01
                </span>

                <span className="h-px w-10 bg-[#111111]/20" />

                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40">
                  COMPANY 
                </span>
              </div> */}

              {/* <h2 className="mt-8 text-4xl font-black text-black uppercase leading-none tracking-tight md:text-6xl lg:text-9xl">
                WHO
                <br />
                WE
                <br />
                ARE.
              </h2> */}
              <img src={about} alt="" className="w-full h-full object-cover"/>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-2xl font-medium tracking-tight text-[#111111] md:text-4xl">
              Axis & Grids delivers construction solutions with the discipline
              of an engineering process.
            </p>

            <div className="mt-5 space-y-2 text-sm text-black/55 md:text-base">
              <p>
                Based in Abuja, Nigeria, Axis & Grids provides general
                contracting services across residential, commercial and
                renovation projects.
              </p>

              <p>
                Our work is built around clear planning, professional site
                supervision, transparent cost control and structured project
                execution — from the first site visit through to final
                handover.
              </p>

              <p>
                Rather than treating construction as a collection of
                disconnected activities, we approach every project as a
                coordinated system where planning, procurement, workmanship,
                supervision and quality control work together.
              </p>
            </div>

            {/* Engineering statement */}
            {/* <div className="mt-12 border-y border-black/10 py-8">
              <p className="font-mono text-xs uppercase leading-7 tracking-[0.15em] text-black/45">
                DESIGN INTENT
              </p>

              <p className="mt-3 text-xl font-semibold leading-relaxed md:text-2xl">
                Precision from the first line.
              </p>
            </div> */}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default CompanyOverview;