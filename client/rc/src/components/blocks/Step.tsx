import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
//redux @types
import { AppDispatch, RootState } from "../../store/appStore";
import { PersonalDetailsData } from "../../store/claimData";
//redux actions
import claimActions from "../../store/claimSteps";
import toastActions from '../../store/claimToast'
//validator
import validator from "../../utilities/validator";
import { NavLink } from "react-router-dom";
import styles from "./step.module.css";

interface StepProps {
  id: string;
  path: string;
  stepName: string;
  stepNumber: number;
}

const Step: React.FC<StepProps> = (props) => {
  const navigate = useNavigate();
  const personalState = useSelector<RootState, PersonalDetailsData>(
    (state) => state.claimData.personalDetailsData
  );
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
    const personalValidation = validator(personalState);
    for (let i in personalValidation) {
      if (personalValidation[i] === false) {
        if (props.stepNumber === 2) {
          window.localStorage.setItem("personal", "0");
          dispatch(toastActions.hasError())
          navigate("/claim-report/personal-details");
        }
        if (props.stepNumber === 3) {
          navigate("/claim-report/incident-details");
        }
        return false;
      } else {
        window.localStorage.setItem("personal", "1");
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
      }
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
