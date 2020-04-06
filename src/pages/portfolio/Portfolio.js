import React from "react";

import projectData from "../../shared/data/projectData.json";
import Project from "../../components/project/Project";
import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Some projects ...</h2>
      <div className="portfolio-grid">
        {projectData.map((project) => (
          <div className="col" key={project.id}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
