import React, { useEffect } from "react";
import "../../styles/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="row justify-content-start section-top" id="sec1">
      <div className="col-12">
        <h1
          className="lauren"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          LAUREN <span className="serif terra">DARRIMON</span>
        </h1>
        <h2 className="display-6 serif">Full Stack Web Developer</h2>
      </div>

      <div className="col-md-6">
        <img
          src="https://laurendarrimon.github.io/portfolio/assets/images/lauren.png"
          alt="black and white headshot of Lauren"
          id="lauren"
          className="fade-up"
        />
      </div>

      <div className="col-md-6 align-self-center">
        <h3>
          Full Stack Javascript Engineer | <span className="terra">React</span> | Back-End | MERN Stack
        </h3>
      </div>
    </section>
  );
}
