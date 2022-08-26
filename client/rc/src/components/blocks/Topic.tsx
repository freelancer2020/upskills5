import React from "react";
import styles from "./topic.module.css";

interface TopicProps {
  src: string;
  alt: string;
  caption: string;
}
const Topic: React.FC<TopicProps> = (props) => {
  return (
    <div className={styles["topic-container"]}>
      <figure>
        <img className={styles["img"]} src={props.src} alt={props.alt} />
        <figcaption>{props.caption}</figcaption>
      </figure>
    </div>
  );
};

export default Topic;
