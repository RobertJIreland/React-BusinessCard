import React from "react";
import Selfie from "../images/Selfie.jpg";
import Navbar from "../components/navbar";

export default function Card() {
  return (
    <div className="outer-box">
      <img className="profile" src={Selfie} alt="Profile of RJ Ireland" />
      <div className="inner-box-top">
        <h1>RJ Ireland</h1>
        <h2>Software Developer</h2>
        <div className="inner-box-top-buttons">
          <button type="button" className="button">
            <span className="button-text">Email</span>
            <span className="button-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
          </button>
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
          Commodo exercitation aute consectetur dolore duis ea eu cupidatat aute
          nostrud id aute. Et reprehenderit duis tempor elit excepteur ea
          exercitation esse. Commodo sunt velit aliquip Lorem exercitation culpa
          ea id voluptate pariatur est.
        </p>
        <h3>Interests</h3>
        <p>
          Ea in et anim dolor adipisicing ut. Sit reprehenderit ad dolor
          ullamco. Consequat in ex elit consequat velit enim et ex sint.
        </p>
      </div>
      <Navbar />
    </div>
  );
}
