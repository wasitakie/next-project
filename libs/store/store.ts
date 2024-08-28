import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "./slices/counterSlices";
import cartSlice from "./slices/cartSlices";
const store = configureStore({
  reducer: {
    counter: counterSlices,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
