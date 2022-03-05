import React, { useEffect } from "react";
import "../../styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="row justify-content-between section-top" id="sec1">
      <div className="col-12">
        <h2
          className="display-1 serif"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          It's lovely to meet you.
        </h2>
      </div>

      <div className="col-md-6">
        <img
          src="https://laurendarrimon.github.io/portfolio/assets/images/lauren-bw.png"
          alt="black and white headshot of Lauren"
          id="lauren"
          className="fade-up"
        />
      </div>

      <div className="col-md-6 align-self-center">
        <h4>
          Lauren specializes in inspired full stack web development and creative
          UI design. With years as a web designer and a techinical background
          that started in physics and bloomed into a career as a full-stack
          engineer, Lauren creates beautiful applications where your vision can
          come to life!
        </h4>
      </div>
    </section>
  );
}
