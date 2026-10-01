import { createSlice } from "@reduxjs/toolkit";

const profitSlice = createSlice({
  name: "profit",
  initialState: {
    amount: 0,
  },
  reducers: {
    sellPhone: (state) => {
        state.amount += 1000;
    },
    buyPhone: (state) => {
        state.amount -= 800;
    },
  },
});

export const { sellPhone, buyPhone } = profitSlice.actions;
export default profitSlice.reducer;
