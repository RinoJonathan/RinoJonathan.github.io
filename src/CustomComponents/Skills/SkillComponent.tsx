
import { SkillInterface, skillPlaceholder } from "@/Data/SkillsInterface";
import { motion } from "motion/react";

interface SkillsPropInterface {
    skill: SkillInterface;
}

const skillAnimation = {
  offScreen : {
    opacity: 0,
    y: 100,
  },
  onScreen : {
    opacity : 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  },
}

export default function SkillComponent({ skill = skillPlaceholder }: SkillsPropInterface) {

  // Get the React component (image) from the skill
  const ImageComponent = skill.image;

  return (
    <motion.div 
    className="text-white w-32 h-32 m-10"
    variants={skillAnimation}
    initial="offScreen"
    whileInView="onScreen">
      {/* Render the React component dynamically */}
      <ImageComponent className="w-full h-full m-auto p-2" />
      <p className="text-center text-xl m-2">{skill.name}</p>
    </motion.div>
  );
}
