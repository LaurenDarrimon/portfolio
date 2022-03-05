import React, { useEffect } from "react";
import "../../styles/Project.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="card portfolio-items col-md-5"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <img
        className="card-img-top"
        src={props.image_path}
        alt="development project thumbnail"
      />
      <div className="card-body">
        <h3 className="card-title">
          {props.title}
          <br />
        </h3>
        <p className="card-text">{props.description}</p>
        <a
          href={props.repo_url}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          Code
        </a>
        <a
          href={props.deployed_url}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          Site
        </a>
      </div>
    </div>
  );
}
