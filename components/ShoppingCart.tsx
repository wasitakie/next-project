"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ShoppingBag, DollarSign } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { Button } from "./ui/button";
import { Bakery } from "types";

export default function ShoppingCart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className="rounded-xl inline-flex relative ">
            <ShoppingBag className="h-8 w-10" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              {totalQuantity}
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="sm:max-w-lg w-screen">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <div className="h-full flex flex-col justify-between">
            <div className="flex-1 mt-5 overflow-y-auto">
              <div className="mt-8 divide-y">
                {items.length === 0 ? (
                  <div className="flex items-center w-full justify-center">
                    <h1 className="text-2xl items-center mt-8">
                      Your cart is empty
                    </h1>
                  </div>
                ) : (
                  <>
                    <div className="">
                      {items.map((items) => (
                        <div key={items.cakeid} className="flex py-6">
                          <div className="">
                            <Image
                              src={`/images/${items.cake_image}`}
                              alt={items.cake_name}
                              width={100}
                              height={60}
                              className="object-cover"
                            />
                          </div>
                          <div className="text-sm flex flex-col ml-4 flex-1 ">
                            <div className="flex justify-between font-medium text-base">
                              <h3>{items.cake_name}</h3>
                              <div className="flex justify-between">
                                <p className="ml-4">
                                  <DollarSign />
                                  {items.slices}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
