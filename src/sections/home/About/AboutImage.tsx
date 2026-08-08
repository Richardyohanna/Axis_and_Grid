import building from "../../../assets/about/about.png";

import GridOverlay from "../../../components/ui/GridOverlay";

import BlueprintDecoration from "./BlueprintDecoration";
import FloatingInfoCard from "./FloatingInfoCard";
import { motion } from "framer-motion";

const AboutImage=()=>{

return(

<motion.div
  className="relative h-[550px]"
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
    
    <img
        src={building}
        alt="Construction"
        className="
            w-full
            h-full
            object-cover
            rounded-3xl
        "
    />

    <div
        className="
            absolute
            inset-0
            bg-black/40
            rounded-3xl
        "
    />

    <GridOverlay className="opacity-20"/>

    <BlueprintDecoration/>

    <FloatingInfoCard />
</motion.div>

);

};

export default AboutImage;