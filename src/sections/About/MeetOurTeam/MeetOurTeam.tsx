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

                <h2 className="uppercase w-full mb-6 text-4xl font-bold tracking-[0.2em] flex justify-center text-yellow">
                    THE PEOPLE BEHIND THE STRUCTURE.
                </h2>

                <div className="relative">

                {/* Section heading */}
                {/* <motion.div
                    initial={{
                    opacity: 0,
                    y: 30,
                    }}
                    whileInView={{
                    opacity: 1,
                    y: 0,
                    }}
                    viewport={{
                    once: true,
                    margin: "-100px",
                    }}
                    transition={{
                    duration: 0.7,
                    }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-4">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#F5C400]">
                        AXIS A / GRID 04
                    </span>

                    <span className="h-px w-16 bg-black/20" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/30">
                        PEOPLE & EXPERTISE
                    </span>
                    </div>

                    <h2 className="mt-7 text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
                    THE PEOPLE
                    <br />
                    <span className="text-[#F5C400]">
                        BEHIND THE STRUCTURE.
                    </span>
                    </h2>

                    <p className="mt-8 max-w-2xl border-l-2 border-[#F5C400] pl-6 text-sm leading-7 text-black/50 md:text-base">
                    Our projects are delivered by a multidisciplinary
                    team of engineering, construction and project
                    management professionals working together to
                    achieve technical precision and quality.
                    </p>
                </motion.div> */}

                {/* Team database header */}
                {/* <div className="mt-3 flex items-center justify-between border-y border-black/10 py-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
                    TEAM DATABASE
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
                    {teamMembers.length
                        .toString()
                        .padStart(2, "0")}{" "}
                    PROFESSIONALS
                    </span>
                </div> */}

                    {/* Team grid */}
                
                    <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map((member, index) => (
                            <motion.article
                                key={member.id}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    margin: "-80px",
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                className="group"
                            >
                                <button
                                    type="button"
                                    // onClick={() => setSelectedMember(member)}
                                    className="block w-full text-left"
                                >
                                    {/* ================= IMAGE ================= */}
                                    <div className="relative aspect-[4/5] overflow-hidden bg-[#E9E9E7]">
                                        
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                                grayscale
                                                transition-all
                                                duration-700
                                                ease-out
                                                group-hover:scale-[1.04]
                                                group-hover:grayscale-0
                                            "
                                        />

                                        {/* Dark overlay */}
                                        <div
                                            className="
                                                pointer-events-none
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-black/50
                                                via-transparent
                                                to-transparent
                                                opacity-60
                                                transition-opacity
                                                duration-500
                                                group-hover:opacity-80
                                            "
                                        />

                                        {/* Technical Grid */}
                                        <div
                                            className="
                                                pointer-events-none
                                                absolute
                                                inset-0
                                                opacity-0
                                                transition-opacity
                                                duration-500
                                                group-hover:opacity-100
                                            "
                                            style={{
                                                backgroundImage: `
                                                    linear-gradient(
                                                        rgba(245,196,0,.3) 1px,
                                                        transparent 1px
                                                    ),
                                                    linear-gradient(
                                                        90deg,
                                                        rgba(245,196,0,.3) 1px,
                                                        transparent 1px
                                                    )
                                                `,
                                                backgroundSize: "45px 45px",
                                            }}
                                        />

                                        {/* Team Number */}
                                        <div className="absolute left-5 top-5">
                                            <span
                                                className="
                                                    font-mono
                                                    text-[9px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-white
                                                    drop-shadow-md
                                                "
                                            >
                                                TEAM / {String(member.id).padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* Yellow Accent */}
                                        <div
                                            className="
                                                absolute
                                                bottom-0
                                                left-0
                                                h-[3px]
                                                w-0
                                                bg-[#F5C400]
                                                transition-all
                                                duration-500
                                                group-hover:w-full
                                            "
                                        />
                                    </div>

                                    {/* ================= DETAILS ================= */}
                                    <div className="pt-5">
                                        <div className="flex items-start justify-between gap-4">
                                            
                                            {/* Name + Role */}
                                            <div>
                                                <h3
                                                    className="
                                                        text-xl
                                                        font-black
                                                        uppercase
                                                        leading-none
                                                        tracking-tight
                                                        text-[#111111]
                                                        transition-colors
                                                        duration-300
                                                        group-hover:text-[#F5C400]
                                                        md:text-2xl
                                                    "
                                                >
                                                    {member.name}
                                                </h3>

                                                <div className="mt-3 flex items-center gap-3">
                                                    <span className="h-[1px] w-6 bg-[#F5C400]" />

                                                    <p
                                                        className="
                                                            font-mono
                                                            text-[9px]
                                                            font-bold
                                                            uppercase
                                                            tracking-[0.16em]
                                                            text-black/50
                                                        "
                                                    >
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Index */}
                                            <span
                                                className="
                                                    shrink-0
                                                    font-mono
                                                    text-[9px]
                                                    font-bold
                                                    tracking-[0.15em]
                                                    text-black/25
                                                "
                                            >
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
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