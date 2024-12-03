import { placeholderProject, ProjectInterface } from "../../Interfaces/Projectinterface";
import ProjectPreview from "./ProjectPreview";

interface ProductProp {
    projectData?: ProjectInterface;
}

export default function ({ projectData = placeholderProject }: ProductProp) {
    return (
        <div className=' bg-tblue col-span-4 row-span-8 rounded-xl text-white'>
            <h1 className="text-center text-xl p-2 m-4">{projectData.name}</h1>
            
            <img
                className="m-auto p-2 w-full rounded-xl"
                src={projectData.images[0]}
                alt={`${projectData.name} Thumbnail image`} />

            <p className="p-2 my-2">{projectData.brief}</p>

            <p className="p-1 px-2">Technologies Used:</p>
            <div className="w-full  p-1 flex flex-row flex-wrap content-center items-center">
                
                {projectData.technologies.map((tech, id) => <>
                    <div key={id} className="m-1 p-1 bg-tpurple rounded-xl text-xs">{tech}</div>

                </>


                )}
            </div>

            <ProjectPreview content="temp" isOpen={true} onClose={() => console.log("closed")}/>

        </div>
    )
}

