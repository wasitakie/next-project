"use client";

import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Image from "next/image";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  addItem,
  CartItem,
  clearCart,
  decrementQTY,
  incrementQTY,
} from "@/store/slices/cartSlices";
import { DollarSign } from "lucide-react";
import { Bakery } from "@/types";
import { Input } from "@/components/ui/input";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.slices * item.quantity,
    0,
  );
  // vat thailand 7% and america 15%
  const vatAmerica = +totalPrice * 0.15;
  const vatThai = +totalPrice * 0.7;

  // totalPrice with vat
  const totalPriceWithVat = totalPrice + vatAmerica;

  const { data: session } = useSession();

  const addIncerment = (item: CartItem) => {
    dispatch(incrementQTY(item));
  };
  const disbarment = (id: number) => {
    dispatch(decrementQTY({ id }));
  };
  const removeAllCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="mt-8 min-h-[70vh]">
        {items.length === 0 ? (
          <>
            <div className="flex items-center w-full h-[80vh] justify-center flex-col">
              <Image
                src={`/images/emptycart.png`}
                alt="emptyProduct"
                width={400}
                height={400}
                className="object-cover mx-auto"
              />
              <h1 className="md:text-xl text-2xl items-center mt-8">
                Your cart is empty
              </h1>
              <Link href="/">
                <Button className="mt-8" size={"lg"}>
                  Shopping Now
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="mx-auto mt-5 md:w-4/5 w-[95%] grid xl:grid-cols-10 gap-12 grid-cols-1">
            <div className="xl:col-span-5">
              <div className="flex justify-end mt-2">
                <Button
                  variant={"destructive"}
                  size={"sm"}
                  onClick={() => {
                    removeAllCart();
                  }}
                >
                  Clear All Cart
                </Button>
              </div>
              {items.map((item) => (
                <div
                  className="flex pb-6 mt-5 space-x-10 items-center p-5 border rounded-xl  border-gray-200"
                  key={item.cake_id}
                >
                  <Image
                    src={`/images/${item.cake_image}`}
                    alt="product"
                    width={180}
                    height={180}
                  />
                  <div className="">
                    <h1 className="md:text-xl  text-base font-bold  text-black">
                      {item.cake_name}
                    </h1>
                    <div className="flex mt-2 ">
                      <DollarSign size={25} />
                      <h1 className="md:text-lg text-sm text-balance  ">
                        {(item.slices * item.quantity).toFixed(2)}
                      </h1>
                    </div>
                    <div className="flex">
                      <Button
                        onClick={() => {
                          disbarment(item.cake_id);
                        }}
                      >
                        -
                      </Button>
                      <Input
                        className="text-sm w-10 text-center"
                        value={item.quantity}
                        disabled
                      />
                      <Button onClick={() => addIncerment(item)}>+</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="xl:col-span-5">
              <div className="top-[20vh] sticky p-6 rounded-md bg-white text-black border-y-8 border-blue-300 ">
                <h1 className="text-2xl mt-8 mb-8 text-center  font-semibold">
                  Order Summary
                </h1>
                <div className="p-10">
                  <div className="flex justify-between gap-4 text-2xl mb-2">
                    <span className="text-base">Total</span>
                    <span className=" font-bold">{totalPrice}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-2xl mb-2">
                    <span className="text-base">VAT</span>
                    <span className=" font-bold">{vatAmerica}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-2xl mb-2 border-b-2 ">
                    <span className="text-base">Shopping</span>
                    <span className=" font-bold">Free</span>
                  </div>
                  <div className="flex justify-between gap-4 text-2xl mb-2 pt-5 ">
                    <span className="text-balance ">ToTal Amount</span>
                    <span className=" font-bold">{totalPriceWithVat}</span>
                  </div>
                  {!session?.user ? (
                    <Link href="/signin">
                      <Button className="w-full bg-orange-500 p-2">
                        SigIn to checkout
                      </Button>
                    </Link>
                  ) : (
                    <div className="pt-5">
                      <Button className="w-full">Check Out</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
