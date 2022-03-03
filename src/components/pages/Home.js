import React from "react";

export default function Home() {
  return (
    <section className="row justify-content-start" id="sec1">
      <div className="col-12">
        <a href="/" className="text-decoration-none">
          <h1 className="display-2">LAUREN DARRIMON</h1>
        </a>
        <h2 className="display-6 serif">Full Stack Engineer</h2>
      </div>

      <div className="col-md-6">
        <img
          src="/assets/images/lauren.png"
          alt="black and white headshot of Lauren"
          id="lauren"
          className="fade-up"
        />
      </div>

      <div className="col-md-6 align-self-center">
        <h3>
          Full Stack Web Development | React | Back-End | Front-End | Javascript | UI/UX
        </h3>
        <br />
        <h4>
          <a href="#contact">Work with me.</a>
        </h4>
      </div>
    </section>
  );
}