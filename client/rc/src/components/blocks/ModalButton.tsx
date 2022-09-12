import React from "react";
//redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/appStore";
import expenseModalActions from "../../store/expenseModal";
import styles from "./modal-button.module.css";

type ModalButtonProps = {
  type: string;
  click?: () => void;
};

const ModalButton: React.FC<ModalButtonProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const clickHandler = () => {
    if (props.type === "cancel" && !props.click) {
      dispatch(expenseModalActions.closeModal());
    } else {
      if (props.click) {
        props.click();
      }
    }
  };
  return (
    <button
      tabIndex={0}
      onClick={clickHandler}
      className={
        props.type === "cancel"
          ? `${styles["modal-button-cancel"]}`
          : ` ${styles["modal-button-add"]}`
      }
      type="button"
    >
      {props.type === "cancel" ? "Cancel" : "Add"}
    </button>
  );
};

export default ModalButton;
