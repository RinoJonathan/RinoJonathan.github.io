import MongodbIcon from "@/assets/TechIcons/Languages/MongodbIcon";
import ExpressjsIcon from "@/assets/TechIcons/Languages/ExpressjsIcon";
import ReactjsIcon from "@/assets/TechIcons/Languages/ReactjsIcon";
import NodejsIcon from "@/assets/TechIcons/Languages/NodejsIcon";
import TypescriptIcon from "@/assets/TechIcons/Languages/TypescriptIcon";
import PythonIcon from "@/assets/TechIcons/Languages/PythonIcon";
import JavaIcon from "@/assets/TechIcons/Languages/JavaIcon";
import BashIcon from "@/assets/TechIcons/Languages/BashIcon";
import DockerIcon from "@/assets/TechIcons/Tools/DockerIcon";

import DigitalOceanIcon from "@/assets/TechIcons/Tools/DigitalOceanIcon";
import GCPIcons from "@/assets/TechIcons/Tools/GCPIcon";
import FirebaseIcons from "@/assets/TechIcons/Tools/FirebaseIcon";
import NextjsIcon from "@/assets/TechIcons/Languages/NextjsIcon";

export interface SkillInterface {
    image: React.ElementType;
    name: string;
    color?: string;
}

export const skillPlaceholder: SkillInterface = {
    image: ReactjsIcon,
    name: "Reactjs",
    color: "white",
};

export const skillList: SkillInterface[] = [
    {
        image: NextjsIcon,
        name: "NextJs",
        color: "white",
    },
    {
        image: MongodbIcon,
        name: "Mongodb",
        color: "white",
    },
    {
        image: ExpressjsIcon,
        name: "Express js",
        color: "white",
    },
    {
        image: ReactjsIcon,
        name: "React js",
        color: "white",
    },
    {
        image: NodejsIcon,
        name: "Node js",
        color: "white",
    },
    {
        image: TypescriptIcon,
        name: "TypeScript",
        color: "white",
    },
    {
        image: PythonIcon,
        name: "Python",
        color: "white",
    },
    {
        image: JavaIcon,
        name: "Java",
        color: "white",
    },
    {
        image: BashIcon,
        name: "Bash Script",
        color: "white",
    },
    {
        image: DockerIcon,
        name: "Docker",
        color: "white",
    },
    {
        image: DigitalOceanIcon,
        name: "Digital Ocean",
        color: "white",
    },
    {
        image: GCPIcons,
        name: "Google Cloud",
        color: "white",
    },
    {
        image: FirebaseIcons,
        name: "Firebase",
        color: "white",
    },
];
