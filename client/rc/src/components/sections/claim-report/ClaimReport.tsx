import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../store/appStore";
//Actions
import claimActions from "../../../store/claimSteps";
import toastActions from "../../../store/claimToast";
import expenseItemsActions from "../../../store/expenseItems";

//@Types
import { ClaimData } from "../../../store/claimData";
import { ExpenseObj } from "../../../store/expenseItems";

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

  const expenseItems = useSelector<RootState, ExpenseObj[]>(
    (state) => state.expenseItems.items
  );

  const allData = useSelector<RootState, ClaimData>((state) => state.claimData);

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

  const continueHandler = (e: React.FormEvent) => {
    //e.preventDefault();
    if (stepDone) {
      e.preventDefault();
      if (expenseItems.length <= 0) {
        dispatch(expenseItemsActions.openAlertMsg("submit error"));
        return false;
      }
      const claimAllData = {
        ...allData.personalDetailsData,
        ...allData.incidentDetailsData,
      };

      const data = {
        country: claimAllData.Country,
        adress: claimAllData.Address,
        date: claimAllData.Date,
        incidentDesc: claimAllData.incidentDesc,
        travelPurpose: claimAllData.travelPurpose,
        birthday: claimAllData.Birthday,
        email: claimAllData.Email,
        firstName: claimAllData["First name"],
        secondName: claimAllData["Second name"],
        phoneNumber: claimAllData["Phone number"],
        policyNumber: claimAllData["Policy number"],
      };

      window
        .fetch("/graphql/claimData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `mutation {
          claimAllData(data: {
            firstName: ${JSON.stringify(data.firstName)},
            secondName: ${JSON.stringify(data.secondName)},
            phoneNumber: ${JSON.stringify(data.phoneNumber)},
            policyNumber: ${JSON.stringify(data.policyNumber)},
            adress: ${JSON.stringify(data.adress)},
            country: ${JSON.stringify(data.country)},
            date: ${JSON.stringify(data.date)},
            incidentDesc: ${JSON.stringify(data.incidentDesc)},
            travelPurpose: ${JSON.stringify(data.travelPurpose)},
            birthday: ${JSON.stringify(data.birthday)},
            email: ${JSON.stringify(data.email)}
          })
         }
        `,
          }),
        })
        .then((response) => {
          if (response.status !== 200) {
            return;
          } else {
            navigate("/Thank-you");
            window.localStorage.removeItem("personal");
            window.localStorage.removeItem("incident");
            return response.text();
          }
        });
    }
    claimObject.current?.scrollIntoView(true);

    if (claimStep === 1) {
      dispatch(toastActions.clearIncidentErrors());
      const dataValidations = validator(personalState);
      for (let i in dataValidations) {
        if (dataValidations[i] === false) {
          window.localStorage.setItem("personal", "0");
          dispatch(toastActions.hasError(dataValidations));
          return false;
        }
      }
      dispatch(toastActions.hasNoError(null));
      window.localStorage.setItem("personal", "1");
      dispatch(claimActions.continue());
      dispatch(personalValidationActions.getValidations(dataValidations));
      navigate("/claim-report/incident-details");
    } else if (claimStep === 2) {
      const dataValidations = validator(incidentState);
      for (let i in dataValidations) {
        if (dataValidations[i] === false) {
          window.localStorage.setItem("incident", "0");
          dispatch(toastActions.hasError(dataValidations));
          return false;
        }
      }

      e.preventDefault();

      dispatch(toastActions.hasNoError(null));
      window.localStorage.setItem("incident", "1");
      dispatch(claimActions.continue());
      dispatch(incidentlValidationActions.getValidations(dataValidations));
      navigate("/claim-report/expense-report");
    } else {
      return false;
    }
  };

  const returnHandler = () => {
    const incidetGuard = window.localStorage.getItem("incident");
    claimObject.current?.scrollIntoView(true);
    dispatch(claimActions.returnBtn());
    if (claimStep === 3 && incidetGuard === null) {
      navigate("/claim-report/personal-details");
    }

    if (claimStep === 3 && incidetGuard !== null) {
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
      <h1 id="claim-header" className={styles["claim-header"]}>
        Claim Report
      </h1>
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
        {claimStep === 1 && (
          <div className={styles["attention"]}>
            All fields marked with * are required
          </div>
        )}
        {claimStep === 2 && (
          <div className={styles["attention"]}>
            All fields marked with * are required
          </div>
        )}
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
            type="submit"
          >
            {stepDone ? "Submit" : "Continue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClaimReport;
