import React from "react";
import styles from "./content.module.css";

interface ContentProps {
  header: string;
  children: JSX.Element;
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <div className={styles["intv-content"]}>
      <h2 className={styles["intv-header"]}>{props.header}</h2>
      {props.children}
    </div>
  );
};

export default Content;
