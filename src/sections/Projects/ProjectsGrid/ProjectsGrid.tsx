import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

import type { Project } from "../../../data/projects";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <Section className="relative bg-white text-black z-10 py-38 sm:py-43 md:py-45 lg:py-45">
      <Container>
        {/* <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/30">
              PROJECT DATABASE
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/30">
            {projects.length.toString().padStart(2, "0")} PROJECTS
          </span>
        </div> */}

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className={`
                  group
                  relative
                  ${
                    isFeatured
                      ? "md:col-span-2"
                      : ""
                  }
                `}
              >
                <a
                //   href={`/projects/${project.id}`}
                  className="block"
                >
                  {/* Image */}
                  <div
                    className={`
                      relative
                      overflow-hidden
                      bg-[#ECECE9]
                      ${
                        isFeatured
                          ? "aspect-5/2"
                          : "aspect-4/3"
                      }
                    `}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* Dark hover overlay */}
                    <div className="
                      absolute
                      inset-0
                      bg-black/0
                      transition-colors
                      duration-500
                      group-hover:bg-black/35
                    " />

                    {/* Blueprint grid */}
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
                            rgba(245,196,0,.35) 1px,
                            transparent 1px
                          ),
                          linear-gradient(
                            90deg,
                            rgba(245,196,0,.35) 1px,
                            transparent 1px
                          )
                        `,
                        backgroundSize: "50px 50px",
                      }}
                    />

                    {/* Project number */}
                    <div className="absolute left-5 top-5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                      PROJECT / {String(project.id).padStart(2, "0")}
                    </div>

                    {/* Arrow */}
                    <div className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border
                      border-white/40
                      text-white
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    ">
                      <ArrowUpRight size={16} />
                    </div>

                    {/* Hover project info */}
                    <div className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      translate-y-4
                      p-6
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    ">
                      <div className="flex flex-wrap gap-4 text-[8px] uppercase tracking-[0.2em] text-white/70">
                        <span>{project.category}</span>
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="border-b border-black/10 py-5">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h2 className="text-xl font-black uppercase tracking-normal md:text-2xl">
                          {project.title}
                        </h2>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-black/45">
                          {project.description}
                        </p>
                      </div>

                      <span className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-black/30 sm:block">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ProjectsGrid;