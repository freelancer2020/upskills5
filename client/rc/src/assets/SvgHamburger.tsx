import React from "react";
import styles from "./svg.module.css";

const SvgLines: React.FC = () => {
  return (
    <svg
      aria-hidden={true}
      height="32"
      width="35"
      className={styles["svg-container"]}
    >
      <line x1="5" y1="8" y2="8" x2="30" stroke="black" strokeWidth={3} />
      <line x1="5" y1="16" y2="16" x2="30" stroke="black" strokeWidth={3} />
      <line x1="5" y1="24" y2="24" x2="30" stroke="black" strokeWidth={3} />
    </svg>
  );
};

export default SvgLines;
