import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
//icons
import { AiOutlineCloseCircle } from "react-icons/ai";
//redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/appStore";
import expenseModalActions from "../../store/expenseModal";

import ModalButton from "./ModalButton";

import styles from "./expense-modal.module.css";

const ExpenseModal: React.FC = () => {
  const currentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    currentRef.current?.focus();
  }, []);
  const dispatch = useDispatch<AppDispatch>();

  const preventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const closeModalHandler = () => {
    dispatch(expenseModalActions.closeModal());
  };

  return (
    <div onClick={closeModalHandler} className={styles["modal-mirror"]}>
      <div
        ref={currentRef}
        role="alertdialog"
        tabIndex={0}
        aria-modal={true}
        onClick={(e) => preventHandler(e)}
        aria-labelledby="modal-header"
        className={styles["modal-container"]}
      >
        <div className={styles["modal-close"]}>
          <button
            onClick={closeModalHandler}
            title="close modal"
            type="button"
            className={styles["modal-close-button"]}
          >
            <AiOutlineCloseCircle
              aria-hidden={true}
              className={styles["modal-close-icon"]}
            />
          </button>
        </div>
        <div className={styles["modal-header"]}>
          <h2 className={styles["modal-popup-header"]} id="modal-header">
            Expense
          </h2>
        </div>
        <div className={styles["input-row"]}>
          <label htmlFor="name">Name</label>
          <input
            className={styles["modal-input"]}
            id="name"
            type="text"
            placeholder="e.x Mostafa"
          />
        </div>
        <div className={styles["input-row"]}>
          <label htmlFor="price">Price</label>
          <input id="name" type="text" placeholder="15$" />
        </div>
        <div className={styles["modal-buttons"]}>
          <ModalButton type="cancel" />
          <ModalButton type="add" />
        </div>
      </div>
    </div>
  );
};

const ExpenseModalComponent: React.FC = () => {
  const root = document.getElementById("modal") as HTMLDivElement;
  return ReactDOM.createPortal(<ExpenseModal />, root);
};
export default ExpenseModalComponent;
