import { ArrowUpRight } from "lucide-react";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

const ProjectsCTA = () => {
  return (
    <Section className="bg-[#111111] text-white">
      <Container>
        <div className="relative overflow-hidden py-20 md:py-28">
          
          {/* Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.12]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(245,196,0,.5) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(245,196,0,.5) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-4xl">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#F5C400]">
              AXIS A / GRID 04
            </span>

            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-6xl">
              Have a project
              <br />
              in mind?
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
              Talk to our team about your next construction,
              renovation or civil engineering project.
            </p>

            <a
              href="/contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                bg-[#F5C400]
                px-6
                py-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#111111]
                transition-all
                duration-300
                hover:bg-white
              "
            >
              Start a Project

              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProjectsCTA;