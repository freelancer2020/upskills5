import React from "react";
//redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/appStore";
import expenseModalActions from "../../store/expenseModal";
import styles from "./modal-button.module.css";

type ModalButtonProps = {
  type: string;
  click?: (e: React.FormEvent) => void;
};

const ModalButton: React.FC<ModalButtonProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const clickHandler = (e: React.FormEvent) => {
    if (props.type === "cancel" && !props.click) {
      dispatch(expenseModalActions.closeModal());
    } else {
      if (props.click) {
        props.click(e);
      }
    }
  };

  const setAriaLabel = () => {
    if (props.type === "cancel") {
      return "Cancel and close the modal";
    } else if (props.type === "submit") {
      return "Add Expense item and close the modal";
    } else {
      return "Update Expense item and close the modal";
    }
  };
  return (
    <button
      tabIndex={0}
      aria-label={setAriaLabel()}
      onClick={clickHandler}
      className={
        props.type === "cancel"
          ? `${styles["modal-button-cancel"]}`
          : ` ${styles["modal-button-add"]}`
      }
      type="button"
    >
      {props.type === "cancel"
        ? "Cancel"
        : props.type === "update"
        ? "Update"
        : "Add"}
    </button>
  );
};

export default ModalButton;
