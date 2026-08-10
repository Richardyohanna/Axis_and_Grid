import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

const complianceItems = [
  {
    number: "01",
    code: "CAC",
    title: "Corporate Registration",
    description:
      "Axis & Grids is incorporated as a limited liability company under the Companies and Allied Matters Act.",
    status: "REGISTERED",
  },
  {
    number: "02",
    code: "CORBON",
    title: "Professional Standards",
    description:
      "The company is working toward corporate registration with the Council of Registered Builders of Nigeria.",
    status: "IN PROGRESS",
  },
  {
    number: "03",
    code: "TAX",
    title: "Tax Compliance",
    description:
      "Registered for company income tax and VAT with the Federal Inland Revenue Service.",
    status: "REGISTERED",
  },
  {
    number: "04",
    code: "INS",
    title: "Project Insurance",
    description:
      "Public liability and site insurance are maintained on active projects.",
    status: "MAINTAINED",
  },
];

const Compliance = () => {
  return (
    <Section className="relative overflow-hidden -mt-20 bg-white text-black">
      <Container>
        <div className="relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="mt-8 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
              BUILT ON
              <br />
              ACCOUNTABILITY.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-black/50 md:text-base">
              Professional construction requires more than good workmanship.
              We believe responsible project delivery also requires the right
              corporate, regulatory and operational framework.
            </p>
          </motion.div>

          {/* Compliance table */}
          <div className="mt-20 border-t border-black/10">
            {complianceItems.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
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
                  grid
                  gap-6
                  overflow-hidden
                  border-b
                  border-black/10
                  px-4
                  py-8
                  transition-colors
                  duration-500
                  hover:bg-[#111111]
                  md:grid-cols-[80px_120px_1fr_140px]
                  md:items-center
                  md:px-6
                "
              >
                {/* Number */}
                <span className="relative font-mono text-xs text-yellow">
                  {item.number}
                </span>

                {/* Code */}
                <div className="relative">
                  <span className="text-2xl font-black tracking-tight transition-colors duration-500 group-hover:text-white">
                    {item.code}
                  </span>
                </div>

                {/* Description */}
                <div className="relative">
                  <h3 className="text-lg font-bold transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-black/45 transition-colors duration-500 group-hover:text-white/45">
                    {item.description}
                  </p>
                </div>

                {/* Status */}
                <div className="relative md:text-right">
                  <span
                    className={`
                      inline-block
                      border
                      px-3
                      py-2
                      font-mono
                      text-[9px]
                      font-bold
                      tracking-[0.15em]
                      transition-colors
                      duration-500
                      ${
                        item.status === "IN PROGRESS"
                          ? "border-black/15 text-black/40 group-hover:border-white/15 group-hover:text-white/40"
                          : "border-yellow text-black group-hover:text-white"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Technical corner — matches CoreValues / EngineeringApproach */}
                <div className="absolute bottom-3 right-3 hidden items-end gap-1 opacity-40 md:flex">
                  <span className="h-3 w-px bg-yellow" />
                  <span className="h-px w-3 bg-yellow" />
                </div>

                {/* Yellow hover line */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-yellow transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Compliance;