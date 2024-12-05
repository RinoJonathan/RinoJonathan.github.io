// import Project from "../../CustomComponents/Projects/Project";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";


export default function Home() {
  return (
    <main className=" min-h-screen ">

      <HeroSection />


      <div className="content">
      
        
        

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



      </div>
    </main>
  )
}
