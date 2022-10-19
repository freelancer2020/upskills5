import { createSlice } from "@reduxjs/toolkit";

export type ExpenseObj = {
  itemPrice: string;
  itemText: string;
};

export type MetaAlertData = {
  subMsg: string;
  ariaLabelMsg: string;
  forSubmit: boolean;
};

export type ExpenseItems = {
  items: ExpenseObj[];
  isAlertMsg: boolean;
  metaAlertData: MetaAlertData;
};

const initExpenseState: ExpenseItems = {
  items: [],
  isAlertMsg: false,
  metaAlertData: {
    subMsg: "",
    ariaLabelMsg: "",
    forSubmit: false,
  },
};

export const expenseSlice = createSlice({
  name: "Expense List Items",
  initialState: initExpenseState,
  reducers: {
    addItem(state, payload) {
      const item = payload.payload;
      let prevState = [...state.items];
      prevState.push(item);
      state.items = prevState;
    },
    removeItem(state, payload) {
      const id = payload.payload;
      const filterItems = [...state.items].filter(
        (item, index) => index.toString() !== id
      );
      state.items = filterItems;
    },

    upDateItems(state, payload) {
      let updatedItem = payload.payload;
      let arr = state.items;
      arr.forEach((item, index) => {
        if (index.toString() === updatedItem.id) {
          item.itemText = updatedItem.text;
          item.itemPrice = updatedItem.price;
        }
      });
      state.items = [...arr];
    },
    closeAlertMsg(state) {
      state.isAlertMsg = false;
    },
    openAlertMsg(state, payload) {
      const type = payload.payload;
      switch (type) {
        case "Added":
          state.metaAlertData.forSubmit = false;
          state.isAlertMsg = true;
          state.metaAlertData.subMsg = "Your expense item has been added";
          state.metaAlertData.ariaLabelMsg =
            "Your expense item has been added successfully";
          break;
        case "Removed":
          state.metaAlertData.forSubmit = false;
          state.isAlertMsg = true;
          state.metaAlertData.subMsg = "Your expense item has been removed";
          state.metaAlertData.ariaLabelMsg =
            "Your expense item has been removed successfully";
          break;
        case "submit error":
          state.metaAlertData.forSubmit = true;
          state.isAlertMsg = true;
          state.metaAlertData.subMsg = "Please add expense report then submit";
          state.metaAlertData.ariaLabelMsg =
            "Please add expense report then submit";
          break;
        case "updated":
          state.metaAlertData.forSubmit = false;
          state.isAlertMsg = true;
          state.metaAlertData.subMsg = "Your expense item has been updated";
          state.metaAlertData.ariaLabelMsg =
            "Your expense item has been updated successfully";
          break;
        default:
          return state;
      }
    },
  },
});

const expenseItemsActions = expenseSlice.actions;
export default expenseItemsActions;
