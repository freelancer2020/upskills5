import { createSlice } from "@reduxjs/toolkit";

export type ExpenseObj = {
  itemPrice: string;
  itemText: string;
};

export type MetaAlertData = {
  subMsg: string;
  ariaLabelMsg: string;
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
    closeAlertMsg(state) {
      state.isAlertMsg = false;
    },
    openAlertMsg(state, payload) {
      const type = payload.payload;
      switch (type) {
        case "Added":
          state.isAlertMsg = true;
          state.metaAlertData.subMsg = "Your expense item has been added";
          state.metaAlertData.ariaLabelMsg =
            "Your expense item has been added successfully";
          break;
        case "Removed":
          state.isAlertMsg = true;
          state.metaAlertData.subMsg = "Your expense item has been removed";
          state.metaAlertData.ariaLabelMsg =
            "Your expense item has been removed successfully";
          break;
        default:
          return state;
      }
    },
  },
});

const expenseItemsActions = expenseSlice.actions;
export default expenseItemsActions;
