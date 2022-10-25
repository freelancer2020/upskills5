import React, { useState, useEffect } from "react";

//Redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/appStore";
import expenseItemsActions from "../../store/expenseItems";
import expenseModalActions from "../../store/expenseModal";

import { MdOutlineDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import styles from "./expense-item.module.css";

type ExpenseItemProps = {
  itemText: string;
  itemPrice: string;
  id: string;
};

type ExpenseItemData = {
  id: string;
  price: string;
  text: string;
};

const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [itemHovered, setItemHover] = useState<boolean>(false);
  const [priceItem, setPriceItem] = useState<string>("");
  const [textItem, setTextItem] = useState<string>("");

  useEffect(() => {
    setPriceItem(props.itemPrice);
    setTextItem(props.itemText);
  }, [props.itemPrice, props.itemText]);

  const itemTextInputHandler = (e: React.FormEvent<HTMLParagraphElement>) => {
    const value = e.currentTarget.textContent;
    return value ? setTextItem(value) : null;
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

  const updateExpenseItem = (data: ExpenseItemData) => {
    dispatch(expenseModalActions.upDateExpenseItem(data));
  };

  return (
    <tr>
      <td className={styles["table-data"]}>
        <b aria-label={`Price item is ${props.itemPrice}`}> {priceItem}</b>
      </td>
      <td className={styles["table-data"]}>
        <p
          onInput={(e) => itemTextInputHandler(e)}
          aria-label={`Item name is ${props.itemText}`}
        >
          {textItem}
        </p>
      </td>
      <td className={styles["table-data"]}>
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
      </td>
      <td className={styles["table-data"]}>
        <button
          onMouseOver={handleItemHover}
          onMouseOut={handleItemBlur}
          aria-label="update the report item"
          type="button"
          className={styles["expense-item-btn"]}
          onClick={() =>
            updateExpenseItem({
              id: props.id,
              price: props.itemPrice,
              text: props.itemText,
            })
          }
        >
          <GrEdit aria-hidden={true} className={styles["expense-item-edit"]} />
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
