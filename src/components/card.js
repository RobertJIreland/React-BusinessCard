import React from "react";
import Selfie from "../images/profile-pic.jpeg";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "../components/navbar";
import EmailButton from "../components/emailButton";

export default function Card() {
  return (
    // <div className="outer-box">
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        margin: "auto",
        width: 350,
        height: "fit-content",
        borderStyle: "solid",
        borderRadius: "2%",
        overflow: "hidden",
        backgroundColor: "#C2D3CD",
      }}
    >
      <Grid item xs={0}>
        <Avatar
          alt="RJ Ireland"
          src={Selfie}
          sx={{ height: 235, width: 235 }}
        />
        {/* <img className="profile" src={Selfie} alt="Profile of RJ Ireland" /> */}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        style={{ fontWeight: 900, margin: "auto" }}
      >
        <Grid item>
          <h1>RJ Ireland</h1>
        </Grid>
        <Grid item>
          <h2>Software Developer</h2>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <EmailButton />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/robert-ireland/"
            endIcon={<LinkedInIcon />}
            style={{
              height: "25px",
              fontSize: "16px",
            }}
          >
            LinkedIn
          </Button>
        </Grid>
      </Grid>

      <div className="inner-box-bottom">
        <h3>About</h3>
        <p>
          I am a full-stack engineer and graduate of Momentum Learning.
          Currently open for interviews, I'm most interested in front-end work
          but I have experience in Python and Django as well!
        </p>
        <h3>Skills</h3>
        <ul>
          <li>
            <span>
              <ion-icon name="logo-javascript"></ion-icon>
            </span>
            <span>JavaScript</span>
          </li>
          <li>
            <span>
              <ion-icon name="logo-react"></ion-icon>
            </span>
            <span>React.JS</span>
          </li>
          <li>
            <span>
              <ion-icon name="logo-python"></ion-icon>
            </span>
            <span>Python</span>
          </li>
          <li>
            <span>
              <ion-icon name="logo-python"></ion-icon>
            </span>
            <span>Django</span>
          </li>
          <li>
            <span>
              <ion-icon name="logo-html5"></ion-icon>
            </span>
            <span>Html/CSS</span>
          </li>
        </ul>
      </div>
      <Navbar />
    </Grid>
    // </div>
  );
}
