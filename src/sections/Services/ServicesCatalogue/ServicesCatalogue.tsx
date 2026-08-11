import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import { servicesMain } from "../../../data/services";

const ServicesCatalogue = () => {
  const [activeService, setActiveService] = useState(servicesMain[0]);

  return (
    <Section className="relative bg-white text-black">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[320px_1fr] lg:gap-20">
          {/* ===================================== */}
          {/* TABLE OF CONTENTS */}
          {/* ===================================== */}

          <aside className="sm:sticky sm:top-20 sm:self-start lg:sticky lg:top-48 lg:self-start   md:sticky md:top-38 md:self-start">
            <div className="">
              <div className="flex items-center justify-between border-b border-black/10 py-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
                  SERVICES
                </span>

                <span className="font-mono text-[9px] text-black/30">
                  06 ITEMS
                </span>
              </div>

              <nav>
                {servicesMain.map((service) => {
                  const isActive = activeService.number === service.number;

                  return (
                    <button
                      key={service.number}
                      onClick={() => setActiveService(service)}
                      className={`
                        group
                        relative
                        flex
                        w-full
                        items-start
                        gap-4
                        overflow-hidden
                        border-b
                        border-black/10
                        py-5
                        text-left
                        transition-colors
                        duration-500
                        ${isActive ? "bg-[#111111]" : "hover:bg-[#111111]"}
                      `}
                    >
                      {/* Active indicator */}
                      <span
                        className={`
                          absolute
                          left-0
                          top-0
                          h-full
                          w-[3px]
                          bg-yellow
                          transition-transform
                          duration-300
                          ${isActive ? "scale-y-100" : "scale-y-0"}
                        `}
                      />

                      <span className="relative w-8 pl-4 font-mono text-[10px] text-yellow">
                        {service.number}
                      </span>

                      <span className="relative flex-1">
                        <span
                          className={`
                            block
                            text-sm
                            font-bold
                            uppercase
                            tracking-tight
                            transition-colors
                            duration-500
                            ${
                              isActive
                                ? "text-white"
                                : "text-black/50 group-hover:text-white"
                            }
                          `}
                        >
                          {service.title}
                        </span>

                        <span
                          className={`
                            mt-1
                            block
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.15em]
                            transition-colors
                            duration-500
                            ${
                              isActive
                                ? "text-white/40"
                                : "text-black/25 group-hover:text-white/40"
                            }
                          `}
                        >
                          {service.code}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={14}
                        className={`
                          relative
                          mr-4
                          mt-1
                          transition-colors
                          duration-500
                          ${
                            isActive
                              ? "text-yellow"
                              : "text-black/20 group-hover:text-yellow"
                          }
                        `}
                      />

                      {/* Technical corner — matches CoreValues / EngineeringApproach / Compliance */}
                      <div
                        className={`
                          absolute
                          bottom-2
                          right-2
                          flex
                          items-end
                          gap-1
                          transition-opacity
                          duration-500
                          ${
                            isActive
                              ? "opacity-40"
                              : "opacity-0 group-hover:opacity-40"
                          }
                        `}
                      >
                        <span className="h-2 w-px bg-yellow" />
                        <span className="h-px w-2 bg-yellow" />
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ===================================== */}
          {/* DOCUMENTATION */}
          {/* ===================================== */}

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeService.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <div className="">
                  <div className="py-5 md:py-9">
                    <h2 className="max-w-4xl text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] md:text-5xl lg:text-6xl">
                      {activeService.title}
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-black/55">
                      {activeService.description}
                    </p>
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden bg-[#EDEDEB]">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/70">
                      VISUAL REFERENCE
                    </div>

                    <div className="absolute right-5 top-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/60">
                      AX / {activeService.number}
                    </div>
                  </div>

                  <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <div>
                      <div className="flex items-center gap-3 border-b border-black/10 pb-4">
                        <span className="font-mono text-[10px] text-yellow">
                          01
                        </span>
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em]">
                          Scope of Work
                        </h3>
                      </div>

                      <ul className="mt-2">
                        {activeService.scope.map((item, index) => (
                          <li
                            key={item}
                            className="flex items-center gap-4 border-b border-black/10 py-4"
                          >
                            <span className="font-mono text-[9px] text-black/25">
                              0{index + 1}
                            </span>
                            <span className="text-sm text-black/65">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 border-b border-black/10 pb-4">
                        <span className="font-mono text-[10px] text-yellow">
                          02
                        </span>
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em]">
                          Suitable For
                        </h3>
                      </div>

                      <ul className="mt-2">
                        {activeService.suitableFor.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-4 border-b border-black/10 py-4"
                          >
                            <span className="h-1.5 w-1.5 bg-yellow" />
                            <span className="text-sm text-black/65">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col gap-6 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/25">
                      DOCUMENT REF: {activeService.code}
                    </div>

                    <a
                      href="/contact"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        bg-[#111111]
                        px-6
                        py-4
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-white
                        transition-all
                        duration-300
                        hover:bg-yellow
                        hover:text-[#111111]
                      "
                    >
                      Discuss This Service
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesCatalogue;