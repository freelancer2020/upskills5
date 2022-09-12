import { createSlice } from "@reduxjs/toolkit";

export type ExpenseObj = {
  itemPrice: string;
  itemText: string;
};

export type ExpenseItems = {
  items: ExpenseObj[];
};

const initExpenseState: ExpenseItems = {
  items: [],
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
  },
});

const expenseItemsActions = expenseSlice.actions;
export default expenseItemsActions;
