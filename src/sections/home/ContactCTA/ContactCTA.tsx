import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "../../../assets/logo/full_logo.svg";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

const ContactCTA = () => {
  return (
    <Section className="relative overflow-hidden bg-[#F5C400] py-0">
      {/* Blueprint grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
          bg-[linear-gradient(rgba(17,17,17,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.5)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center gap-8 py-10 md:flex-row md:justify-between md:gap-6 md:py-8"
        >
        

          {/* LEFT — mark */}
          {/* <div className="hidden shrink-0 items-center justify-center border border-black/20 md:flex md:h-20 md:w-20">
            {/* <svg
              viewBox="0 0 48 48"
              className="h-10 w-10"
              fill="none"
              stroke="#111111"
              strokeWidth="2.5"
            >
              <path d="M8 34 L24 12 L40 34" strokeLinecap="square" strokeLinejoin="miter" />
              <path d="M16 34 L24 22 L32 34" strokeLinecap="square" strokeLinejoin="miter" />
              <circle cx="24" cy="8" r="2" fill="#111111" stroke="none" />
              <circle cx="6" cy="34" r="2" fill="#111111" stroke="none" />
            </svg> *
           
          </div> */}

           <div className="hidden shrink-0 items-center justify-center md:flex md:h-40 md:max-w-[200px]">
            <img src={logo} alt="" className="w-full h-full object-cover" />
          </div>

          {/* CENTER — heading + CTA */}
          <div className="flex flex-1 flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-center md:gap-10 md:text-left">
            <h2 className="text-2xl font-black uppercase leading-tight tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
              Let's Build Something
              <br />
              Extraordinary Together
            </h2>

            <a
              href="mailto:info@axisandgrids.ng"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                bg-[#111111]
                px-6
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
              Start Your Project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* RIGHT — technical tag */}
          <div className="hidden shrink-0 items-center justify-center border border-black/20 px-5 py-6 md:flex">
            <span className="font-mono text-sm font-bold tracking-[0.15em] text-black">
              A-1
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ContactCTA;