import React from "react";

export default function Project(props) {

  return (

      <div className="card portfolio-items col-md-5 fade-up">
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
          <a href={props.repo_url} target="_blank" className="btn btn-primary" rel="noreferrer">
            Code
          </a>
          <a href={props.deployed_url} target="_blank" className="btn btn-primary" rel="noreferrer">
            Site
          </a>
        </div>
      </div>


  );
}
