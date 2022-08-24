import React from "react";
import styles from "./international-visitor.module.css";

interface InternationalProps {
  image: JSX.Element;
  content: JSX.Element;
  reverse: boolean;
}

const InternationalVisitor: React.FC<InternationalProps> = (props) => {
  return (
    <div className={styles["intv-container"]}>
      <div className={styles["intv-block"]}>
        {props.reverse ? props.content : props.image}
      </div>
      <div className={styles["intv-block"]}>
        {props.reverse ? props.image : props.content}
      </div>
    </div>
  );
};

export default InternationalVisitor;
