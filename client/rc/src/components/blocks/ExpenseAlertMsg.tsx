import React, { useEffect, useRef } from "react";
//Redux
import { useDispatch } from "react-redux";
import expenseItemsActions from "../../store/expenseItems";
import { AppDispatch } from "../../store/appStore";
import { MdOutlineDone } from "react-icons/md";
import styles from "./expense-alert-msg.module.css";

interface ExpenseAlertPrpos {
  submsg: string;
  ariaLabelMsg: string;
}

const ExpenseAlertMsg: React.FC<ExpenseAlertPrpos> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    currentRef.current?.focus();
  }, []);

  const closeAlerHandler = () => {
    dispatch(expenseItemsActions.closeAlertMsg());
  };
  return (
    <div role="alert" className={styles["alert-msg-container"]}>
      <div aria-hidden={true} className={styles["alert-msg-icon"]}>
        <MdOutlineDone className={styles["suc-icon"]} />
      </div>
      <div
        ref={currentRef}
        aria-label={props.ariaLabelMsg}
        tabIndex={0}
        className={styles["alert-msg-text"]}
      >
        <strong>Success</strong>
        <span className={styles["alert-submsg"]}>{props.submsg}</span>
      </div>
      <div className={styles["alert-msg-close"]}>
        <button
          onClick={closeAlerHandler}
          aria-label="Close Alert Message"
          className={styles["alert-msg-btn"]}
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ExpenseAlertMsg;
