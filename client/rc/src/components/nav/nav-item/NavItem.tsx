import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav-item.module.css";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const handleStyleAndSelect = (state: boolean) => {
    if (state) {
      return `${styles["selected"]}`;
    } else {
      return `${styles["nav-link"]}`;
    }
  };
  return (
    <li>
      <NavLink
        className={({ isActive }) => handleStyleAndSelect(isActive)}
        to={props.to}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
