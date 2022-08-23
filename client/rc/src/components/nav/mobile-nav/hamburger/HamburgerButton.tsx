import React from "react";
import SvgLines from "../../../../assets/SvgHamburger";
import styles from "./hamburgerButton.module.css";

const HamburgerButton: React.FC = () => {
  return (
    <button
      aria-label="menu toggle button"
      type="button"
      className={styles["hamburger-button"]}
    >
      <SvgLines />
    </button>
  );
};

export default HamburgerButton;
