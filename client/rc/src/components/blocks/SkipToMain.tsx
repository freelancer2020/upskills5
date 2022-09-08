import React from "react";
import styles from "./skip-tomain.module.css";

const SkipToMain: React.FC = () => {
  return (
    <a aria-label="Skip to Main Content" className={styles["skip-main"]} href="#main">
      Skip
    </a>
  );
};

export default SkipToMain;
