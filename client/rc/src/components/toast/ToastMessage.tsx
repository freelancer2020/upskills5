import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/appStore";
import styles from "./toast.module.css";
import { BsFillXCircleFill } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import toastActions from "../../store/claimToast";

const ToastMessage: React.FC = () => {
  const currentRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    currentRef.current?.focus();
  }, []);

  const closeHandler = () => {
    dispatch(toastActions.hasNoError(null));
  };

  const keyboardCloseHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    return e.key === "Enter" ? dispatch(toastActions.hasNoError(null)) : null;
  };

  return (
    <div
      aria-label=" Alert, There are items that require your attention, please make sure you fill out all input fields"
      aria-describedby="toast-msg"
      onKeyDown={(e) => keyboardCloseHandler(e)}
      ref={currentRef}
      tabIndex={1}
      role="alert"
      className={styles["toast-container"]}
    >
      <div className={styles["toast-close-ontainer"]}>
        <BsFillXCircleFill
          tabIndex={1}
          onClick={closeHandler}
          title="close alert message"
          className={styles["toast-close-icon"]}
          fontSize={25}
        />
      </div>
      <div className={styles["toast-body"]}>
        <RiErrorWarningFill
          aria-hidden={true}
          role="presentation"
          fontSize={30}
          className={styles["toast-icon"]}
        />
        <div className={styles["toast-msg"]}>
          <h3 id="toast-msg" className={styles["error-msg"]}>
            There are items that require your attention!
          </h3>
        </div>
      </div>
    </div>
  );
};

const ToastMessageAlert = () => {
  const root = document.getElementById("toast") as HTMLDivElement;
  return ReactDOM.createPortal(<ToastMessage />, root);
};

export default ToastMessageAlert;
