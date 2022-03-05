import React, { useState, useEffect } from "react";
import Project from "./Project";
import { projectData } from "../../data/project-data";
import '../../styles/Portfolio.css';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Portfolio() {
  const [projects, setProject] = useState(projectData);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="row section-top" id="portfolio">
      <div className="col-12"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
        <h2 className="display-1 serif">PORTFOLIO</h2>
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
