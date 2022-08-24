import React from "react";
import styles from "./image.module.css";

interface ImageProps {
  src: string;
  alt: string;
}
const Image: React.FC<ImageProps> = (props) => {
  return <img className={styles["image"]} src={props.src} alt={props.alt} />;
};

export default Image;
