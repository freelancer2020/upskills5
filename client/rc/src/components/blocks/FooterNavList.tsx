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
        <li className={styles["list-item"]} key={item.id.toString()}>
          <a
            className={styles["footer-nav-link"]}
            href="/"
            aria-label={`Link to ${item.name}`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavList;
