export interface ProjectInterface {

    name : String;
    brief?: String;
    description: String;
    images : string[];
    technologies: string[];
    video?: String;
    link? : String;

}

export const placeholderProject : ProjectInterface = {

    name: "Digi AI",
    brief: "An AI-powered chatbot designed to serve as your personal data analyst",
    description: "DigiAI is an AI-powered chatbot designed to serve as your personal data analyst. It leverages langchain and GPT-4 to analyze structured data, providing insightful answers to your queries. Whether you're looking to understand complex datasets or generate comprehensive visualizations, DigiAI is equipped to enhance your data-driven decision-making processes.",
    images: ["/projects/digi-ai/01.png", "/projects/digi-ai/02.png", "/projects/digi-ai/03.png"],
    technologies: ["Langchain", "Python", "React.js", "Tailwind CSS", "TypeScript", "GCP" ],
    video: "https://www.youtube.com/watch?v=YP6nPvO8Rgk",
    link: "https://www.youtube.com/watch?v=YP6nPvO8Rgk",
}