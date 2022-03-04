import React from "react";
import "../styles/Footer.css";
import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="row align-items-center" id="contact">
      <div className="col-12 text-center">
        <h3>
          
          <a
            href="https://www.linkedin.com/in/lauren-duker/"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/LaurenDarrimon"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub />
          </a>

          <a href="https://medium.com/@laurendarrimon" target="_blank" rel="noreferrer">
            <BsMedium />
          </a>
        </h3>
      </div>
    </section>
  );
}
