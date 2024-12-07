import {motion } from 'motion/react'
import { useSetRecoilState } from "recoil";
import { placeholderProject, ProjectInterface } from "../../Data/Projectinterface";
import ProjectPreview from "./ProjectPreview";
import { ProjectPopupState } from "@/Data/Project";
import BadgeGenerator from "./BadgeGenerator";

interface ProductProp {
  projectData?: ProjectInterface;
}

const animationList = {
  offScreen : {
    opacity: 0,
    y: 100,
  },
  onScreen : {
    opacity : 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  },
  exitScreen: {
    opacity : 0,
    y: 100,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  },
  cardAnimation : {
    scale: 1.05,
    boxShadow: "0px 0px 20px 10px rgba(138,43,226,0.5), 0px 0px 20px 10px rgba(65,105,225,0.5)",
    
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 300,
      damping: 20,
  
    }
  },

}

export default function ({ projectData = placeholderProject }: ProductProp) {
  const setPopupState = useSetRecoilState(ProjectPopupState);

  const openPopup = () => {
    setPopupState((state) => {
      return state ? false : projectData;
    });
  };

  return (
    <>
      <motion.div
        className="w-96 min-h-80 bg-gradient-to-tl bg-tpurple rounded-xl text-white cursor-pointer 
        flex flex-col"
        onClick={openPopup}

        variants={animationList}
        initial="offScreen"
        whileHover="cardAnimation"
        whileInView="onScreen"
        
        
      >
        <h1 className="text-center text-xl p-2 m-4">{projectData.name}</h1>

        <img
          className="m-auto p-2 w-full rounded-xl"
          src={projectData.images[0]}
          alt={`${projectData.name} Thumbnail image`}
        />

        <p className="p-2 my-2">{projectData.brief}</p>

        <p className="p-1 px-2">Technologies Used:</p>
        <div className="w-full p-1 flex flex-row flex-wrap content-center items-center">
          {projectData.technologies.map((tech, id) => (
            <div key={id} className="m-1 p-1 bg-tpurple rounded-xl text-xs">
              {tech}
            </div>
          ))}
        </div>

        <div className="mt-auto p-2">
          <BadgeGenerator projectData={projectData} lite={true} />
        </div>
      </motion.div>
      
      <ProjectPreview projectData={projectData} />
      
    </>
  );
}
