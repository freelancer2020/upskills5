import React, { useState, useRef } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import styles from "./expense-item.module.css";

type ExpenseItemProps = {
  itemText: string;
  itemPrice: string;
};

const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
  const [editPriceItem, setEditPriceItem] = useState<boolean>(false);
  const [editTextItem, setTextEdited] = useState<boolean>(false);
  const textEditRef = useRef<HTMLParagraphElement>(null);
  const priceEditRef = useRef<HTMLElement>(null);

  const editContent = () => {
    setEditPriceItem(true);
    setTextEdited(true);
    priceEditRef.current?.focus();
  };

  return (
    <li tabIndex={0} className={styles["item-container"]}>
      <div className={styles["item-data-container"]}>
        <b
          tabIndex={0}
          ref={priceEditRef}
          className={styles["expense-price"]}
          contentEditable={editPriceItem}
        >
          {props.itemPrice}
        </b>
        <p
          tabIndex={0}
          ref={textEditRef}
          className={styles["expense-text"]}
          contentEditable={editTextItem}
        >
          {props.itemText}
        </p>
      </div>
      <div className={styles["item-control-container"]}>
        <button
          aria-label="Delete the report item"
          type="button"
          className={styles["expense-item-btn"]}
        >
          <MdOutlineDelete
            aria-hidden={true}
            className={styles["expense-item-del"]}
          />
        </button>
        <button
          onClick={editContent}
          aria-label="Edit the report item"
          type="button"
          className={styles["expense-item-btn"]}
        >
          <GrEdit aria-hidden={true} className={styles["expense-item-edit"]} />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
