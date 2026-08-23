// import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

// import type { TeamMember } from "../../../data/team";
import  { teamMembers } from "../../../data/team";
// import TeamProfileModal from "./TeamProfileModal";
import EngineeringBackground from "../../../components/effects/EngineeringBackground";

const MeetOurTeam = () => {
//   const [selectedMember, setSelectedMember] =
//     useState<TeamMember | null>(null);

  return (
    <Section className="relative overflow-hidden bg-white text-black">
      {/* Blueprint grid */}
      {/* <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.3]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(17,17,17,.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(17,17,17,.04) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      /> */}

      {/* Yellow axis */}
      {/* <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-0
          h-full
          w-px
          bg-[#F5C400]/40
        "
      /> */}
        <EngineeringBackground>
            <Container>

                <h2 className="uppercase w-full mb-4 text-3xl font-bold tracking-[0.2em] flex justify-center text-yellow lg:text-4xl lg:mb-6">
                    THE PEOPLE BEHIND THE STRUCTURE.
                </h2>

                <div className="relative">
                    <div className="mt-6 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-8">
                        {teamMembers.map((member, index) => (
                            <motion.article
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                                className="group"
                            >
                                <button type="button" className="block w-full text-left">
                                    {/* ================= IMAGE ================= */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E9E7] lg:aspect-[5/5]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="
                                                h-full w-full object-cover object-top grayscale
                                                transition-all duration-700 ease-out
                                                group-hover:scale-[1.04] group-hover:grayscale-0
                                            "
                                        />

                                        {/* Dark overlay */}
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                                        {/* Technical Grid */}
                                        <div
                                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                            style={{
                                                backgroundImage: `
                                                    linear-gradient(rgba(245,196,0,.3) 1px, transparent 1px),
                                                    linear-gradient(90deg, rgba(245,196,0,.3) 1px, transparent 1px)
                                                `,
                                                backgroundSize: "45px 45px",
                                            }}
                                        />

                                        {/* Team Number */}
                                        {/* <div className="absolute left-4 top-4">
                                            <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white drop-shadow-md">
                                                TEAM / {String(member.id).padStart(2, "0")}
                                            </span>
                                        </div> */}

                                        {/* Yellow Accent */}
                                        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F5C400] transition-all duration-500 group-hover:w-full" />
                                    </div>

                                    {/* ================= DETAILS ================= */}
                                    <div className="pt-2 lg:pt-3">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-base font-black uppercase leading-tight tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-[#F5C400] lg:text-lg">
                                                    {member.name}
                                                </h3>

                                                <div className="mt-1.5 flex items-center gap-2 lg:mt-2">
                                                    {/* <span className="h-[1px] w-5 bg-[#F5C400]" /> */}
                                                    <p className="font-mono text-sm! font-bold uppercase tracking-[0.16em] text-black/50">
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* <span className="shrink-0 font-mono text-[8px] font-bold tracking-[0.15em] text-black/25">
                                                {String(index + 1).padStart(2, "0")}
                                            </span> */}
                                        </div>
                                    </div>
                                </button>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </Container>
        </EngineeringBackground>
      {/* Profile modal */}
      {/* <TeamProfileModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      /> */}
    </Section>
  );
};

export default MeetOurTeam;