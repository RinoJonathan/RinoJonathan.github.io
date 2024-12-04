import SkillComponent from "@/CustomComponents/Skills/SkillComponent";
import { skillList } from "@/Data/SkillsInterface";

export default function SkillsSection() {
  return (

    <>
     <h1 className="text-center w-full text-white text-4xl">Skills</h1>
         <div className="w-full md:w-10/12 m-auto p-12 min-h-screen  flex flex-row justify-center  items-center flex-wrap">
       

        {
            skillList.map((skill, id) => <SkillComponent key={id} skill={skill}/>)
        }




    </div>
    </>
  )
}