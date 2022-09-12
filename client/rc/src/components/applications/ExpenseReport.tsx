import React from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import expenseModalActions from "../../store/expenseModal";
import { AppDispatch, RootState } from "../../store/appStore";
import { ExpenseObj } from "../../store/expenseItems";

import { AiFillPlusCircle } from "react-icons/ai";

import ExpenseItem from "../blocks/ExpenseItem";
import styles from "./expense-report.module.css";

const ExpenseReport: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const listExpenseItems = useSelector<RootState, ExpenseObj[]>(
    (state) => state.expenseItems.items
  );

  const modalHandler = () => {
    dispatch(expenseModalActions.openModal());
  };
  return (
    <div className={styles["expense-report-container"]}>
      <div className={styles["expense-header"]}>
        <h3>Expense report</h3>
      </div>
      <ul className={styles["report-list-items"]}>
        {listExpenseItems.map((item, index) => (
          <ExpenseItem
            itemPrice={item.itemPrice}
            itemText={item.itemText}
            key={index.toString()}
          />
        ))}
      </ul>
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