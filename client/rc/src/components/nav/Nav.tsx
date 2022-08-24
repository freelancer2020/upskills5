import React from "react";
import NavItem from "./nav-item/NavItem";
import HamburgerButton from "./mobile-nav/hamburger/HamburgerButton";
import styles from "./nav.module.css";

export const navigationItems = [
  { nav: "Insurance", path: "/" },
  { nav: "About us", path: "about-us" },
  { nav: "Claim report", path: "claim-report" },
  { nav: "Contact", path: "contact" },
];

const Nav: React.FC = () => {
  return (
    <nav className={styles["nav-row"]}>
      <ul className={styles["nav-list"]}>
        {navigationItems.map((item, index) => (
          <NavItem children={item.nav} to={item.path} key={index.toString()} />
        ))}
      </ul>
      <HamburgerButton />
    </nav>
  );
};

export default Nav;
