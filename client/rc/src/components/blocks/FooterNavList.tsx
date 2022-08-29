import React from "react";
import styles from "./footer-nav-list.module.css";

type List = {
  name: string;
  id: number;
};

interface FooterNavProps {
  navHeader: string;
  navList: List[];
}

const FooterNavList: React.FC<FooterNavProps> = (props) => {
  return (
    <ul>
      <li tabIndex={0} className={styles["list-header"]} key={0}>
        {props.navHeader}
      </li>
      {props.navList.map((item) => (
        <a
          className={styles["footer-nav-link"]}
          key={item.id.toString()}
          href="/"
          aria-label={`Link to ${item.name}`}
        >
          <li className={styles["list-item"]}>{item.name}</li>
        </a>
      ))}
    </ul>
  );
};

export default FooterNavList;
