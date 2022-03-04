import React, { useState } from "react";
import Project from "./Project";
import { projectData } from "../../data/project-data";
import '../../styles/Portfolio.css';


export default function Portfolio() {
  const [projects, setProject] = useState(projectData);

  return (
    <section className="row" id="portfolio">
      <div className="col-12">
        <h2 className="display-2">PORTFOLIO</h2>
      </div>
      <div className="col-12">
        <div
          id="portfolio-list-section"
          className="row d-flex justify-content-around"
        >
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              repo_url={project.repo_url}
              deployed_url={project.deployed_url}
              image_path={project.image_path}
              backend={project.backend}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
