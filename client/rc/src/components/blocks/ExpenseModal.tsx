import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
//icons
import { AiOutlineCloseCircle } from "react-icons/ai";
//redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/appStore";
//@types
import { InitModalData } from "../../store/expenseModal";
//Actions
import expenseModalActions from "../../store/expenseModal";
import expenseItemsActions from "../../store/expenseItems";

import ModalButton from "./ModalButton";

import styles from "./expense-modal.module.css";

const ExpenseModal: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const [itemText, setItemText] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<string>("");

  const [isValidName, setIsValidName] = useState<boolean>(true);
  const [isValidPrice, setIsValidPrice] = useState<boolean>(true);

  const currentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    nameRef.current?.focus();
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
    setIsValidName(true);
    dispatch(expenseModalActions.writeExpenseName(value));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setItemPrice(value);
    setIsValidPrice(true);
    dispatch(expenseModalActions.writeExpensePrice(value));
  };

  const modalData = useSelector<RootState, InitModalData>(
    (state) => state.expenseModal.modalData
  );

  useEffect(() => {
    setItemText(modalData.text);
    setItemPrice(modalData.price);
  }, [modalData.text, modalData.price]);
  const addExpenseHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemText.length <= 0) {
      setIsValidName(false);
      nameRef.current?.focus();
    } else if (itemPrice.length <= 0) {
      setIsValidPrice(false);
      priceRef.current?.focus();
    } else {
      setIsValidPrice(true);
      setIsValidName(true);
      const expenseItem = {
        itemPrice: itemPrice,
        itemText: itemText,
      };

      dispatch(expenseItemsActions.addItem(expenseItem));
      dispatch(expenseModalActions.closeModal());
      dispatch(expenseItemsActions.openAlertMsg("Added"));

      const root = document.getElementById("root") as HTMLDivElement;
      root.scrollIntoView(true);
    }
  };

  const updateExpenseHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemText.length <= 0) {
      setIsValidName(false);
      nameRef.current?.focus();
    } else if (itemPrice.length <= 0) {
      setIsValidPrice(false);
      priceRef.current?.focus();
    } else {
      setIsValidPrice(true);
      setIsValidName(true);

      dispatch(expenseItemsActions.upDateItems(modalData));
      dispatch(expenseModalActions.closeModal());
      dispatch(expenseItemsActions.openAlertMsg("updated"));
    }
  };

  return (
    <div onClick={closeModalHandler} className={styles["modal-mirror"]}>
      <div
        ref={currentRef}
        role="dialog"
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
        <form>
          <div className={styles["input-row"]}>
            <label htmlFor="name">Name</label>
            <input
              autoComplete="on"
              aria-autocomplete="inline"
              required={true}
              aria-required={true}
              value={modalData.text}
              ref={nameRef}
              aria-describedby="name-error-msg"
              onChange={(e) => handleNameChange(e)}
              className={styles["modal-input"]}
              id="name"
              type="text"
              placeholder="e.x Mostafa"
              aria-errormessage="name-error-msg"
            />
            <i
              aria-live="polite"
              role="alert"
              id="name-error-msg"
              className={styles["error-field-msg"]}
            >
              {isValidName ? "" : `Please provide a valid name`}
            </i>
          </div>
          <div className={styles["input-row"]}>
            <label htmlFor="price">Price</label>
            <input
              autoComplete="on"
              aria-autocomplete="inline"
              required={true}
              aria-required={true}
              value={modalData.price}
              ref={priceRef}
              aria-describedby="price-error-msg"
              onChange={(e) => handlePriceChange(e)}
              id="price"
              type="text"
              placeholder="15$"
            />
            <i
              aria-live="polite"
              role="alert"
              id="price-error-msg"
              className={styles["error-field-msg"]}
            >
              {isValidPrice ? "" : `Please provide a valid price`}
            </i>
          </div>
        </form>
        <div className={styles["modal-buttons"]}>
          <ModalButton type="cancel" />
          {modalData.id.length > 0 && (
            <ModalButton type="update" click={(e) => updateExpenseHandler(e)} />
          )}
          {modalData.id.length <= 0 && (
            <ModalButton type="submit" click={(e) => addExpenseHandler(e)} />
          )}
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
