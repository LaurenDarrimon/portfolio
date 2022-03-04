import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../../styles/Form.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzbogvlq");
  if (state.succeeded) {
    return (
      <p>Thank you so much for reaching out! I'll get back to you soon. </p>
    );
  }
  function MouseOut(event) {
    event.target.setAttribute("placeholder", "This field is required");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <br />
      <input
        id="name"
        name="name"
        onMouseOut={MouseOut}
        className="form-control"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <br />
      <br />

      <label htmlFor="email">Email Address:</label>
      <br />
      <input
        id="email"
        type="email"
        name="email"
        onMouseOut={MouseOut}
        className="form-control"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <br />
      <br />

      <label htmlFor="message">Message:</label>
      <br />
      <textarea
        id="message"
        name="message"
        onMouseOut={MouseOut}
        className="form-control"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <br />
      <br />

      <button
        type="submit"
        className="btn-primary btn"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}
