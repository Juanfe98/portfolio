import React, { useRef } from "react";
import "./styles.css";

export function Navbar() {
  const menuRef = useRef(null);
  const showMenu = () => {
    console.log(menuRef.current.classList);
    menuRef.current.classList.toggle("active");
  };
  return (
    <nav className="navbar">
      <div className="maxWidth">
        <div className="logo">
          <a href="#">
            Port<span>folio</span>
          </a>
        </div>
        <ul ref={menuRef} className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="menuBtn" onClick={() => showMenu()}>
          <i className="fas fa-bars"> </i>
        </div>
      </div>
    </nav>
  );
}
