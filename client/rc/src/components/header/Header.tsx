import React from "react";
import Nav from "../nav/Nav";
import profilePic from "../../assets/profilePic.png";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles["profile-logo"]}>
        <h1 aria-label="Insurer name" tabIndex={0}>
          The Insurer
        </h1>
        <img className={styles["profile-icon"]} src={profilePic} alt="" />
      </div>
      <Nav />
    </React.Fragment>
  );
};

export default Header;
