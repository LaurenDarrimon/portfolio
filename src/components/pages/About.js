import React from "react";

export default function About() {
  return (
    <section class="row justify-content-start" id="sec1">
      <div class="col-12">
        <a href="/" class="text-decoration-none">
          <h1 class="display-2">LAUREN DARRIMON</h1>
        </a>
        <h2 class="display-6 serif">Full Stack Engineer</h2>
      </div>

      <div class="col-md-6">
        <img
          src="/assets/images/lauren.png"
          alt="black and white headshot of Lauren"
          id="lauren"
          class="fade-up"
        />
      </div>

      <div class="col-md-6 align-self-center">
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
