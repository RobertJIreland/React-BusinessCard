import React from "react";
import facebookLogo from "../images/facebook.png";
import githubLogo from "../images/github.png";
import instagramLogo from "../images/instagram.png";
import twitterLogo from "../images/twitter.png";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Navbar() {
  return (
    <Box
      component="nav"
      sx={{
        width: 350,
        backgroundColor: "#A9A9A9",
        borderRadius: "2%",
        marginTop: 1,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <IconButton
            onClick={() => {
              alert(`Sorry! I don't use Facebook.`);
            }}
          >
            <img className="navImg" src={facebookLogo} alt="Facebook Logo" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://github.com/RobertJIreland">
            <img className="navImg" src={githubLogo} alt="Github Logo" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.instagram.com/kindofcode/">
            <img className="navImg" src={instagramLogo} alt="Instagram Logo" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => {
              alert(`Sorry! I don't use Twitter.`);
            }}
          >
            <img className="navImg" src={twitterLogo} alt="Twitter Logo" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
