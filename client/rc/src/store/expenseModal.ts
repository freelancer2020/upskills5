import { createSlice } from "@reduxjs/toolkit";

type ExpenseModal = {
  modalIsOpen: boolean;
};

const initModalState: ExpenseModal = {
  modalIsOpen: false,
};

export const expenseModalSlice = createSlice({
  name: "Expense Modal",
  initialState: initModalState,
  reducers: {
    openModal(state) {
      state.modalIsOpen = true;
    },
    closeModal(state) {
      state.modalIsOpen = false;
    },
  },
});

const expenseModalActions = expenseModalSlice.actions;
export default expenseModalActions;
