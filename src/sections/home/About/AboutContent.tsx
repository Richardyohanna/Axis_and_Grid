import { company } from "../../../data/company";
import MissionCard from "./MissionCard";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >

        <h2
            className="
                mt-6
                text-5xl
                font-black
                leading-tight
        "
        >
            Engineering
            <br />
            Excellence Built
            <br />
            On Precision.
        </h2>

        <p
            className="
            mt-5
            text-md
            leading-8
            text-white/70
        "
        >
            {company.about}
        </p>

        <div className="mt-5 space-y-6">
            <MissionCard
            title="Mission"
            description={company.mission}
            />

            <MissionCard
            title="Vision"
            description={company.vision}
            />
    </div>
    </motion.div>
  );
};

export default AboutContent;