import React from "react";
//redux
import { useDispatch } from "react-redux";
import expenseModalActions from "../../store/expenseModal";
import { AppDispatch } from "../../store/appStore";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "./expense-report.module.css";

const ExpenseReport: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const modalHandler = () => {
    dispatch(expenseModalActions.openModal());
  };
  return (
    <div className={styles["expense-report-container"]}>
      <div className={styles["expense-header"]}>
        <h3>Expense report</h3>
      </div>
      <div className={styles["report-list-items"]}></div>
      <div className={styles["expense-footer"]}>
        <button
          aria-haspopup={true}
          onClick={modalHandler}
          type="button"
          tabIndex={0}
          className={styles["expense-button"]}
        >
          <AiFillPlusCircle
            aria-hidden={true}
            className={styles["expense-add-button"]}
          />{" "}
          Add another expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseReport;
