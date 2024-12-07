import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ProjectInterface } from "@/Data/Projectinterface";
import { useRecoilState } from "recoil";
import { ProjectPopupState } from "@/Data/Project";
import AuroraButton from "../ArouraButton/AuroraButton";
import BadgeGenerator from "./BadgeGenerator";
import { AnimatePresence, motion } from "motion/react";


interface ProjectPreviewProps {
  projectData: ProjectInterface;
}

const animationList ={
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 300,
      damping: 20,
      
    },
  },
  exit: { opacity: 0, scale: 0.4, transition: { duration: 0.3 } },

};


const ProjectPreview: React.FC<ProjectPreviewProps> = ({ projectData }) => {

  const [popupState, setPopupState] = useRecoilState(ProjectPopupState)

  const onClose = () => {
    console.log(popupState)
    setPopupState(false)
  }

  return (
   <AnimatePresence>
      {popupState && (popupState.name === projectData.name) && (
     <motion.div
      className="fixed inset-0 bg-black text-black bg-opacity-10 flex justify-center items-center z-50"
      variants={animationList}

      initial="hidden"
      animate="visible"
      exit="exit"
      >
     <div className="bg-gradient-to-tl  bg-tpurple relative  p-6 rounded-lg shadow-lg w-11/12 h-[95%] flex flex-col overflow-scroll">
       {/* Close Button */}
       <button
      className="absolute top-2 right-2 py-1 px-2 text-white text-sm font-bold bg-red-700 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 z-20"
      onClick={onClose}
      aria-label="Close"
    >
      X
    </button>
            
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center w-full">
              <h1 className="text-2xl font-bold text-white">{projectData.name}</h1>

              <div className="my-4">
                <BadgeGenerator projectData={projectData} lite={false}/>
              </div>

            </div>

            
            <div className="flex justify-center items-center mt-16">
              <Carousel className="h-[90%] w-full sm:w-11/12 max-w-3xl">
                <CarouselContent className="h-full">
                  {projectData.video && (
                    <CarouselItem className="h-full flex items-center justify-center">
                      <iframe
                        className="rounded-xl h-full w-full"
                        src={projectData.video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{ aspectRatio: "16/9" }}
                      ></iframe>
                    </CarouselItem>
                  )}
                  {projectData.images.map((image, index) => (
                    <CarouselItem key={index} className="h-full flex items-center justify-center">
                      <img src={image} alt={`Project Image ${index}`} className="max-h-full max-w-full" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="translate-x-8 sm:translate-x-12" />
                <CarouselNext className="-translate-x-8 sm:-translate-x-12" />
              </Carousel>
            </div>

            
            <div className="mt-4 text-center text-sm text-white">
              <p className="mt-2">{projectData.description}</p>
              {projectData.link && (
                <Link to={projectData.link} target="_blank" rel="noopener noreferrer">
                  <button className="m-4">
                    <AuroraButton text="Visit Site" />
                  </button>
                </Link>
              )}
              {
                projectData.code && (
                  <Link to={projectData.code} target="_blank" rel="noopener noreferrer">
                  <button className="m-4">
                    <AuroraButton text="Code Repo"/>
                  </button>
                  </Link>
                )
              }

              
              <p className="m-4 mt-8">Technologies Used:</p>
              <div className="flex flex-wrap justify-center mt-2">
                {projectData.technologies.map((tech, id) => (
                  <div key={id} className="m-1 p-2 bg-tpurple rounded-xl text-xs text-white">
                    {tech}
                  </div>
                ))}
              </div>

              

            </div>
          </div>
        </motion.div>
      )}

   </AnimatePresence>
  );
};

export default ProjectPreview;
