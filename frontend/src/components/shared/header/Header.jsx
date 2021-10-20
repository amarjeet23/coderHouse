import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  const brandLogo = {
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    display: "flex",
    alignItem: "center",
    color: "var(--white)"
  };
  const brandText = {
    marginLeft: "10px"
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" style={brandLogo}>
        <img
          style={{height:'30px',width:'30px',borderradius:'50'}}
          src="https://www.clipartmax.com/png/middle/123-1230014_raised-hand-icon-raised-hand-emoji-png.png"
          alt="logo"
        />
        <span style={brandText}>CoderHouse</span>
      </Link>
    </nav>
  );
}
