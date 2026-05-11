import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  cake_id: number;
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
        (item) => item.cake_id === action.payload.cake_id
      );
      if (exitingItems) {
        exitingItems.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const exitingItems = state.items.find(
        (item) => item.cake_id === action.payload.cake_id
      );
      if (exitingItems) {
        state.items = state.items.filter(
          (item) => item.cake_id !== action.payload.cake_id
        );
      }
    },
    incrementQTY: (state, action) => {
      const exitingItems = state.items.find(
        (item) => item.cake_id === action.payload.cake_id
      );
      if (exitingItems) {
        exitingItems.quantity += 1;
      }
    },
    decrementQTY: (state, action: PayloadAction<{ id: number }>) => {
      const exitingItems = state.items.find(
        (item) => item.cake_id === action.payload.id
      );
      if (exitingItems && exitingItems.quantity > 1) {
        exitingItems.quantity -= 1;
        // if (exitingItems.quantity > 1) {

        // } else {
        //   state.items = state.items.filter(
        //     (item) => item.cakeid !== action.payload.id
        //   );
        // }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  decrementQTY,
  removeFromCart,
  clearCart,
  incrementQTY,
} = cartSlice.actions;
export default cartSlice.reducer;
