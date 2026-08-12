import { ArrowUpRight } from "lucide-react";
import logo from "../../assets/logo/full_logo.svg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      {/* Blueprint grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Axis */}
      {/* <div className="pointer-events-none absolute left-[12%] top-0 h-full w-px bg-yellow" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Top */}
        <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          {/* Brand */}
          <div>
            <div className="flex items-center max-w-[200px] gap-3">
              {/* Replace this with your actual logo component/image */}
              <img src={logo} alt="" />
            </div>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">
              General contracting for residential, commercial and renovation
              projects across Nigeria.
            </p>

            <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-yellow">
              ENGINEERING · CONSTRUCTION · PRECISION
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-yellow">
              CONTACT
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-white/50">
              <li>Abuja, FCT, Nigeria</li>

              <li>
                <a
                  href="mailto:info@axisandgrids.ng"
                  className="transition-colors hover:text-yellow"
                >
                  info@axisandgrids.ng
                </a>
              </li>

              <li>+234 (0) 901 931 5954</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-yellow">
              COMPANY
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-white/50">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>

              <li>
                <a href="#process" className="hover:text-white">
                  Process
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-yellow">
              START A PROJECT
            </h4>

            <p className="mt-6 text-sm leading-7 text-white/45">
              Have a project in mind? Start a conversation with Axis & Grids.
            </p>

            <a
              href="mailto:info@axisandgrids.ng"
              className="group mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Contact

              <ArrowUpRight
                size={16}
                className="text-yellow transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Engineering reference */}
        {/* <div className="flex flex-col gap-5 py-7 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 md:flex-row md:items-center md:justify-between">
          <span>AXIS A</span>

          <div className="flex flex-1 items-center gap-3 md:mx-10">
            <span className="h-px flex-1 bg-white/10" />

            <span className="text-yellow/50">
              GRID 01 ── GRID 02 ── GRID 03
            </span>

            <span className="h-px flex-1 bg-white/10" />
          </div>

          <span>GRID 04</span>
        </div> */}

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.15em] text-white/30 md:flex-row md:items-center md:justify-between">
          <span>
            © 2026 Axis & Grids Construction
          </span>

          <span>
            Engineering & Construction · Abuja, Nigeria
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;