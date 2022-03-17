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
          It's <span className="terra">lovely</span> to meet you.
        </h2>
      </div>

      <div className="col-md-5 d-flex align-items-end flex-column mx-5">
        <img
          src="https://laurendarrimon.github.io/portfolio/assets/images/lauren-bw.png"
          alt="black and white headshot of Lauren"
          id="lauren"
          className="fade-up"
        />
      </div>

      <div className="col-md-6 align-self-center">
        <h5>
          Full-stack Engineer with experience in UI design, graphic design, and
          managing freelance projects. Earned certificates in Full Stack Web
          Development from UC Berkeley Extension and in Mobile & Front End
          Development from Santa Rosa Junior College. Skills in JavaScript,
          React.js, and the MERN stack. An excellent logical reasoner who loves
          analytical problem-solving. Strong verbal communicator who excels in
          writing readable, well-documented code.
        </h5>
        <h5>
          Aims to leverage background in UI design and a passion to puzzle
          through tough challenges to create an inspiring user experience.
          Delighted to develop responsive websites where the code is as
          beautiful as the UI. Collaborated with a small team that rebranded a
          luxury travel company from the ground up and built new websites. An
          eye for design and the mind of a programmer combined with emotional
          intelligence makes for a mutually beneficial partnership.
        </h5>
        <br />

        <h3>TECHNICAL SKILLS</h3>

        <div className="row skills">
          <div className="col-md-6">
            <ul>
              <li>Frontend Development </li>
              <li>Backend Development</li>
              <li>Full Stack Development</li>
              <li>UI/UX Design</li>
              <li>Javascript</li>
              <li>React.js</li>
              <li>React Hooks</li>
              <li>JSX</li>
              <li>MERN Stack</li>
              <li>Apollo GraphQL</li>
              <li>Context API</li>
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
              <li>Stripe API</li>
              
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
              <li>JWT JavaScript Web Token</li>
              <li>Relational Databases</li>
              <li>MySQL</li>

              <li>Sequelize ORM</li>
              <li>Non-Relational Databases</li>
              <li>Mongo DB</li>
              <li>Mongoose ODM</li>
              <li>Apollo GraphQL</li>

              <li>Object-oriented Programming (OOP)</li>
              <li>Imperative Programming</li>
              <li>TDD</li>
              <li>Unit Testing w/ JEST</li>
              <li>Data Structures and Algorithms</li>
              <li>Performance</li>
              <li>Webpack</li>
              <li>PWA</li>
      
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
              <li>Hubspot CRM</li>
              <li>Zoho CRM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
