import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/appStore";
import navStateActions from "../../../store/navPathState";
import { NavLink } from "react-router-dom";
import styles from "./nav-item.module.css";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  click?: () => {};
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const [ariaCurrent, setAriaCurrent] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleStyleAndSelect = (state: boolean) => {
    if (state) {
      setAriaCurrent(true);
      return `${styles["selected"]}`;
    } else {
      setAriaCurrent(false);
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
    <li className={styles["nav-item"]}>
      <NavLink
        aria-current={ariaCurrent}
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
