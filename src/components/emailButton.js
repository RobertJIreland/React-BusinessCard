import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailButton() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  function formDisplay() {
    // document.getElementById("form").style.display = "block";
    setOpen(!open);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o3svxum",
        "contactForm",
        form.current,
        "lJwsKcSeiaJx7wivr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setOpen(false);
  }
  return (
    <>
      <button type="button" className="button" onClick={formDisplay}>
        <span className="button-text">Email</span>
        <span className="button-icon">
          <ion-icon name="mail-outline"></ion-icon>
        </span>
      </button>

      {open && (
        <div className="form-popup" id="form">
          <form className="form-container" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Name" name="name" required />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="message"></label>
            <textarea
              placeholder="Enter message here..."
              name="message"
              required
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      )}
    </>
  );
}
