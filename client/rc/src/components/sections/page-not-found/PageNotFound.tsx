import React, { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import styles from "./page-not-found.module.css";

const PageNotFound: React.FC = () => {
  const currentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    currentRef.current?.focus();
  }, []);

  const goToHomeAcc = (e: React.KeyboardEvent<HTMLHeadElement>) => {
    return e.key === "Enter" ? navigate("/") : null;
  };
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className={styles["container-4o4"]}>
      <div className={styles["gr-container"]}>
        <h2
          ref={currentRef}
          onKeyDown={(e) => goToHomeAcc(e)}
          className={styles["not-found-msg"]}
          aria-label="We couldn't find this page, press enter to back to the home page"
          role="alert"
          style={{ fontSize: "1.6rem" }}
        >
          We couldn't find this page.
        </h2>
        <button
          onClick={goToHome}
          type="button"
          aria-label="back to home page"
          className={styles["back-home-btn"]}
        >
          Back to home page
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
