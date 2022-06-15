import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

export default function EmailButton() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  function formDisplay() {
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
      {/* <button type="button" className="button" onClick={formDisplay}>
        <span className="button-text">Email</span>
        <span className="button-icon">
          <ion-icon name="mail-outline"></ion-icon>
        </span>
      </button> */}
      <Button
        variant="contained"
        onClick={formDisplay}
        endIcon={<EmailIcon />}
        style={{
          height: "25px",
          fontSize: "16px",
        }}
      >
        Email
      </Button>

      {open && (
        <div className="form-popup" id="form">
          <form className="form-container" ref={form}>
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
            <Button
              variant="contained"
              onClick={sendEmail}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
