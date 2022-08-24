import React from "react";
import ReactDOM from "react-dom";
import NavItem from "../../nav-item/NavItem";
import { navigationItems } from "../../Nav";
import styles from "./mobile-nav-list.module.css";

const MobileNavList: React.FC = () => {
  return (
    <div id="mobile-nav" className={styles["mobile-list-container"]}>
      <ul className={styles["mobile-list"]}>
        {navigationItems.map((item, index) => (
          <NavItem children={item.nav} to={item.path} key={index.toString()} />
        ))}
      </ul>
    </div>
  );
};

const MobileNav: React.FC = () => {
  const root = document.getElementById("mobile-nav") as HTMLDivElement;
  return ReactDOM.createPortal(<MobileNavList />, root);
};

export default MobileNav;
