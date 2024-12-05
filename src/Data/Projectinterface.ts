export interface ProjectInterface {

    name : string;
    brief?: string;
    description: string;
    images : string[];
    technologies: string[];
    video?: string;
    link? : string;
    code?: string;    
    collab?: string;
    legacy?: boolean;

}

export const placeholderProject : ProjectInterface = {

    name: "Digi AI",
    brief: "An AI-powered chatbot designed to serve as your personal data analyst",
    description: "DigiAI is an AI-powered chatbot designed to serve as your personal data analyst. It leverages langchain and GPT-4 to analyze structured data, providing insightful answers to your queries. Whether you're looking to understand complex datasets or generate comprehensive visualizations, DigiAI is equipped to enhance your data-driven decision-making processes.",
    images: ["/projects/digi-ai/01.webp", "/projects/digi-ai/02.webp", "/projects/digi-ai/03.webp"],
    technologies: ["Langchain", "Python", "React.js", "Tailwind CSS", "TypeScript", "GCP" ],
    video: "https://www.youtube.com/watch?v=YP6nPvO8Rgk",
    
}


export const ProjectList : ProjectInterface[] = [
    {

        name: "Project-V",
        brief: "Project V is an PWA based online video editor that allows you to edit videos directly from the client side without the need to upload them to the internet",
        description: "Project V is an PWA based online video editor that allows you to edit videos directly from the client side without the need to upload them to the internet With Project V, we aim to maintain the convenience of online video editing while eliminating the need to upload files to a remote server. So you can edit Anywhere Anytime",
        images: ["/projects/project-v/01.webp", "/projects/digi-ai/02.webp", "/projects/digi-ai/03.webp"],
        technologies: ["Nodejs", "Mongodb", "Redis", "WASM", "FFPEG", "ejs", "javascript", "html", "css"  ],
        video: "https://www.youtube.com/embed/LZ1zYCbrSsU?si=EMrttkGS1OYjPjQg",
        link: "https://projectv.alflux.com/",
        collab: "projectV",
    },
    {
        name: "Inventory Stock Tracker",
        brief: "A fullstack web application built using the PERN stack  and Docker to track inventory. ",
        description: "Inventory Stock Tracker is a fullstack web application built with the PERN stack and Docker Compose. The project allows you to track inventory in real time while providing hands-on experience with Docker, PostgreSQL, and the modern tech stack. The frontend uses React and Tailwind, while the backend is built with Express and TypeScript. This project gave me valuable insights into containerization and service orchestration.",
        images: ["/projects/stock-tracker/01.webp", "/projects/stock-tracker/02.webp", "/projects/stock-tracker/03.webp"],
        technologies: ["Express", "Postgres", "Node.js", "TypeScript", "Docker", "React", "Tailwind"],
        video: "https://www.youtube.com/embed/_9rnNHJle68?si=9saglF0YvGdnvqh2",
        code: "https://github.com/JustinFrost47/InventoryStockTracker"
    },
    {

        name: "Digi AI",
        brief: "An AI-powered chatbot designed to serve as your personal data analyst",
        description: "DigiAI is an AI-powered chatbot designed to serve as your personal data analyst. It leverages langchain and GPT-4 to analyze structured data, providing insightful answers to your queries. Whether you're looking to understand complex datasets or generate comprehensive visualizations, DigiAI is equipped to enhance your data-driven decision-making processes.",
        images: ["/projects/digi-ai/01.webp", "/projects/digi-ai/02.webp", "/projects/digi-ai/03.webp"],
        technologies: ["Langchain", "Python", "React.js", "Tailwind CSS", "TypeScript", "GCP" ],
        video: "https://www.youtube.com/embed/YP6nPvO8Rgk?si=7bfQxaHrFX4yxiB9",
        collab: "Digisailor",
    },
    {

        name: "SHG ERP",
        brief: "A robust application designed to streamline the management of self-help groups (SHGs).",
        description: "SHG ERP is a powerful application tailored to the unique needs of self-help groups (SHGs). It empowers group leaders and members by providing features such as localization, attendance tracking, fund allocation, and group management. Designed to enhance efficiency and effectiveness, SHG ERP is a comprehensive solution for SHG operations.",
        images: ["/projects/shg-erp/01.webp", "/projects/shg-erp/02.webp", "/projects/shg-erp/03.webp"],
        technologies: [
            "React.js", 
            "MongoDB", 
            "Node.js", 
            "TypeScript", 
            "Tailwind CSS", 
            "Google Cloud Platform (GCP)", 
            "Firebase", 
            "Github Actions", 
            "CI & CD", 
            "WebSocket", 
            "REST APIs"
        ],
        collab: "Digisailor",
    },    
    {

        name: "VR Smart Poultry",
        brief: "A smart virtual poultry farm powered by sensors and digital twin technology.",
        description: "VR Smart Poultry is a VR-based project designed to simulate a lively and self-regulating poultry farm. The system utilizes sensors from Wokwi to collect data, which is then transmitted via ThingSpeak. Automated responses to sensor data are reflected in the virtual farm, created in Unity. This innovative approach combines the power of sensors and digital twin technology to provide an immersive and automated poultry farming experience.",
        images: ["/projects/vr-smart-poultry/03.webp", "/projects/vr-smart-poultry/01.webp", "/projects/vr-smart-poultry/02.webp"],
        technologies: [
            "Unity",
            "Blender",
            "Wokwi",
            "ThingSpeak",
            "Embedded C",
            "C#"
        ],

    },  
    {
        name: "Holo Vista",
        brief: "HOLO-VISTA is a project that explores the concept of sharing and experiencing NFTs in a virtual reality gallery. ",
        description: "HOLO-VISTA is a project that aims to push the boundaries of how NFTs are shared and experienced in a virtual reality environment. By utilizing Solana's Token 22 program, the project allows users to create and fetch NFTs seamlessly. The VR gallery, built with A-Frame, offers an immersive way to view and interact with NFTs in 3D. This experimental approach brings the future of NFTs and virtual reality together, allowing users to explore digital assets in a whole new way.",
        images: ["/projects/holo-vista/01.webp", "/projects/holo-vista/02.webp", "/projects/holo-vista/03.webp"],
        technologies: ["Web-VR", "Web3", "3D", "Solana", "Token22 program", "NFT",  "React", "Typescript", "A-Frame", "Tailwind",  ],
        link: "https://holo-vista.vercel.app/"
    },    
    {
        name: "Wallet 3.0",
        brief: "Wallet 3.0 is a simple and secure crypto wallet built during my Web3 learning journey at 100xDevs.",
        description: "Wallet 3.0 is a straightforward crypto wallet that helps users manage their keys without compromising on security. Users can generate a new mnemonic phrase and key pairs, or they can bring their own. The app avoids storing sensitive data like the mnemonic phrase in the browser's local storage, ensuring greater security. Developed during my time at 100xDevs, this project reflects my growing expertise in Web3 technologies.",
        images: ["/projects/wallet-3/01.webp", "/projects/wallet-3/02.webp", "/projects/wallet-3/03.webp"],
        technologies: ["Web3", "Solana", "RPC", "Cryptography", "React", "Typescript", "Tailwind", "ShadCN", ],
        link: "https://justinfrost47.github.io/wallet-3.0/",
        code: "https://github.com/JustinFrost47/wallet-3.0"
    },  
    {

        name: "Sharon Rose Tailors - Site",
        brief: "A professional website designed for Sharon Rose Tailors to establish their online presence.",
        description: "This project involved creating a website for Sharon Rose Tailors, aimed at establishing an online presence for their business. It was one of my first real-world projects, and the primary focus was to showcase their services and attract new customers. The client was highly satisfied with the result. Feel free to visit their website or contact them for custom-fit outfits!",
        images: ["/projects/sharon-rose-tailors/01.webp", "/projects/sharon-rose-tailors/02.webp", "/projects/sharon-rose-tailors/03.webp"],
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "jQuery"
        ],
        video: "https://www.youtube.com/embed/7S73C9nxfQM?si=UZA_nTosTqzcPpoX",
        link: "https://sharonrosetailors.github.io/",
        legacy: true,
    },
    {

        name: "GPT-Positioner",
        brief: "A responsive web app to generate positioning statements for your brand using GPT-3.",
        description: "GPT-Positioner is a simple and responsive web application designed to help brands craft engaging positioning statements. By providing some basic information about your brand, the app generates a compelling statement in no time. Built with Bootstrap and leveraging OpenAI's Davinci-03 API, this app is a quick and efficient tool for branding. Feel free to give it a try!",
        images: ["/projects/gpt-positioner/01.webp", "/projects/gpt-positioner/02.webp", "/projects/gpt-positioner/03.webp"],
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "GPT-3"
        ],
        link: "https://justinfrost47.github.io/GPT-Positioning-Statement/",
        code: "https://github.com/JustinFrost47/GPT-Positioning-Statement",
        legacy: true,
    },
    {
        name : "Anime Search",
        brief: "A modern web application to search for anime using keywords.",
        description: "Anime Search is a sleek and user-friendly web application that enables users to effortlessly search for their favorite anime using keywords. Built with HTML, CSS, and JavaScript, this project emphasizes visually appealing design and smooth user experience. Whether you're a hardcore anime fan or a casual viewer, this app is perfect for discovering new shows or keeping track of the latest releases.",
        images: ["/projects/anime-search/01.webp", "/projects/anime-search/02.webp"],
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Jikan-API"
        ],
        link: "https://justinfrost47.github.io/anime-search/",
        code: "https://github.com/JustinFrost47/anime-search",
        legacy: true,
    },
    {
        name: "Bash Timer",
        brief: "A command-line timer script using the Pomodoro Technique for productivity.",
        description: "Bash Timer is a lightweight command-line tool designed to boost productivity during study sessions. Built using Bash scripting, this timer leverages the Pomodoro Technique, enabling users to set timers and schedule breaks with ease. This project marked my initial foray into Linux scripting, showcasing an interesting and unconventional use case for Bash scripts.",
        images: ["/projects/bash-timer/01.webp", "/projects/bash-timer/02.webp"],
        technologies: [
            "Vanilla Bash-Script",
            "Zsh",
            "Unix-Terminal"
        ],
        code: "https://github.com/JustinFrost47/BashTimer",
        legacy: true,
    }
    
    
    
    
]