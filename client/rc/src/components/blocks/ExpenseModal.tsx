import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
//icons
import { AiOutlineCloseCircle } from "react-icons/ai";
//redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/appStore";
import expenseModalActions from "../../store/expenseModal";
import expenseItemsActions from "../../store/expenseItems";

import ModalButton from "./ModalButton";

import styles from "./expense-modal.module.css";

const ExpenseModal: React.FC = () => {
  const [itemText, setItemText] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<string>("");

  const [isValidName, setIsValidName] = useState<boolean>(true);
  const [isValidPrice, setIsValidPrice] = useState<boolean>(true);

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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setItemText(value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setItemPrice(value);
  };

  const addExpenseHandler = () => {
    if (itemPrice.length <= 0) {
      setIsValidPrice(false);
    } else if (itemText.length <= 0) {
      setIsValidName(false);
    } else {
      setIsValidPrice(true);
      setIsValidName(true);
      const expenseItem = {
        itemPrice: itemPrice,
        itemText: itemText,
      };

      dispatch(expenseItemsActions.addItem(expenseItem));
      dispatch(expenseModalActions.closeModal());  
    }
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
            aria-describedby="name-error-msg"
            onChange={(e) => handleNameChange(e)}
            className={styles["modal-input"]}
            id="name"
            type="text"
            placeholder="e.x Mostafa"
          />
          <i id="name-error-msg" className={styles["error-field-msg"]}>
            {isValidName ? "" : `*Please provide a valid name`}
          </i>
        </div>
        <div className={styles["input-row"]}>
          <label htmlFor="price">Price</label>
          <input
            aria-describedby="price-error-msg"
            onChange={(e) => handlePriceChange(e)}
            id="name"
            type="text"
            placeholder="15$"
          />
          <i id="price-error-msg" className={styles["error-field-msg"]}>
            {isValidPrice ? "" : `*Please provide a valid price`}
          </i>
        </div>
        <div className={styles["modal-buttons"]}>
          <ModalButton type="cancel" />
          <ModalButton click={addExpenseHandler} type="add" />
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