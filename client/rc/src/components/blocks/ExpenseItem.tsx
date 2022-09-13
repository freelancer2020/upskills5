import React, { useState, useRef } from "react";
//Redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/appStore";
import expenseItemsActions from "../../store/expenseItems";

import { MdOutlineDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import styles from "./expense-item.module.css";

type ExpenseItemProps = {
  itemText: string;
  itemPrice: string;
  id: string;
};

const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const [editPriceItem, setEditPriceItem] = useState<boolean>(false);
  const [editTextItem, setTextEdited] = useState<boolean>(false);
  const textEditRef = useRef<HTMLParagraphElement>(null);
  const priceEditRef = useRef<HTMLElement>(null);

  const editContent = () => {
    priceEditRef.current?.focus();
    setEditPriceItem((prevState) => !prevState);
    setTextEdited((prevState) => !prevState);
  };

  const removeItemHandler = (id: string) => {
    dispatch(expenseItemsActions.removeItem(id));
  };

  return (
    <li tabIndex={0} className={styles["item-container"]}>
      <div className={styles["item-data-container"]}>
        <b
          aria-label={`Price item is ${props.itemPrice}`}
          tabIndex={0}
          ref={priceEditRef}
          className={styles["expense-price"]}
          contentEditable={true}
        >
          {props.itemPrice}
        </b>
        <p
          aria-label={`Item name is ${props.itemText}`}
          tabIndex={0}
          ref={textEditRef}
          className={styles["expense-text"]}
          contentEditable={true}
        >
          {props.itemText}
        </p>
      </div>
      <div className={styles["item-control-container"]}>
        <button
          onClick={() => removeItemHandler(props.id)}
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
