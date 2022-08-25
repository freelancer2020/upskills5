import React from "react";
import styles from "./travel-topics.module.css";

interface TravelTopicsProps {
  children: JSX.Element;
}

const TravelTopics: React.FC<TravelTopicsProps> = (props) => {
  return (
    <div className={styles["travel-topics-container"]}>
      <h2>Explore Our Travel Topics</h2>
      <div className={styles["topics-row"]}>{props.children}</div>
    </div>
  );
};

export default TravelTopics;
