"use client";
import { url } from "inspector";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  price: number;
  currency: string;
  image: any;
}

export default function AddToBag({
  name,
  price,
  currency,
  image,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const Product = {
    name: name,
    price: price,
    currency: currency,
    image: image,
    id: "sdddd",
  };

  return (
    <button
      className="bg-[#faedcd] rounded-lg text-black px-2 py-3"
      onClick={() => {
        addItem(Product), handleCartClick;
      }}
    >
      Add To Bag
    </button>
  );
}
