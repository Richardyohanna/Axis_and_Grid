import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import WireframeBuilding from "../../../components/ui/Wifeframebuilding";
// import { motion } from "framer-motion";
import { useState } from "react";

const AboutHero = () => {
     const [activeFloor, setActiveFloor] = useState(3);


  return (
    <Section className="relative min-h-[75vh] overflow-hidden bg-[#ffffff] text-black overflow-hidden pt-28 lg:pt-42">
      {/* Blueprint grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]

        "
                //   bg-[linear-gradient(rgba(0,0,0,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.35)_1px,transparent_1px)]
        //   bg-[size:60px_60px]
      />

      {/* Main axis */}
      {/* <div className="pointer-events-none absolute left-[12%] top-0 h-full w-px bg-[#F5C400]/20" /> */}

      {/* Horizontal axis */}
      {/* <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-[#F5C400]/10" /> */}

      <Container>
        <div className="relative mt-20 z-10 flex  flex-col justify-center">
          
          {/* Technical reference */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#F5C400]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#F5C400]">
              AXIS A / GRID 01
            </span>
          </motion.div> */}

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="
              max-w-5xl
              text-5xl
              font-black
              uppercase
              leading-[0.88]
              tracking-[-0.04em]
              md:text-6xl
              lg:text-[5rem]
            "
          >
            BUILT  ON
            <br />
            <span className="text-[#F5C400]">PRECISION.</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 max-w-xl "
            //  pl-6 border-l border-[#F5C400]
          >
            <p className="text-sm leading-7 text-black/55 md:text-base">
              Axis & Grids is a general contracting company delivering
              residential, commercial and renovation projects with a focus on
              technical precision, professional supervision and transparent
              project execution.
            </p>
          </motion.div>
        
       

          {/* Coordinates */}
          <div className="absolute bottom-8 right-0 hidden font-mono text-[9px] uppercase tracking-[0.25em] text-white/25 md:block">
            FCT / NIGERIA
            <br />
            {/* REF: AX-GRID-001 */}
          </div>
        </div>
        <div className="absolute z-10 left-100 right-0 -top-45 h-full w-full  pt-28 lg:pt-52">
             <WireframeBuilding
                floors={3}
                line="#000000"
                activeFloor={activeFloor}
                onFloorSelect={(active) =>setActiveFloor(active)}
                />
        </div>
        
      </Container>
    </Section>
  );
};

export default AboutHero;