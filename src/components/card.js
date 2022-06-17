import React from "react";
import Selfie from "../images/profile-pic.jpeg";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "../components/navbar";
import EmailButton from "../components/emailButton";

export default function Card() {
  return (
    <Grid
      className="outer-box"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        margin: "auto",
        width: 350,
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
        <Grid item sx={{ marginTop: 0.5 }}>
          <EmailButton />
        </Grid>
        <Grid item sx={{ marginTop: 0.5 }}>
          <Button
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/robert-ireland/"
            endIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ margin: 0.5, marginLeft: 1 }}>
        <Grid item>
          <h3>About</h3>
        </Grid>
        <Grid item sx={{ padding: 0.5, paddingLeft: 0 }}>
          <p>
            I am a full-stack engineer and graduate of Momentum Learning.
            Currently open for interviews, I'm most interested in front-end work
            but I have experience in Python and Django as well!
          </p>
        </Grid>
        <Grid item>
          <h3>Skills</h3>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Chip
            color="primary"
            size="small"
            icon={<ion-icon name="logo-javascript"></ion-icon>}
            label="JavaScript"
            sx={{
              width: 100,
            }}
          />
        </Grid>
        <Grid item>
          <Chip
            color="primary"
            size="small"
            icon={<ion-icon name="logo-react"></ion-icon>}
            label="React"
            sx={{
              width: 100,
            }}
          />
        </Grid>
        <Grid item>
          <Chip
            color="primary"
            size="small"
            icon={<ion-icon name="logo-python"></ion-icon>}
            label="Python"
            sx={{
              width: 100,
            }}
          />
        </Grid>
        <Grid item>
          <Chip
            color="primary"
            size="small"
            icon={<ion-icon name="logo-python"></ion-icon>}
            label="Django"
            sx={{
              width: 100,
            }}
          />
        </Grid>
        <Grid item>
          <Chip
            color="primary"
            size="small"
            icon={<ion-icon name="logo-html5"></ion-icon>}
            label="HTML/CSS"
            sx={{
              width: 100,
            }}
          />
        </Grid>
      </Grid>
      <Navbar />
    </Grid>
  );
}
