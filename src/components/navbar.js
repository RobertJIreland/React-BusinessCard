import React from "react";
import facebookLogo from "../images/facebook.png";
import githubLogo from "../images/github.png";
import instagramLogo from "../images/instagram.png";
import twitterLogo from "../images/twitter.png";

export default function Navbar() {
  return (
    <nav>
      <button type="button" className="icon">
        <img className="navImg" src={facebookLogo} alt="Facebook Logo" />
      </button>
      <button type="button" className="icon">
        <img className="navImg" src={githubLogo} alt="Github Logo" />
      </button>
      <button type="button" className="icon">
        <img className="navImg" src={instagramLogo} alt="Instagram Logo" />
      </button>
      <button type="button" className="icon">
        <img className="navImg" src={twitterLogo} alt="Twitter Logo" />
      </button>
    </nav>
  );
}
