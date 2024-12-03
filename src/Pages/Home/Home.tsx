import Project from "../../Components/Projects/Project";
import HeroSection from "./HeroSection";


export default function Home() {
  return (
    <main className=" min-h-screen ">

      <HeroSection />

      <section className=" z-20  min-h-screen w-full ">

      </section >
      <section className=" z-20  min-h-screen w-full bg-gradient-to-br from-tpurple to-tblue">
        <div className="hollow-arrow"></div>
        <div className="w-full min-h-screen grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 grid-rows-12 gap-12 p-12">

          <Project/>
          <Project/>
          <Project/>

          <Project/>
          <Project/>
          <Project/>

          <Project/>
          <Project/>
          <Project/>

        </div>
      </section>
    </main>
  )
}
