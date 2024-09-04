"use client";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { fullBakery } from "types";
import { addItem, CartItem } from "store/slices/cartSlices";
export default function AddToBag({ product }: { product: fullBakery }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <>
      <Button
        className="bg-[#faedcd] rounded-lg text-black px-2 py-3"
        onClick={() => {
          addToCart();
        }}
      >
        Add To Bag
      </Button>
    </>
  );
}
