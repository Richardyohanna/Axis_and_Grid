import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import type { TeamMember } from "../../../data/team";

interface TeamProfileModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamProfileModal = ({
  member,
  onClose,
}: TeamProfileModalProps) => {
  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-[80]
              bg-black/70
              backdrop-blur-sm
            "
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              inset-x-4
              top-1/2
              z-[90]
              max-h-[90vh]
              -translate-y-1/2
              overflow-y-auto
              bg-white
              shadow-2xl
              md:inset-x-auto
              md:left-1/2
              md:w-[850px]
              md:-translate-x-1/2
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-5 md:px-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#F5C400]">
                  TEAM /{" "}
                  {String(member.id).padStart(2, "0")}
                </span>

                <span className="h-px w-10 bg-black/20" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/30">
                  PROFESSIONAL PROFILE
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-black/10
                  transition-colors
                  hover:border-[#F5C400]
                  hover:bg-[#F5C400]
                "
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-[.8fr_1.2fr]">
              {/* Portrait */}
              <div className="relative aspect-[4/5] bg-[#E9E9E7] md:aspect-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute bottom-5 left-5">
                  <span className="bg-[#F5C400] px-3 py-2 font-mono text-[8px] font-bold uppercase tracking-[0.15em]">
                    AXIS & GRID
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-7 md:p-10">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
                  {member.role}
                </span>

                <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight md:text-5xl">
                  {member.name}
                </h2>

                <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.15em] text-[#F5C400]">
                  {member.experience}
                </p>

                {/* Company */}
                <div className="mt-8 border-t border-black/10 pt-6">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
                    COMPANY
                  </span>

                  <p className="mt-2 text-sm">
                    {member.company}
                  </p>
                </div>

                {/* Qualifications */}
                <div className="mt-8 border-t border-black/10 pt-6">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
                    QUALIFICATIONS
                  </span>

                  <div className="mt-4 space-y-2">
                    {member.qualifications.map(
                      (qualification) => (
                        <div
                          key={qualification}
                          className="flex items-center gap-3 text-sm"
                        >
                          <span className="h-1.5 w-1.5 bg-[#F5C400]" />
                          {qualification}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-8 border-t border-black/10 pt-6">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
                    PROFESSIONAL PROFILE
                  </span>

                  <p className="mt-4 text-sm leading-7 text-black/55">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise */}
                <div className="mt-8 border-t border-black/10 pt-6">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
                    AREAS OF EXPERTISE
                  </span>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {member.expertise.map(
                      (skill) => (
                        <div
                          key={skill}
                          className="
                            border
                            border-black/10
                            p-3
                            text-[9px]
                            uppercase
                            tracking-[0.08em]
                          "
                        >
                          {skill}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Affiliations */}
                {member.affiliations &&
                  member.affiliations.length > 0 && (
                    <div className="mt-8 border-t border-black/10 pt-6">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
                        PROFESSIONAL AFFILIATIONS
                      </span>

                      <div className="mt-4 space-y-2">
                        {member.affiliations.map(
                          (affiliation) => (
                            <div
                              key={affiliation}
                              className="flex gap-3 text-xs leading-5 text-black/55"
                            >
                              <ArrowUpRight
                                size={13}
                                className="mt-1 shrink-0 text-[#F5C400]"
                              />

                              {affiliation}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TeamProfileModal;