import Project from "@/CustomComponents/Projects/Project";
import { ProjectList } from "@/Data/Projectinterface";

export default function ProjectSection() {
  return (
    <>
      <h1 className="text-center w-10/12 m-auto text-white text-4xl p-2 border-b-2">
        Projects
      </h1>
      <div className="w-full min-h-screen flex flex-wrap justify-center gap-12 p-12">
        {ProjectList.map((project, id) => (
          <Project key={id} projectData={project} />
        ))}
      </div>
    </>
  );
}
