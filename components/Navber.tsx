"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/navigation";

const links = [
  { name: "Cake", href: "/cake" },
  { name: "Bakery", href: "/" },
  { name: "About us", href: "/aboutUs" },
  { name: "Contact", href: "/contact" },
];

export default function Navber() {
  const { cartCount, handleCartClick } = useShoppingCart();
  const router = useRouter;
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

          <button
            className="rounded-xl inline-flex relative "
            onClick={() => handleCartClick()}
          >
            <ShoppingBag className="h-8 w-10" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-200 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              {cartCount}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
