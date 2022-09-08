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

  const closeHandler = () => {
    dispatch(toastActions.hasNoError());
  };

  useEffect(() => {
    currentRef.current?.focus();
  }, []);
  return (
    <div
      ref={currentRef}
      tabIndex={1}
      role="alert"
      className={styles["toast-container"]}
    >
      <div className={styles["toast-close-ontainer"]}>
        <BsFillXCircleFill
          onClick={closeHandler}
          title="close"
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
          <p className={styles["error-msg"]}>
            There are items that require your attention!
          </p>
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
