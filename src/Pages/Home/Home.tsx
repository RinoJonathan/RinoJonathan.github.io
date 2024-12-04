// import Project from "../../CustomComponents/Projects/Project";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";


export default function Home() {
  return (
    <main className=" min-h-screen ">

      <HeroSection />

      <section className=" z-20  min-h-screen w-full ">

      </section >
      <section className=" z-20  min-h-screen w-full bg-gradient-to-br from-tpurple to-tblue">
        <div className="hollow-arrow"></div>
        

          <ProjectSection/>

          <SkillsSection/>

          
          {/* <Project/>
          <Project/>

          <Project/>
          <Project/>
          <Project/>

          <Project/>
          <Project/>
          <Project/> */}


      </section>
    </main>
  )
}
