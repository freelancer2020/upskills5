import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../store/appStore";
//Actions
import claimActions from "../../../store/claimSteps";
import toastActions from "../../../store/claimToast";

import personalValidationActions from "../../../store/claimPersonalValidation";
import incidentlValidationActions from "../../../store/claimIncidentValidations";
import Step from "../../blocks/Step";
//applications
import PersonalDetailsApp from "../../applications/PersonalDetailsApp";
import IncidentDetailsApp from "../../applications/IncidentDetailsApp";
import ExpenseReport from "../../applications/ExpenseReport";

//Toast
import ToastMessageAlert from "../../toast/ToastMessage";

//@Types
import {
  PersonalDetailsData,
  IncidentDetailsData,
} from "../../../store/claimData";
import styles from "./claim-report.module.css";

//validator
import validator from "../../../utilities/validator";

//data
const steps = [
  {
    id: "personal-details",
    path: "/claim-report/personal-details",
    stepName: "Step 1 - Personal Details",
    stepNumber: 1,
  },
  {
    id: "incident-details",
    path: "/claim-report/incident-details",
    stepName: "Step 2 - Incident Details",
    stepNumber: 2,
  },
  {
    id: "expense-report",
    path: "/claim-report/expense-report",
    stepName: "Step 3 - Expense Report",
    stepNumber: 3,
  },
];

const ClaimReport: React.FC = () => {
  const claimObject = useRef<HTMLDivElement>(null);
  const claimStep = useSelector<RootState, number>(
    (state) => state.claimState.step
  );

  const stepDone = useSelector<RootState, boolean>(
    (state) => state.claimState.done
  );

  const isReturn = useSelector<RootState, boolean>(
    (state) => state.claimState.isReturn
  );

  const personalState = useSelector<RootState, PersonalDetailsData>(
    (state) => state.claimData.personalDetailsData
  );

  const incidentState = useSelector<RootState, IncidentDetailsData>(
    (state) => state.claimData.incidentDetailsData
  );

  const claimHasError = useSelector<RootState, boolean>(
    (state) => state.claimToast.hasError
  );

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/claim-report/personal-details":
        dispatch(claimActions.continueHref(1));
        navigate(path);
        break;
      case "/claim-report/incident-details":
        dispatch(claimActions.continueHref(2));
        navigate(path);
        break;
      case "/claim-report/expense-report":
        dispatch(claimActions.continueHref(3));
        navigate(path);
        break;
      default:
        return;
    }
  }, [dispatch, navigate]);

  const continueHandler = () => {
    if (stepDone) return false; // later handle submit
    claimObject.current?.scrollIntoView(true);

    if (claimStep === 1) {
      const dataValidations = validator(personalState);
      for (let i in dataValidations) {
        if (dataValidations[i] === false) {
          window.localStorage.setItem("personal", "0");
          dispatch(toastActions.hasError(dataValidations));
          return false;
        }
      }
      dispatch(toastActions.hasNoError());
      window.localStorage.setItem("personal", "1");
      dispatch(claimActions.continue());
      dispatch(personalValidationActions.getValidations(dataValidations));
      navigate("/claim-report/incident-details");
    } else if (claimStep === 2) {
      const dataValidations = validator(incidentState);
      console.log("debugging", dataValidations);
      for (let i in dataValidations) {
        if (dataValidations[i] === false) {
          window.localStorage.setItem("incident", "0");
          dispatch(toastActions.hasError(dataValidations));
          return false;
        }
      }

      dispatch(toastActions.hasNoError());
      window.localStorage.setItem("incident", "1");
      dispatch(claimActions.continue());
      dispatch(incidentlValidationActions.getValidations(dataValidations));

      // window.localStorage.setItem("incident", "0");
      // Will handle next step validation
      navigate("/claim-report/expense-report");
    } else {
      return false;
    }
  };

  const returnHandler = () => {
    claimObject.current?.scrollIntoView(true);
    dispatch(claimActions.returnBtn());
    if (claimStep === 3) {
      navigate("/claim-report/incident-details");
    }

    if (claimStep === 2) {
      navigate("/claim-report/personal-details");
    }
  };
  return (
    <div ref={claimObject} className={styles["claim-report-container"]}>
      {claimHasError && (
        <div>
          <ToastMessageAlert />
        </div>
      )}
      <h1 id="claim-header" tabIndex={0} className={styles["claim-header"]}>
        Claim Report
      </h1>
      <nav className={styles["breadcrumb"]} aria-label="Breadcrumb">
        <ol>
          {steps.map((step, index) => (
            <Step
              key={index.toString()}
              id={step.id}
              path={step.path}
              stepName={step.stepName}
              stepNumber={step.stepNumber}
            />
          ))}
        </ol>
      </nav>
      <div className={styles["claim-report-app-container"]}>
        {claimStep === 1 && <PersonalDetailsApp />}
        {claimStep === 2 && <IncidentDetailsApp />}
        {claimStep === 3 && <ExpenseReport />}
      </div>
      <div className={styles["claim-report-control-btns"]}>
        <button
          onClick={returnHandler}
          style={{ visibility: isReturn ? "visible" : "hidden" }}
          className={`${styles["claim-btn"]} ${styles["return"]}`}
          type="button"
        >
          {" "}
          Return
        </button>
        <button
          onClick={continueHandler}
          className={`${styles["claim-btn"]} ${styles["continue"]}`}
          type="button"
        >
          {stepDone ? "Submit" : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default ClaimReport;
