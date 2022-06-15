import React from "react";
import facebookLogo from "../images/facebook.png";
import githubLogo from "../images/github.png";
import instagramLogo from "../images/instagram.png";
import twitterLogo from "../images/twitter.png";
import IconButton from "@mui/material/IconButton";

export default function Navbar() {
  return (
    <nav>
      <IconButton>
        <img className="navImg" src={facebookLogo} alt="Facebook Logo" />
      </IconButton>
      <IconButton>
        <img className="navImg" src={githubLogo} alt="Github Logo" />
      </IconButton>
      <IconButton>
        <img className="navImg" src={instagramLogo} alt="Instagram Logo" />
      </IconButton>
      <IconButton>
        <img className="navImg" src={twitterLogo} alt="Twitter Logo" />
      </IconButton>
    </nav>
  );
}
