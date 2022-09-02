import React, { useState } from "react";
//redux
import { useDispatch } from "react-redux";
//redux @types
import { AppDispatch } from "../../store/appStore";
//redux actions
import claimActions from "../../store/claimSteps";
import { NavLink } from "react-router-dom";
import styles from "./step.module.css";

interface StepProps {
  stepName: string;
}

export const StepPersonal: React.FC<StepProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [active, setActive] = useState<boolean>(false);
  const handleActive = (state: boolean) => {
    if (state) {
      setActive(true);
      return `${styles["active"]}`;
    } else {
      setActive(false);
      return `${styles["de-active"]}`;
    }
  };

  const clickHandler = () => {
    dispatch(claimActions.continueHref(1));
  };

  return (
    <li
      onClick={clickHandler}
      className={active ? `${styles["active"]}` : `${styles["de-active"]}`}
    >
      <NavLink
        to="/claim-report/personal-details"
        children={props.stepName}
        className={({ isActive }) => handleActive(isActive)}
      />
    </li>
  );
};

export const StepIncident: React.FC<StepProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [active, setActive] = useState<boolean>(false);
  const handleActive = (state: boolean) => {
    if (state) {
      setActive(true);
      return `${styles["active"]}`;
    } else {
      setActive(false);
      return `${styles["de-active"]}`;
    }
  };

  const clickHandler = () => {
    dispatch(claimActions.continueHref(2));
  };
  return (
    <li
      onClick={clickHandler}
      className={active ? `${styles["active"]}` : `${styles["de-active"]}`}
    >
      <NavLink
        to="/claim-report/incident-details"
        children={props.stepName}
        className={({ isActive }) => handleActive(isActive)}
      />
    </li>
  );
};

export const StepExpense: React.FC<StepProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [active, setActive] = useState<boolean>(false);
  const handleActive = (state: boolean) => {
    if (state) {
      setActive(true);
      return `${styles["active"]}`;
    } else {
      setActive(false);
      return `${styles["de-active"]}`;
    }
  };

  const clickHandler = () => {
    dispatch(claimActions.continueHref(3));
  };
  return (
    <li
      onClick={clickHandler}
      className={active ? `${styles["active"]}` : `${styles["de-active"]}`}
    >
      <NavLink
        aria-current="step"
        to="/claim-report/expense-report"
        children={props.stepName}
        className={({ isActive }) => handleActive(isActive)}
      />
    </li>
  );
};
