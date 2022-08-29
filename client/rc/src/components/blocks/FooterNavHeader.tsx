import React from "react";
import styles from "./footer-nav-header.module.css";
import profilePic from "../../assets/profilePic.png";

const FootrNavHeader: React.FC = () => {
  return (
    <div className={styles["footer-header-container"]}>
      <h2 tabIndex={0} aria-label="Insurer name">
        The Insurer
      </h2>
      <img className={styles["profile-icon"]} src={profilePic} alt="" />
    </div>
  );
};

export default FootrNavHeader;
