import React from "react";
import { Effects } from "./Effects/Effects";
import "./home.css";
import profile from "../../assets/home_img.jpg";

export function Home() {
  return (
    <>
      <Effects />
      <section className="home" id="home">
        <div className="maxWidth">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Juan Felipe</div>
            <div className="text-3">
              And I'm a <span className="typing"></span>
            </div>
            <a href="#">Hire me</a>
          </div>
          <div className="image-wrapper">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </section>
    </>
  );
}
