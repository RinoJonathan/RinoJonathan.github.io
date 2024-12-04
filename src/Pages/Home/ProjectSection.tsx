import Project from "@/CustomComponents/Projects/Project";
import { ProjectList } from "@/Data/Projectinterface";

export default function ProjectSection() {
  return (
    <div className="w-full min-h-screen grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 grid-rows-12 gap-12 p-12">
        
        {
            ProjectList.map((project, id) => <>
                <Project key={id} projectData={project}/>
            </>)
        }
    </div>
  )
}
