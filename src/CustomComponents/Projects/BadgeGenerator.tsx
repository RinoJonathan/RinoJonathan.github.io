import CollabrationIcon from "@/assets/Badges/CollabrationIcon";
import WebIcon from "@/assets/Badges/WebIcon";
import YoutubeIcon from "@/assets/Badges/YoutubeIcon";
import GithubIcon from "@/assets/TechIcons/Tools/GithubIcon";
import { ProjectInterface } from "@/Data/Projectinterface";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"



interface BadgePropInterface {
    lite?: boolean,
    collab?: string
}

// Badge Component for GitHub
const CodeBadge = ({lite=false} : BadgePropInterface) => (
  <div className={lite? "" : "flex items-center space-x-2 bg-gray-800 text-white rounded-full px-2 py-2"}>
    
    <Tooltip>
        <TooltipTrigger >
            <GithubIcon />
        </TooltipTrigger>
        <TooltipContent>
          <p>Code Available</p>
        </TooltipContent>
      </Tooltip>
  </div>
);

// Badge Component for Video
const VideoBadge = ({lite=false} : BadgePropInterface)=> (
  <div className={lite? "" : "flex items-center space-x-2 bg-red-600 text-white rounded-full px-2 py-2"}>
    
    <Tooltip>
        <TooltipTrigger >
            <YoutubeIcon/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Video Demo Available</p>
        </TooltipContent>
      </Tooltip>
  </div>
);

// Badge Component for Collaboration
const CollabBadge = ({lite=false, collab = "a team"} : BadgePropInterface) => (
  <div className={lite? "" : "flex items-center space-x-2 bg-purple-600 text-white rounded-full px-2 py-2"}>
        
        <Tooltip>
        <TooltipTrigger >
        <CollabrationIcon/>
        </TooltipTrigger>
        <TooltipContent>
          <p>In Collabration with {collab}</p>
        </TooltipContent>
      </Tooltip>
    
  </div>
);

// Badge Component for External Link
const LinkBadge = ({lite=false} : BadgePropInterface) => (
  <div className={lite? "" : "flex items-center space-x-2 bg-blue-600 text-white rounded-full px-2 py-2"}>
    
    <Tooltip>
        <TooltipTrigger >
            <WebIcon/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Site Link Available</p>
        </TooltipContent>
      </Tooltip>
  </div>
);

interface BadgeGeneratorProps {
  projectData: ProjectInterface;
  lite?: boolean;
}

const BadgeGenerator = ({ projectData, lite=false } : BadgeGeneratorProps) => {
  const badges = [];

  if (projectData.link) {
    badges.push(<LinkBadge key="link" lite={lite} />);
  }

  if (projectData.video) {
    badges.push(<VideoBadge key="video" lite={lite} />);
  }


  if (projectData.code) {
    badges.push(<CodeBadge key="code" lite={lite}/>);
  }


  if (projectData.collab) {
    badges.push(<CollabBadge key="collab" collab={projectData.collab} lite={lite}/>);
  }



  return <div className="flex flex-row justify-center space-x-2 py-2">{badges}</div>
        
};

export default BadgeGenerator;
