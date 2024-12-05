

import  { useState, useEffect } from "react";
import Project from "@/CustomComponents/Projects/Project";
import { ProjectList } from "@/Data/Projectinterface";
import UpIcon from "@/assets/Badges/UpIcon";
import DownIcon from "@/assets/Badges/DownIcon";

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false); // State to toggle showing all projects
  const [visibleProjects, setVisibleProjects] = useState(ProjectList.slice(0, 6)); // Manage visible projects

  useEffect(() => {
    // Update visible projects based on `showAll`
    if (showAll) {
      setVisibleProjects(ProjectList);
    } else {
      setVisibleProjects(ProjectList.slice(0, 6));
    }
  }, [showAll]); // Runs whenever `showAll` changes

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
<section className="min-h-screen w-full bg-gradient-to-br from-tpurple to-tblue">
  <div className="hollow-arrow"></div>
  <h1 className="text-center w-10/12 mx-auto text-white text-4xl p-2 border-b-2">
    Projects
  </h1>
  <div className="w-full min-h-screen flex flex-wrap justify-center gap-12 p-12">
    {visibleProjects.map((project, id) => (
      <Project key={id} projectData={project} />
    ))}
  </div>
  <div className="w-full flex justify-center py-8">
    <button
      onClick={toggleShowAll}
      className="px-6 py-2 bg-white text-tpurple rounded-lg shadow-md hover:bg-gray-200 transition-all"
    >
      {showAll ? <UpIcon className="w-10 h-10 " /> : <DownIcon className="w-10 h-10 " />}
    </button>
  </div>
</section>

  );
}
