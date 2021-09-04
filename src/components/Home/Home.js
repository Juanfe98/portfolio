import React from "react";
import "./styles.css";

export function Home() {
  return (
    <section className="home" id="home">
      <div className="maxWidth">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Prakash Shahi</div>
          <div className="text-3">
            And I'm a <span className="typing"></span>
          </div>
          <a href="#">Hire me</a>
        </div>
      </div>
    </section>
  );
}
