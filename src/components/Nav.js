import React from "react";
import "../styles/Nav.css";

// object destructuring to grab props.currentPage and props.handlePageChange
function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item mx-5 no-serif">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // if user is on this page, set bootstrap class attribute to active
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          LAUREN DARRIMON
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;
