import SkillComponent from "@/CustomComponents/Skills/SkillComponent";

export default function SkillsSection() {
  return (
    <div className="w-full min-h-screen grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 md:grid-cols-20 grid-rows-12 gap-12 p-12">
        <h1 className=" col-span-full text-center">Skills</h1>

        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>
        <SkillComponent/>

    </div>
  )
}
