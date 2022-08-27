import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/appStore";
import mobileNavAction from "../../../../store/mobileNavState";
import NavItem from "../../nav-item/NavItem";
import { navigationItems } from "../../Nav";
import styles from "./mobile-nav-list.module.css";

const MobileNavList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleNavState = () => {
    dispatch(mobileNavAction.toggleNavState());
  };
  return (
    <div id="mobile-nav" className={styles["mobile-list-container"]}>
      <ul className={styles["mobile-list"]}>
        {navigationItems.map((item, index) => (
          <div onClick={handleNavState} key={index.toString()}>
            <NavItem children={item.nav} to={item.path} />
          </div>
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
