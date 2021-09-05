import React from "react";
import "./project.css";
import banner from "../../assets/banner2.jpg";

export function Project() {
  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="carousel cards-container">
          <div className="card">
            <div className="box">
              <img src={banner} alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={banner} alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={banner} alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={banner} alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={banner} alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={banner} alt="" />
              <div className="text">Someone name</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
