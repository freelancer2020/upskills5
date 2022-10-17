import React, { useEffect, useRef } from "react";
//Redux
import { useDispatch } from "react-redux";
import expenseItemsActions from "../../store/expenseItems";
import { AppDispatch } from "../../store/appStore";
//Icons
import { BiError } from "react-icons/bi";
import { MdOutlineDone } from "react-icons/md";
import styles from "./expense-alert-msg.module.css";

interface ExpenseAlertPrpos {
  submsg: string;
  ariaLabelMsg: string;
  forSubmit: boolean;
}

const ExpenseAlertMsg: React.FC<ExpenseAlertPrpos> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
 // const currentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // currentRef.current?.focus();
    setTimeout(() => dispatch(expenseItemsActions.closeAlertMsg()), 3000);
  }, [dispatch]);

  const closeAlerHandler = () => {
    dispatch(expenseItemsActions.closeAlertMsg());
  };
  return (
    <div role="status" className={styles["alert-msg-container"]}>
      <div
        aria-hidden={true}
        className={
          props.forSubmit
            ? `${styles["alert-error-msg-icon"]}`
            : `${styles["alert-msg-icon"]}`
        }
      >
        {props.forSubmit ? (
          <BiError className={styles["suc-and-error-icon"]} />
        ) : (
          <MdOutlineDone className={styles["suc-and-error-icon"]} />
        )}
      </div>
      <div
        // ref={currentRef}
        aria-label={props.ariaLabelMsg}
        tabIndex={0}
        className={styles["alert-msg-text"]}
      >
        {props.forSubmit ? <strong>Error</strong> : <strong>Success</strong>}
        <span className={styles["alert-submsg"]}>{props.submsg}</span>
      </div>
      <div className={styles["alert-msg-close"]}>
        <button
          onClick={closeAlerHandler}
          // aria-label="Close Alert Message"
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
