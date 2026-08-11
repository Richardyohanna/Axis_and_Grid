import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import ServicesWireframeHero from "../../../components/ui/ServiceWireframe";

const ProjectsHero = () => {
  return (
    <Section className="relative overflow-hidden  bg-white text-black">
      {/* Blueprint grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.25]
        
          bg-[size:60px_60px]
        "
        //   bg-[linear-gradient(rgba(17,17,17,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.045)_1px,transparent_1px)]
      />

      <Container>
        <div className="relative z-10 py-28 md:py-38">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Technical heading */}
            {/* <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5C400]">
                AXIS A / GRID 03
              </span>

              <span className="h-px w-16 bg-black/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/30">
                PROJECT ARCHIVE
              </span>
            </div> 
            
                          text-5xl
              font-black
              uppercase
              leading-[0.88]
              tracking-[-0.04em]
              md:text-6xl
              lg:text-[5rem]
            
            */}

            <h1 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-6xl lg:text-[5rem]">
              LET'S BUILD
              <br />
              <span className="text-[#F5C400]">WITH PRECISION.</span>
            </h1>

            {/* border-l-2 border-[#F5C400] pl-6 */}
            <div className="mt-8 max-w-2xl ">
              <p className="text-sm leading-7 text-black/55 md:text-base">
              Tell us about your project, development or engineering
              requirement. Our team will review your enquiry and get
              back to you with the next steps.
              </p>
            </div>

            {/* Technical metadata */}
            {/* <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[9px] uppercase tracking-[0.2em] text-black/30">
              <span>ARCHIVE: 2024—2026</span>
              <span>REGION: NIGERIA</span>
              <span>STATUS: ACTIVE</span>
            </div> */}
          </motion.div>
        </div>
        <div className="absolute z-10 left-170 right-0 top-0 h-full w-full  pt-28 lg:pt-36">
            <ServicesWireframeHero /> 
        </div>
      </Container>
    </Section>
  );
};

export default ProjectsHero;