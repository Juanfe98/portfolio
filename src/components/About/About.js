import React from "react";
import profile from "../../assets/profile-1.jpeg";
import "./about.css";
export function About() {
  return (
    <section className="about">
      <div className="maxWidth">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={profile} alt="Face" />
          </div>
          <div className="column right">
            <div className="text">I'm Juan Felipe</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              quae vitae optio nobis impedit cum dolores in incidunt.
              Praesentium quo, maxime ad illum nulla voluptatem nam temporibus,
              voluptatibus id eligendi esse cupiditate dignissimos porro, iste
              perferendis accusamus et? Accusantium minima beatae eos, porro
              nihil quia voluptatem, facere consequatur libero tempore officia
              et eum, inventore sint neque adipisci. Dolorum earum quis,
              blanditiis autem aliquam atque accusantium sit fuga repellat sint
              repellendus similique quidem optio est ipsum saepe eligendi quam
              sequi voluptas facere numquam modi animi! Aliquam eius ut
              distinctio, aspernatur animi repellendus vitae enim porro
              provident quia vero numquam laboriosam sapiente.
            </p>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
