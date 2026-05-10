"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Bakery } from "@/types";
import { ShoppingBag, Star, Heart, Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/slices/cartSlices";
import { useToast } from "@/components/hooks/use-toast";

export default function CakeCategory() {
  const [dataBy, setDataBy] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const data = async () => {
    const res = await fetch("/api/bakery/");
    const fetchedData = await res.json();
    setDataBy(fetchedData);
  };

  useEffect(() => {
    data();
  }, []);

  const dispatch = useDispatch();
  const addToCart = (e: React.MouseEvent, data: Bakery) => {
    e.preventDefault();
    toast({
      title: "Added to Cart",
      description: `${data.cake_name} has been added to your bag.`,
      variant: "success",
    });

    dispatch(addItem(data));
  };

  const filteredCakes = dataBy.filter((bakery: Bakery) =>
    bakery.cake_name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Category Hero Banner */}
      <div className="bg-gradient-to-r from-pink-100 via-rose-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-pink-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold text-rose-600 border border-rose-200 shadow-sm mb-4">
            Our Specialties
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Delicious{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
              Cakes
            </span>
          </h1>
          <p className="text-slate-600 max-w-xl text-lg mb-8">
            Explore our mouthwatering selection of artisan cakes, handcrafted
            with the finest ingredients for your special moments.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 rounded-full border-0 ring-1 ring-inset ring-slate-200 shadow-lg text-slate-900 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 bg-white transition-all hover:shadow-xl"
              placeholder="Search for a cake..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Showing {filteredCakes.length} products
          </h2>
        </div>

        {filteredCakes.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-lg">
              No cakes found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredCakes.map((bakery: Bakery, index: number) => (
              <div
                key={bakery.cakeid}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="group relative w-full h-full bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 duration-300 transition-all cursor-pointer overflow-hidden flex flex-col">
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 z-10">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all duration-300 shadow-sm">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image Container */}
                  <Link
                    href={`/product/${bakery.cakeid}`}
                    className="block relative overflow-hidden rounded-t-3xl aspect-[4/3] w-full"
                  >
                    <div className="absolute inset-0 bg-slate-100 animate-pulse"></div>
                    <Image
                      src={`/images/${bakery.cake_image}`}
                      alt={bakery.cake_name}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  {/* Content Container */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <Link
                        href={`/product/${bakery.cakeid}`}
                        className="hover:underline decoration-rose-500"
                      >
                        <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-rose-600 transition-colors">
                          {bakery.cake_name}
                        </h3>
                      </Link>
                    </div>

                    {/* Rating placeholder */}
                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 text-slate-200" />
                      </div>
                      <span className="text-xs text-slate-500">(12)</span>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-medium">
                          Price
                        </span>
                        <div className="text-xl font-black bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                          ${bakery.slices}
                        </div>
                      </div>
                      <Button
                        onClick={(e) => addToCart(e, bakery)}
                        className="rounded-full w-12 h-12 p-0 bg-slate-900 hover:bg-rose-500 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
