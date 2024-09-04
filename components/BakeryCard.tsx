"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Bakery } from "types";
import { DollarSign, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "store/slices/cartSlices";
import { RootState } from "store/store";
export default function BakeryCard() {
  const [dataBy, setDataBy] = useState([]);

  const data = async () => {
    const res = await fetch("/bakery/");
    const data = await res.json();
    setDataBy(data);
    //console.log(data);
  };

  useEffect(() => {
    data();
  }, []);

  const dispatch = useDispatch();
  const addToCart = (data: Bakery) => {
    dispatch(addItem(data));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="home-container">
        <h4 className="text-sm text-cyan-500">Bakery Products</h4>
        <h1>BAST SELLERS</h1>
        <div className="home-bakery">
          {dataBy.map((bakery: Bakery) => (
            <div key={bakery.cakeid} className="">
              <div className="w-full h-[300px]  overflow-hidden bg-slate-100 rounded-md ">
                <Link href={`/product/${bakery.cakeid}`}>
                  <Image
                    src={`/images/${bakery.cake_image}`}
                    alt="shop"
                    width={300}
                    height={300}
                    className="w-full h-3/5  object-cover object-center"
                  />
                </Link>
                <h4 className="text-sm font-normal   mt-2">
                  {bakery.cake_name}
                </h4>
                <div className="flex text-sm">
                  <DollarSign className="w-4 h-6" />
                  {bakery.slices}
                </div>
                <div className="px-2 text-end">
                  <Button onClick={() => addToCart(bakery)}>
                    <ShoppingBag size={16} cursor={"pointer"} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
