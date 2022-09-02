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
  id: string;
  path: string;
  stepName: string;
  stepNumber: number;
}

const Step: React.FC<StepProps> = (props) => {
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
    switch (props.stepNumber) {
      case 1:
        dispatch(claimActions.continueHref(1));
        break;
      case 2:
        dispatch(claimActions.continueHref(2));
        break;
      case 3:
        dispatch(claimActions.continueHref(3));
        break;
      default:
        return;
    }
  };

  return (
    <li
      id={props.id}
      onClick={clickHandler}
      className={active ? `${styles["active"]}` : `${styles["de-active"]}`}
    >
      <NavLink
        aria-current="step"
        to={props.path}
        children={props.stepName}
        className={({ isActive }) => handleActive(isActive)}
      />
    </li>
  );
};

export default Step;
