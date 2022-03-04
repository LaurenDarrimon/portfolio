import React from "react";

export default function About() {
  return (
    <section className="row justify-content-start" id="sec1">
      <div className="col-12">
        <h2 className="display-1 serif">It's lovely to meet you.</h2>
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
