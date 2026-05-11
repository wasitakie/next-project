"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ShoppingBag, DollarSign } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  CartItem,
  decrementQTY,
  incrementQTY,
} from "@/store/slices/cartSlices";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const cartItems = useSelector((state: RootState) => state.cart);
  const totalPrice = items.reduce(
    (total, item) => total + item.slices * item.quantity,
    0,
  );

  const addIncerment = (item: CartItem) => {
    dispatch(incrementQTY(item));
  };
  const disbarment = (id: number) => {
    dispatch(decrementQTY({ id }));
  };

  const totalQuantity = items.reduce((total, item) => total, 0);
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className="group relative mx-2">
            <div className="relative p-2 rounded-full hover:bg-pink-50 transition-all duration-300 cursor-pointer">
              <ShoppingBag className="h-8 w-8 text-gray-600 group-hover:text-pink-600 transition-colors duration-300" />
              <span className="sr-only">Shopping Cart</span>
              {items.length > 0 && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {items.length}
                </div>
              )}
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="sm:max-w-lg w-screen bg-gradient-to-b from-white to-pink-50">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 text-pink-600" />
              Your Cart
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-2 py-1 rounded-full text-sm">
                {items.length} items
              </span>
            </SheetTitle>
            <SheetDescription className="text-gray-600">
              Review your delicious selections
            </SheetDescription>
          </SheetHeader>
          <div className="h-full flex flex-col justify-between">
            <div className="flex-1 mt-5 overflow-y-auto">
              <div className="mt-8 divide-y">
                {items.length === 0 ? (
                  <div className="flex items-center w-full justify-center flex-col py-12">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full blur-3xl opacity-50"></div>
                      <Image
                        src={`/images/emptycart.png`}
                        alt="emptyProduct"
                        width={200}
                        height={200}
                        className="relative mx-auto object-cover animate-float"
                      />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mt-8 mb-2">
                      Your cart is empty
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                      Add some delicious treats to get started!
                    </p>
                    <Link href="/">
                      <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600">
                        Start Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div
                          key={item.cakeid}
                          className="flex bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="relative">
                            <Image
                              src={`/images/${item.cake_image}`}
                              alt={item.cake_name}
                              width={100}
                              height={60}
                              className="object-cover rounded-lg"
                            />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                              {item.quantity}
                            </div>
                          </div>
                          <div className="flex flex-col ml-4 flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-semibold text-gray-800">
                                {item.cake_name}
                              </h3>
                              <div className="flex items-center text-lg font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                                <DollarSign
                                  size={20}
                                  className="text-pink-600"
                                />
                                {(item.slices * item.quantity).toFixed(2)}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => disbarment(item.cakeid)}
                                className="hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 transition-all duration-300"
                              >
                                -
                              </Button>
                              <div className="w-12 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-semibold text-gray-800">
                                {item.quantity}
                              </div>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => addIncerment(item)}
                                className="hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 transition-all duration-300"
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-gray-800">
                          Total:
                        </span>
                        <div className="flex items-center text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                          <DollarSign size={24} className="text-pink-600" />
                          {totalPrice.toFixed(2)}
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex justify-between text-base text-balance text-gray-900 mt-5 ">
                      <p className="text-xl mt-2">Total:</p>
                      <p className="font-bold text-xl mt-2">{totalPrice}</p>
                    </div> */}

                    <Link href="/cart">
                      <SheetClose>
                        <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                          View Cart & Checkout
                        </Button>
                      </SheetClose>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
