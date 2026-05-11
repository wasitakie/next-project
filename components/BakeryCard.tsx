"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bakery } from "@/types";
import { ArrowRight, Heart, ShoppingBag, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/store/slices/cartSlices";
import { useToast } from "@/components/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { data } from "@/libs/data/product";
export default function BakeryCard() {
  const { data: session } = useSession();
  const [dataBy, setDataBy] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const { toast } = useToast();
  // const data = async () => {
  //   const res = await fetch("/api/bakery/");
  //   const data = await res.json();
  //   setDataBy(data);
  //   setIsLike(data);
  //   //console.log(data);
  // };

  // useEffect(() => {
  //   data();
  // }, []);

  // const dispatch = useDispatch();
  // const addToCart = (data: Bakery) => {
  //   toast({
  //     title: "Item Added to Cart",
  //     variant: "success",
  //   });

  //   dispatch(addItem(data));
  // };

  return (
    <div className="py-5">
      <div className="w-full font-extrabold">
        <div className="flex justify-between items-center my-5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></div>
            <h3 className="text-3xl bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Trending Products
            </h3>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <a
              href="/product/cake"
              className="text-xl text-gray-500 group-hover:text-pink-600 transition-colors duration-300"
            >
              View All Categories
            </a>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-pink-600 group-hover:translate-x-2 transition-all duration-300" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-4 mt-16 sm:grid-cols-2 xl:gap-x-8">
          {data.map((bakery, index) => (
            <div
              key={bakery.cake_id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group relative w-full h-full bg-white border border-gray-200 rounded-[24px] shadow-lg px-4 py-5 hover:shadow-2xl hover:scale-105 duration-300 transition-all cursor-pointer overflow-hidden">
                <div className="absolute top-3 right-3 z-10">
                  <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-50 hover:text-pink-600">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </div>
                </div>
                <Link href={`/product/${bakery.cake_id}`}>
                  <div className="relative overflow-hidden rounded-[16px]">
                    <Image
                      src={`/images/${bakery.cake_image || "/images/bakery.png"}`}
                      alt={bakery.cake_name || "bakery"}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover object-center bg-gray-100 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                    {bakery.cake_name}
                  </h3>
                  <p className="text-slate-600 font-medium text-sm">
                    {bakery.cake_category_name}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                        ${bakery.slices}
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm text-gray-600">4.8</span>
                      </div>
                    </div>
                    <button className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
