import React from "react";
import Form from "./Form";
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <section className="row align-items-center" id="contact">

      <div className="col-md-6 text-right">
        <p>
          <a href="https://www.linkedin.com/in/lauren-duker/" rel="noreferrer" target="_blank">
            Linkedin
          </a>
        </p>
        <p>
          <a href="https://github.com/LaurenDarrimon" rel="noreferrer" target="_blank">
            Github
          </a>
        </p>
        <p>
          <a href="/assets/images/resume-darrimon.pdf" target="_blank">
            Resume
          </a>
        </p>
        <p>hello@laurenlalita.com</p>
        <p>707.243.3038</p>
      </div>

      <div className="col-md-6">
        <h2 className="display-1 fade-up">REACH OUT</h2>
        <Form />
      </div>
        
    </section>
  );
}