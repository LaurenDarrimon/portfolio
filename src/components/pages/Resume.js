import React from "react";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <section className="row align-items-center" id="resume">
      <div className="col-md-6">
        <embed
          src="./assets/images/resume-darrimon.pdf"
          width="600"
          height="700"
        ></embed>
      </div>

      <div className="col-md-6">
        <h2 className="display-1 fade-up">RESUME</h2>
      </div>
    </section>
  );
}
