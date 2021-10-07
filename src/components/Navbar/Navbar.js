import React, { useEffect, useRef, useState, useCallback } from "react";
import "./styles.css";

export function Navbar() {
  const menuRef = useRef(null);
  const oldScrollRef = useRef(0);
  const navbarRef = useRef(null);
  
  useEffect( () => {
    window.addEventListener("scroll", hideNavbarOnScroll, false);
    return () => window.removeEventListener("scroll", hideNavbarOnScroll);
  },[])
  
  const hideNavbarOnScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop > oldScrollRef.current){
      navbarRef.current.classList.add("hideNavbar");
      navbarRef.current.classList.remove("showNavbar");
    }else{
      navbarRef.current.classList.remove("hideNavbar");
      navbarRef.current.classList.add("showNavbar");
    }
    oldScrollRef.current = scrollTop;
  };

  const showMenu = () => {
    menuRef.current.classList.toggle("active");
  };
  
  return (
    <nav className="navbar" ref={navbarRef}>
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
    </nav>
  );
}
