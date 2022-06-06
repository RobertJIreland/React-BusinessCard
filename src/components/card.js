import React from "react";
import Selfie from "../images/profile-pic.jpeg";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
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
      </Grid>
      {/* <img className="profile" src={Selfie} alt="Profile of RJ Ireland" /> */}
      <div className="inner-box-top">
        <h1>RJ Ireland</h1>
        <h2>Software Developer</h2>
        <div className="inner-box-top-buttons">
          <EmailButton />
          <button type="button" className="button">
            <span className="button-text">LinkedIn</span>
            <span className="button-icon">
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
          </button>
        </div>
      </div>
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
