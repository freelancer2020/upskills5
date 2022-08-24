import React from "react";
import styles from "./travel-insurance.module.css";

const TravelInsurance: React.FC = () => {
  return (
    <div className={styles["travel-insurance-container"]}>
      <h2
        tabIndex={0}
        id="Travel-Insurance"
        className={styles["travel-ins-header"]}
      >
        Travel Insurance
      </h2>
      <p tabIndex={0} className={styles["ins-p"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br />
        tempor incididunt ut labore et dolore magna
      </p>
      <button type="button" className={styles["ins-button"]}>
        Order now
      </button>
    </div>
  );
};

export default TravelInsurance;
