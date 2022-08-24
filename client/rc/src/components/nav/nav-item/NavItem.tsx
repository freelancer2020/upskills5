import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/appStore";
import navStateActions from "../../../store/navPathState";
import { NavLink } from "react-router-dom";
import styles from "./nav-item.module.css";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleStyleAndSelect = (state: boolean) => {
    if (state) {
      return `${styles["selected"]}`;
    } else {
      return `${styles["nav-link"]}`;
    }
  };

  const changePathState = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    return path === "/"
      ? dispatch(navStateActions.backHome())
      : dispatch(navStateActions.goOnPath());
  };

  return (
    <li>
      <NavLink
        onClick={(e) => changePathState(e, props.to)}
        className={({ isActive }) => handleStyleAndSelect(isActive)}
        to={props.to}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
