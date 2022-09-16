import React from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//Actions

import expenseModalActions from "../../store/expenseModal";
import { AppDispatch, RootState } from "../../store/appStore";
import { ExpenseObj } from "../../store/expenseItems";
import { MetaAlertData } from "../../store/expenseItems";

import { AiFillPlusCircle } from "react-icons/ai";

import ExpenseItem from "../blocks/ExpenseItem";
import ExpenseAlertMsg from "../blocks/ExpenseAlertMsg";

import empty from "../../assets/empty.jpg";
import styles from "./expense-report.module.css";

const ExpenseReport: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const listExpenseItems = useSelector<RootState, ExpenseObj[]>(
    (state) => state.expenseItems.items
  );

  const alertMsgStatus = useSelector<RootState, boolean>(
    (state) => state.expenseItems.isAlertMsg
  );

  const alertMetaData = useSelector<RootState, MetaAlertData>(
    (state) => state.expenseItems.metaAlertData
  );

  const modalHandler = () => {
    dispatch(expenseModalActions.openModal());
  };
  return (
    <div className={styles["expense-report-container"]}>
      {alertMsgStatus && (
        <ExpenseAlertMsg
          forSubmit={alertMetaData.forSubmit}
          ariaLabelMsg={alertMetaData.ariaLabelMsg}
          submsg={alertMetaData.subMsg}
        />
      )}

      <div className={styles["expense-header"]}>
        <h2>Expense report</h2>
      </div>
      <ul className={styles["report-list-items"]}>
        {listExpenseItems.length > 0 &&
          listExpenseItems.map((item, index) => (
            <ExpenseItem
              id={index.toString()}
              itemPrice={item.itemPrice}
              itemText={item.itemText}
              key={index.toString()}
            />
          ))}
      </ul>
      {listExpenseItems.length <= 0 && (
        <div>
          <img
            aria-hidden={true}
            className={styles["empty-list-image"]}
            src={empty}
            alt=""
            role="presentation"
          />
        </div>
      )}
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
