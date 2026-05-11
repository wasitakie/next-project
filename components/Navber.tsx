"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import ShoppingCart from "@/components/ShoppingCart";
import { RootState } from "@/store/store";
import { Button } from "./ui/button";
import { useSession, signOut } from "next-auth/react";
import {
  User2Icon,
  Menu,
  X,
  Settings,
  LogOut,
  Heart,
  SearchCheckIcon,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Search from "./Search";
import { Input } from "./ui/input";

const links = [
  { name: "Cake", href: "/product/cake/" },
  { name: "Bakery", href: "/" },
  { name: "About us", href: "/aboutUs" },
  { name: "Contact", href: "/contact" },
];
(" ");

export default function Navber() {
  const [dropdown, setDropdown] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const { data: session } = useSession();
  //console.log(session);

  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="mx-auto max-w-7xl">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 rounded-2xl shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center p-4 bg-transparent">
          <Link href={"/"} className="group">
            <Image
              alt="logo"
              src={"/logo.png"}
              width={128}
              height={28}
              className="transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <div className="hidden md:block md:w-2/5">
            <Search />
          </div>
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <Button
                variant={"ghost"}
                className="inline-flex justify-center items-center hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
                onClick={() => setIsClick(!isClick)}
              >
                {isClick ? (
                  <X className="h-8 w-8 animate-pulse" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </Button>
            </div>

            <div className="">
              {session ? (
                <div className="relative rounded-full h-10 w-10">
                  <Avatar
                    onClick={() => {
                      setDropdown(!dropdown);
                    }}
                    className="cursor-pointer hover:ring-2 hover:ring-pink-500 transition-all duration-300"
                  >
                    <AvatarImage src={session.user?.image || ""} />
                    <AvatarFallback className="bg-gradient-to-r from-pink-500 to-orange-500 text-white">
                      {session.user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>

                  {dropdown && (
                    <div className="w-48 overflow-hidden bg-white rounded-xl shadow-xl border border-gray-100 absolute top-12 right-3 animate-fade-in">
                      <ul className="py-2">
                        <li className="px-4 py-3 text-sm font-medium flex items-center space-x-3 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 cursor-pointer">
                          <Settings className="w-4 h-4" />
                          <span>Settings</span>
                        </li>

                        <li
                          className="px-4 py-3 text-sm font-medium flex items-center space-x-3 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 cursor-pointer"
                          onClick={() => {
                            signOut();
                          }}
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/signin" className="group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <User2Icon className="h-5 w-5" />
                  </div>
                </Link>
              )}
            </div>
            <div className="relative">
              <ShoppingCart />
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center space-x-8 py-4 border-t border-gray-100">
          {links.map((link, id) => (
            <Link
              href={link.href}
              key={id}
              className="text-lg font-medium text-gray-600 hover:text-pink-600 relative group transition-colors duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
        {isClick && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 rounded-b-2xl shadow-xl animate-fade-in">
            <div className="px-4 pt-4 pb-3 space-y-3">
              {links.map((link, id) => (
                <Link
                  href={link.href}
                  key={id}
                  className="text-lg font-medium text-gray-600 hover:text-pink-600 block py-2 px-4 rounded-lg hover:bg-pink-50 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
