import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
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
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setOpen(false);
  }
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={formDisplay}
        endIcon={<EmailIcon />}
        sx={{
          "&.MuiButton-root": {
            "&:hover": {
              backgroundColor: "#847E89",
            },
            "&:active": {
              backgroundColor: "#56494C",
            },
          },
        }}
      >
        Email
      </Button>

      {open && (
        <Box
          component="form"
          ref={form}
          autoComplete="off"
          className="form-popup"
        >
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <h4>Feel free to reach out via email.</h4>
              <div>
                <TextField label="Name" />
              </div>
            </Grid>
            <Grid item>
              <div>
                <TextField label="Email" />
              </div>
            </Grid>
            <Grid item>
              <div>
                <TextField multiline rows={4} label="Message" />
              </div>
            </Grid>
            <Button
              variant="contained"
              onClick={sendEmail}
              endIcon={<SendIcon />}
              sx={{
                "&.MuiButton-root": {
                  "&:hover": {
                    backgroundColor: "#847E89",
                  },
                  "&:active": {
                    backgroundColor: "#56494C",
                  },
                },
              }}
            >
              Send
            </Button>
          </Grid>
        </Box>
      )}
    </>
  );
}
