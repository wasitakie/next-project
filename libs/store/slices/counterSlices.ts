import { createSlice } from "@reduxjs/toolkit";

interface counterSlices {
  value: number;
}

const initialState: counterSlices = {
  value: 0,
};

const counterSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlices.actions;

export default counterSlices.reducer;
