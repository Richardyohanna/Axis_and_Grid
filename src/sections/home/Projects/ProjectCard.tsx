import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import RevealImage from "../../../components/effects/RevealImage";

interface Props {
  project: any;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative mb-8 overflow-hidden rounded-2xl"
    >
     <RevealImage>
      <img
        src={project.image}
        alt={project.title}
        className={`
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          ${project.size === "large" ? "h-[460px]" : "h-[260px]"}
        `}
      />
     </RevealImage>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Blueprint Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
          bg-[linear-gradient(rgba(245,196,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(245,196,0,.08)_1px,transparent_1px)]
          bg-[size:32px_32px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          p-8
          translate-y-6
          transition-all
          duration-500
          group-hover:translate-y-0
        "
      >
        <span className="text-xs uppercase tracking-[0.3em] text-yellow">
          {project.category}
        </span>

        <h3 className="mt-3 text-3xl font-bold">
          {project.title}
        </h3>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/70">
            <MapPin size={16} />
            {project.location}
          </div>

          <ArrowUpRight
            className="
              transition-transform
              duration-500
              group-hover:translate-x-2
              group-hover:-translate-y-2
            "
          />
        </div>
      </div>

      {/* Animated engineering line */}
      <div
        className="
          absolute
          top-8
          left-8
          h-px
          w-0
          bg-yellow
          transition-all
          duration-700
          group-hover:w-32
        "
      />

      <div
        className="
          absolute
          top-8
          left-8
          h-0
          w-px
          bg-yellow
          transition-all
          duration-700
          delay-150
          group-hover:h-32
        "
      />
    </motion.div>
  );
};

export default ProjectCard;