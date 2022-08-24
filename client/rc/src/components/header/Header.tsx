import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/appStore";
import navStateActions from "../../store/navPathState";
import { NavLink } from "react-router-dom";
import Nav from "../nav/Nav";
import profilePic from "../../assets/profilePic.png";
import styles from "./header.module.css";

const Header: React.FC = () => {
  const pathState = useSelector<RootState, boolean>(
    (state) => state.navState.isOnPath
  );
  const dispatch = useDispatch<AppDispatch>();

  const homePathHandler = () => {
    return pathState ? dispatch(navStateActions.backHome()) : null;
  };
  return (
    <React.Fragment>
      <div className={styles["profile-logo"]}>
        <NavLink
          onClick={homePathHandler}
          to="/"
          className={
            pathState
              ? `${styles["static-header"]} ${styles["link"]}`
              : `${styles["static-header"]}`
          }
        >
          <h1 aria-label="Insurer name" tabIndex={0}>
            {" "}
            The Insurer
          </h1>
        </NavLink>
        <img className={styles["profile-icon"]} src={profilePic} alt="" />
      </div>
      <Nav />
    </React.Fragment>
  );
};

export default Header;
