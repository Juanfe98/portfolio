import React from "react";
import styles from "./styles.module.css";
export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.maxWidth}>
        <div className={styles.logo}>
          <a href="#">
            Port<span>folio</span>
          </a>
        </div>
        <ul className={styles.menu}>
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
      </div>
    </nav>
  );
}
