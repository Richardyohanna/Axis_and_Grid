import { ArrowUpRight } from "lucide-react";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

const ContactCTA = () => {
  return (
    <Section className="bg-[#111111] text-white">
      <Container>
        <div className="relative overflow-hidden py-20 md:py-28">
          {/* Blueprint grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
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

          <div className="relative z-10">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#F5C400]">
              AXIS A / GRID 06
            </span>

            <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-6xl">
              From concept
              <br />
              to construction.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
              Engineering precision begins with the first
              conversation.
            </p>

            <a
              href="mailto:info@axisandgrids.ng"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-4
                bg-[#F5C400]
                px-7
                py-5
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
              Contact Axis & Grid

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactCTA;