import React from "react";

import data from "../../shared/data/data.json";
import Project from "../../components/project/Project";
import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio">
      {data.map(project => (
        <div className="col" key={project.id}>
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}
