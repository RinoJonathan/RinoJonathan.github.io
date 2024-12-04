
import { SkillInterface, skillPlaceholder } from "@/Data/SkillsInterface";

interface SkillsPropInterface {
    skill: SkillInterface;
}

export default function SkillComponent({ skill = skillPlaceholder }: SkillsPropInterface) {

  // Get the React component (image) from the skill
  const ImageComponent = skill.image;

  return (
    <div className="text-white w-32 h-32 m-10">
      {/* Render the React component dynamically */}
      <ImageComponent className="w-full h-full m-auto p-2" />
      <p className="text-center text-xl m-2">{skill.name}</p>
    </div>
  );
}
