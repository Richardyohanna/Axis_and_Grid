import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { WhyUsItem as WhyUsItemType } from "../../../data/whyUs";

interface Props {
  item: WhyUsItemType;
  index: number;
}

const WhyUsItem = ({ item, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      viewport={{ once: true, margin: "-80px" }}
      className="group relative border-b border-white/10 py-8"
    >
      {/* Technical reference */}
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-xs tracking-[0.25em] text-yellow">
          {item.reference}
        </span>

        <span className="font-mono text-xs text-white/20">
          00{index + 1}
        </span>
      </div>

      <div className="flex items-start gap-6">
        {/* Number */}
        <span className="hidden font-mono text-sm text-white/30 sm:block">
          {item.number}
        </span>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-6">
            <h3 className="text-xl font-bold text-white md:text-2xl">
              {item.title}
            </h3>

            <ArrowUpRight
              size={22}
              className="
                shrink-0
                text-yellow
                opacity-40
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:opacity-100
              "
            />
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
            {item.description}
          </p>
        </div>
      </div>

      {/* Animated yellow axis */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          delay: index * 0.12 + 0.2,
        }}
        viewport={{ once: true }}
        className="
          absolute
          bottom-[-1px]
          left-0
          h-px
          w-full
          origin-left
          bg-yellow
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
};

export default WhyUsItem;