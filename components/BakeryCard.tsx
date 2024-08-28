"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bakery } from "types";
import { DollarSign } from "lucide-react";
export default function BakeryCard() {
  const [dataBy, setDataBy] = useState([]);

  const data = async () => {
    const res = await fetch("/bakery/");
    const data = await res.json();
    setDataBy(data);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="home-container">
        <h4 className="text-sm text-cyan-500">Bakery Products</h4>
        <h1>BAST SELLERS</h1>
        <div className="home-bakery">
          {dataBy.map((bakery: Bakery) => (
            <div key={bakery.cakeid} className="">
              <div className="w-full h-[300px]  overflow-hidden bg-slate-100 rounded-md ">
                <Image
                  src={`/images/${bakery.cake_image}`}
                  alt="shop"
                  width={300}
                  height={300}
                  className="w-full h-3/5  object-cover object-center"
                />

                <h4 className="text-sm font-normal   mt-2">
                  {bakery.cake_name}
                </h4>
                <div className="flex text-sm">
                  <DollarSign className="w-4 h-6" />
                  {bakery.slices}
                </div>
                <div className="">
                  <Link href={`/product/${bakery.cakeid}`}>
                    <div className="text-end">
                      <span className="bg-blue-400 text-xl  rounded-xl  ">
                        More
                      </span>
                    </div>
                  </Link>
                </div>
                {/* <div className="flex justify-end px-2 ">
                  <ShoppingBasket className="rounded-full bg-[#faedcd] cursor-pointer hover:bg-orange-500 " />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
