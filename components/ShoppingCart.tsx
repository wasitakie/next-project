"use client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function shoppingCart() {
  const { cartCount, shouldDisplayCart, handleCartClick } = useShoppingCart();
  return (
    <div
      className={`w-full  ${shouldDisplayCart ? "opacity-100" : "opacity-0"}`}
      onChange={handleCartClick}
    >
      <h1>Shopping Cart</h1>
      <div className="h-full flex flex-col justify-between">
        <div className="mt-8 flex-1 ">
          <ul>
            {cartCount === 0 ? (
              <li>No items in the cart</li>
            ) : (
              <li>
                <h1>you have cart</h1>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
