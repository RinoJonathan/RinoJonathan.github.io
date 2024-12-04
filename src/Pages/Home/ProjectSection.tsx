import Project from "@/CustomComponents/Projects/Project";
import { ProjectList } from "@/Data/Projectinterface";

export default function ProjectSection() {
  return (
    <>
        
        {
            ProjectList.map((project, id) => <>
                <Project key={id} projectData={project}/>
            </>)
        }
    </>
  )
}
