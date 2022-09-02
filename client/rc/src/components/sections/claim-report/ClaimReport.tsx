import React from "react";
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
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const continueHandler = () => {
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
