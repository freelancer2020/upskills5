import { createSlice } from "@reduxjs/toolkit";
export type InitModalData = {
  id: string;
  price: string;
  text: string;
};

type ExpenseModal = {
  modalIsOpen: boolean;
  modalData: InitModalData;
};

const initModalState: ExpenseModal = {
  modalIsOpen: false,
  modalData: {
    id: "",
    price: "",
    text: "",
  },
};

export const expenseModalSlice = createSlice({
  name: "Expense Modal",
  initialState: initModalState,
  reducers: {
    openModal(state) {
      state.modalIsOpen = true;
      state.modalData = {
        id: "",
        price: "",
        text: "",
      };
    },
    closeModal(state) {
      state.modalIsOpen = false;
      state.modalData = {
        id: "",
        price: "",
        text: "",
      };
    },
    upDateExpenseItem(state, payload) {
      const data = payload.payload;
      state.modalData = data;
      state.modalIsOpen = true;
    },
    writeExpenseName(state, payload) {
      let value = payload.payload;
      state.modalData.text = value;
    },
    writeExpensePrice(state, payload) {
      let value = payload.payload;
      state.modalData.price = value;
    },
  },
});

const expenseModalActions = expenseModalSlice.actions;
export default expenseModalActions;
