import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/appStore";
import navStateActions from "../../store/navPathState";
import mobileNavAction from "../../store/mobileNavState";
import { NavLink } from "react-router-dom";
import Nav from "../nav/Nav";
import SkipToMain from "../blocks/SkipToMain";
import profilePic from "../../assets/profilePic.png";
import styles from "./header.module.css";

const Header: React.FC = () => {
  const pathState = useSelector<RootState, boolean>(
    (state) => state.navState.isOnPath
  );

  const mobileListState = useSelector<RootState, boolean>(
    (state) => state.mobileNav.toggle
  );
  const dispatch = useDispatch<AppDispatch>();

  const homePathHandler = () => {
    if (pathState) {
      dispatch(navStateActions.backHome());
    }

    if (window.screen.availWidth <= 500 && mobileListState) {
      dispatch(navStateActions.backHome());
      dispatch(mobileNavAction.toggleNavState());
    }
  };
  return (
    <React.Fragment>
      <div className={styles["profile-logo"]}>
        <SkipToMain />
        <NavLink
          onClick={homePathHandler}
          to="/"
          className={
            pathState
              ? `${styles["static-header"]} ${styles["link"]}`
              : `${styles["static-header"]}`
          }
        >
          <h1 aria-label="Insurer name">
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
