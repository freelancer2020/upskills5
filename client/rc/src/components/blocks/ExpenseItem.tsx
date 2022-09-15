import React, { useState, useRef, useEffect } from "react";
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
  const [itemHovered, setItemHover] = useState<boolean>(false);

  const [priceItem, setPriceItem] = useState<string>("");
  const [textItem, setTextItem] = useState<string>("");

  const textEditRef = useRef<HTMLParagraphElement>(null);
  const priceEditRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setPriceItem(props.itemPrice);
    setTextItem(props.itemText);
  }, [props.itemPrice, props.itemText]);

  const editContent = () => {
    priceEditRef.current?.focus();
  };

  const itemTextInputHandler = (e: React.FormEvent<HTMLParagraphElement>) => {
    const value = e.currentTarget.textContent;
    return value ? setTextItem(value) : null;
  };

  const itemPriceInputHandler = (e: React.FormEvent) => {
    const value = e.currentTarget.textContent;
    return value ? setPriceItem(value) : null;
  };

  const removeItemHandler = (id: string) => {
    dispatch(expenseItemsActions.removeItem(id));
    dispatch(expenseItemsActions.openAlertMsg("Removed"));
  };

  const handleItemHover = () => {
    setItemHover(true);
  };

  const handleItemBlur = () => {
    setItemHover(false);
  };

  return (
    <li
      tabIndex={0}
      className={styles["item-container"]}
      style={{ boxShadow: itemHovered ? "0 0 2px 2px #F0F0F0" : "" }}
    >
      <div className={styles["item-data-container"]}>
        <b
          onInput={(e) => itemPriceInputHandler(e)}
          aria-label={`Price item is ${props.itemPrice}`}
          tabIndex={0}
          ref={priceEditRef}
          className={styles["expense-price"]}
          contentEditable={true}
        >
          {priceItem}
        </b>
        <p
          onInput={(e) => itemTextInputHandler(e)}
          aria-label={`Item name is ${props.itemText}`}
          tabIndex={0}
          ref={textEditRef}
          className={styles["expense-text"]}
          contentEditable={true}
        >
          {textItem}
        </p>
      </div>
      <div className={styles["item-control-container"]}>
        <button
          onMouseOver={handleItemHover}
          onMouseOut={handleItemBlur}
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
          onMouseOver={handleItemHover}
          onMouseOut={handleItemBlur}
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
