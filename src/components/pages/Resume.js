import React, { useEffect } from "react";
import "../../styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/Resume.css";

export default function Resume() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="row align-items-center section-top" id="resume">
      <div className="col-md-6">
        <embed
          className="resume"
          src="https://laurendarrimon.github.io/portfolio/assets/images/lauren-darrimon-resume.pdf"
          width="600"
          height="700"
        ></embed>
      </div>

      <div className="col-md-6">
        <h2
          className="display-1 fade-up terra"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          RESUME
        </h2>
      </div>
    </section>
  );
}
