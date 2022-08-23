import React from "react";
import { useDispatch } from "react-redux";
import mobileNavAction from "../../../../store/mobileNavState";
import { AppDispatch } from "../../../../store/appStore";
import SvgLines from "../../../../assets/SvgHamburger";
import styles from "./hamburgerButton.module.css";

const HamburgerButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleMenuToggle = () => {
    dispatch(mobileNavAction.toggleNavState());
  };

  return (
    <button
      onClick={handleMenuToggle}
      aria-label="menu toggle button"
      type="button"
      className={styles["hamburger-button"]}
    >
      <SvgLines />
    </button>
  );
};

export default HamburgerButton;
