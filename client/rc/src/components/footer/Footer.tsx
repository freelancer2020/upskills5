import React from "react";
import styles from "./footer.module.css";

interface FooterProps {
  footerHeader: JSX.Element;
  footerNav: JSX.Element[];
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-header"]}>{props.footerHeader}</div>
      <div className={styles["footer-nav"]}>{props.footerNav}</div>
    </div>
  );
};

export default Footer;
