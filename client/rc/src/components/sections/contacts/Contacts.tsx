import React from "react";
import styles from "./contacts.module.css";

const Contacts: React.FC = () => {
  return (
    <div className={styles["contacts-container"]}>
      <div className={styles["contact-text"]}>
        <h2 className={styles["contact-header"]} tabIndex={0}>
          Are you Looking for an Insurance?
        </h2>
        <p tabIndex={0}>Contact us to order now</p>
      </div>
      <div className={styles["contact-buttons"]}>
        <button
          type="button"
          tabIndex={0}
          className={`${styles["btn-contact"]} ${styles["btn-call-us"]}`}
        >
          Call Us
        </button>
        <button
          type="button"
          tabIndex={0}
          className={`${styles["btn-contact"]} ${styles["btn-message"]}`}
        >
          Send a Message
        </button>
      </div>
    </div>
  );
};

export default Contacts;
