import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ProjectInterface } from "@/Data/Projectinterface";

interface ProjectPreviewProps {
  content: ProjectInterface;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ content, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black text-black bg-opacity-10 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 min-h-[70%] flex flex-col overflow-scroll">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 px-2 py-1 text-white text-sm font-bold bg-red-700 rounded-full"
          onClick={onClose}
          aria-label="Close"
        >
          X
        </button>
        
        <div className="flex  justify-center items-center">
          
          {/* Carousel Section */}
          <Carousel className="h-[90%] w-full sm:w-11/12 max-w-3xl">
            <CarouselContent className="h-full">
              {content.video && (
                <CarouselItem className="h-full flex items-center justify-center">
                  <iframe
                    className="rounded-xl h-full w-full"
                    src="https://www.youtube.com/embed/YP6nPvO8Rgk?si=S5ETkeG2_4eiyeyL"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ aspectRatio: "16/9" }}
                  ></iframe>
                </CarouselItem>
              )}
              {content.images.map((image, index) => (
                <CarouselItem key={index} className="h-full flex items-center justify-center">
                  <img src={image} alt={`Project Image ${index}`} className="max-h-full max-w-full" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="translate-x-8 sm:translate-x-12" />
            <CarouselNext className="-translate-x-8 sm:-translate-x-12" />
          </Carousel>
        </div>

        {/* Details Section */}
        <div className="mt-4 text-center text-sm">
          <h1 className="text-xl font-bold">{content.name}</h1>
          <p className="mt-2">{content.description}</p>
          {content.link && (
            <Link to={content.link}>
              <button className="mx-auto mt-4 p-2 border rounded-md hover:bg-white hover:text-tblue">
                Visit Site
              </button>
            </Link>
          )}
          <p className="mt-4">Technologies Used:</p>
          <div className="flex flex-wrap justify-center mt-2">
            {content.technologies.map((tech, id) => (
              <div key={id} className="m-1 p-2 bg-tpurple rounded-xl text-xs text-white">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
