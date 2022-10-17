import React from "react";
import styles from "./contacts.module.css";

const Contacts: React.FC = () => {
  return (
    <div className={styles["contacts-container"]}>
      <div className={styles["contact-text"]}>
        <h2 className={styles["contact-header"]}>
          Are you Looking for an Insurance?
        </h2>
        <h3 id="contact-us-now">
          Contact us to order now
        </h3>
      </div>
      <div className={styles["contact-buttons"]}>
        <button
          aria-describedby="contact-us-now"
          type="button"
          tabIndex={0}
          className={`${styles["btn-contact"]} ${styles["btn-call-us"]}`}
        >
          Call Us
        </button>
        <button
          aria-describedby="contact-us"
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
