import React from "react";
import ProjectSummary from "./projectSummary";

const projectList = () => {
  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default projectList;
