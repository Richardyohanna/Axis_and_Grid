import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  service: any;
  index: number;
}

const ServiceCard = ({ service, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="
        group
        relative
        overflow-hidden
        border
        border-white/10
        bg-white/[0.18]
        p-8
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-yellow
      "
    >
      {/* Number */}
      {/* <span className="text-5xl font-black text-white/10">
        {service.id}
      </span> */}

      {/* Blueprint Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            h-full
            w-full
            bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
            bg-[size:28px_28px]
          "
        />
      </div>

      <div className="relative z-10">

        <h3 className="mt-6 text-2xl font-bold">
          {service.title}
        </h3>

        <p className="mt-6 leading-8 text-white/70">
          {service.description}
        </p>

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              uppercase
              tracking-widest
              text-sm
            "
          >
            Learn More
          </span>

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

      {/* Yellow Axis Line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-yellow
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </motion.div>
  );
};

export default ServiceCard;