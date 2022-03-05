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
        <br />

        <div className="row skills">
          <div className="col-md-6">
            <ul>
              <li>Frontend Development </li>
              <li>Backend Development</li>
              <li>Full Stack Development</li>
              <li>Javascript</li>
              <li>React.js</li>
              <li>MERN Stack</li>
              <li>ES6</li>
              <li>Problem-Solving</li>
              <li>Pseudocode</li>
              <li>HTML5</li>
              <li>CSS</li>

              <li>Command Line</li>
              <li>Developer Tools</li>
              <li>Bootstrap</li>
              <li>Web API</li>
              <li>jQuery</li>
              <li>Server Side API</li>

              <li>Third Party API</li>
              <li>Momentjs</li>
              <li>indexDB</li>
              <li>Insomnia / Postman</li>
              <li>AJAX</li>
              <li>Fetch</li>
              <li>JSON</li>
              
            </ul>
          </div>

          <div className="col-md-6">
            <ul>
            <li>Git</li>
              <li>GitHub</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Rest API</li>
              <li>Serverside Templating (Handlebars.js)</li>
              <li>Heroku</li>
              <li>Express Sessions</li>
              <li>bcrypt</li>
              <li>Relational Databases</li>
              <li>MySQL</li>

              <li>Sequelize ORM</li>
              <li>Non-Relational Databases</li>
              <li>Mongo DB</li>
              <li>Mongoose ODM</li>
              <li>Apollo Server</li>

              <li>Object-oriented Programming (OOP)</li>
              <li>Imperative Programming</li>
              <li>TDD</li>
              <li>Unit Testing w/ JEST</li>
              <li>Data Structures and Algorithms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
