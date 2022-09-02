import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../store/appStore";
import claimActions from "../../../store/claimSteps";
import { StepPersonal, StepIncident, StepExpense } from "../../blocks/Step";
import styles from "./claim-report.module.css";

const ClaimReport: React.FC = () => {
  const claimStep = useSelector<RootState, number>(
    (state) => state.claimState.step
  );

  const stepDone = useSelector<RootState, boolean>(
    (state) => state.claimState.done
  );

  const isReturn = useSelector<RootState, boolean>(
    (state) => state.claimState.isReturn
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
  }, []);

  const continueHandler = () => {
    if (stepDone) return false; // later we will handle submit
    dispatch(claimActions.continue());
    if (claimStep === 1) {
      navigate("/claim-report/incident-details");
    }
    if (claimStep === 2) {
      navigate("/claim-report/expense-report");
    }
  };

  const returnHandler = () => {
    dispatch(claimActions.returnBtn());
    if (claimStep === 3) {
      navigate("/claim-report/incident-details");
    }

    if (claimStep === 2) {
      navigate("/claim-report/personal-details");
    }
  };
  return (
    <div className={styles["claim-report-container"]}>
      <h1 id="claim-header" tabIndex={0} className={styles["claim-header"]}>
        Claim Report
      </h1>
      <nav className={styles["breadcrumb"]} aria-label="Breadcrumb">
        <ol>
          {<StepPersonal stepName="Step 1 - Personal Details" />}
          {<StepIncident stepName="Step 2 - Incident Details" />}
          {<StepExpense stepName="Step 3 - Expense Rerport" />}
        </ol>
      </nav>
      <div className={styles["claim-report-app-container"]}></div>
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
