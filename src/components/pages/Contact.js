import React, { useState, useEffect } from "react";
import Form from "./Form";
import "../../styles/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="row section-top" id="contact">
      <div className="col-md-5 d-flex align-items-end flex-column" id="contact-info">
        <h4>
          <a
            href="https://www.linkedin.com/in/lauren-duker/"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
        </h4>
        <h4>
          <a
            href="https://github.com/LaurenDarrimon"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </h4>
        <h4>
          <a href="/assets/images/resume-darrimon.pdf" target="_blank">
            Resume
          </a>
        </h4>
        <h4>hello@laurenlalita.com</h4>
        <h4>707.243.3038</h4>
      </div>

      <div className="col-md-5">
        <h2
          className="reach-out"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          REACH <span className="serif">OUT</span>
        </h2>

        <div>
          <Form />
        </div>
      </div>
    </section>
  );
}
