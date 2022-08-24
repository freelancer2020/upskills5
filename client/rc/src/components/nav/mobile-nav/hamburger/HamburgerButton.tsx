import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/appStore";
import mobileNavAction from "../../../../store/mobileNavState";
import { AppDispatch } from "../../../../store/appStore";
import SvgLines from "../../../../assets/SvgHamburger";
import styles from "./hamburgerButton.module.css";

const HamburgerButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menuToggleState = useSelector<RootState, boolean>(
    (state) => state.mobileNav.toggle
  );

  const handleMenuToggle = () => {
    dispatch(mobileNavAction.toggleNavState());
  };

  return (
    <button
      aria-controls="mobile-nav"
      aria-expanded={menuToggleState}
      onClick={handleMenuToggle}
      aria-label={
        menuToggleState
          ? "menu toggle button, close the menu"
          : "menu toggle button, open the menu"
      }
      type="button"
      className={styles["hamburger-button"]}
    >
      <SvgLines />
    </button>
  );
};

export default HamburgerButton;
