"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import ShoppingCart from "@/components/ShoppingCart";
import { RootState } from "store/store";
const links = [
  { name: "Cake", href: "/cake" },
  { name: "Bakery", href: "/" },
  { name: "About us", href: "/aboutUs" },
  { name: "Contact", href: "/contact" },
];

export default function Navber() {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <header className="w-full absolute z-10">
      <div className="mx-auto max-w-[1440px] flex justify-between items-center px-2 sm:px-3 bg-transparent">
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <nav className="lg:flex hidden 2xl:ml-16">
          {links.map((link, id) => (
            <div key={id}>
              <Link
                href={link.href}
                className="text-lg font-semibold text-black mx-5"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex">
          <Link href="/signIn">
            <div className="mx-5">signin</div>
          </Link>
          <div className="">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
}
