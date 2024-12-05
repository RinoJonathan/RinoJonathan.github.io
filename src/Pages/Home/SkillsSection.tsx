import SkillComponent from "@/CustomComponents/Skills/SkillComponent";
import { skillList } from "@/Data/SkillsInterface";

export default function SkillsSection() {
  return (

    <section className="  min-h-screen w-full bg-gradient-to-br from-tblue to-tpurple">
     <h1 className="text-center w-10/12 m-auto text-white text-4xl p-2 border-b-2 pt-20" >Skills</h1>
         <div className="w-full md:w-10/12 m-auto p-12 min-h-screen  flex flex-row justify-center  items-center flex-wrap ">
       

        {
            skillList.map((skill, id) => <SkillComponent key={id} skill={skill}/>)
        }




    </div>
    </section>
  )
}
