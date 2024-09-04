import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  cakeid: number;
  cake_name: string;
  cake_description: string;
  cake_image: any;
  slices: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const exitingItems = state.items.find(
        (item) => item.cakeid === action.payload.cakeid
      );
      if (exitingItems) {
        exitingItems.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const exitingItems = state.items.find(
        (item) => item.cakeid === action.payload.id
      );
      if (exitingItems) {
        if (exitingItems.quantity > 1) {
          exitingItems.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.cakeid !== action.payload.id
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
