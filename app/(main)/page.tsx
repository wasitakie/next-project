import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  Truck,
  CircleDollarSign,
  Headset,
  Sparkles,
  Star,
  Cake,
  Croissant,
  Cookie,
  Coffee,
} from "lucide-react";
import BakeryCard from "@/components/BakeryCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl pt-6 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-100 via-white to-amber-100 shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-200/30 to-amber-200/30 animate-pulse"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-rose-200 text-rose-600 font-semibold shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>Freshly Baked Every Morning</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Sweeten Your <br />
                <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                  Everyday Life
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg">
                Discover our artisanal collection of handcrafted pastries,
                cakes, and breads. Made with love, delivered with care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="px-8 py-6 text-lg bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Order Now
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-full border-2 border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
                >
                  View Menu
                </Button>
              </div>
            </div>

            <div className="relative z-10 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-300 to-amber-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <Image
                src={"/images/bg-banner-bakery.png"}
                alt="Delicious Bakery Items"
                width={800}
                height={800}
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Shop by Category
            </h2>
            <p className="text-slate-500 mt-2">
              Find exactly what you're craving
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Cakes", icon: Cake, color: "bg-pink-100 text-pink-600" },
            {
              name: "Pastries",
              icon: Croissant,
              color: "bg-amber-100 text-amber-600",
            },
            {
              name: "Cookies",
              icon: Cookie,
              color: "bg-orange-100 text-orange-600",
            },
            {
              name: "Beverages",
              icon: Coffee,
              color: "bg-stone-100 text-stone-600",
            },
          ].map((category, index) => (
            <Link href={`/category/${category.name.toLowerCase()}`} key={index}>
              <div className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-4 hover:-translate-y-1">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <BakeryCard />
      </section>

      {/* Promotional Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>

          <div className="relative z-10 max-w-xl text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get 20% Off Your First Order
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join our newsletter and receive a delicious discount on your next
              purchase of artisan pastries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full w-full sm:w-auto flex-1 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <Button className="px-8 py-4 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-lg transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mb-16">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              {
                title: "Free Delivery",
                desc: "For orders over $50",
                icon: Truck,
              },
              {
                title: "Fresh Daily",
                desc: "Baked every morning",
                icon: Sparkles,
              },
              {
                title: "Secure Payment",
                desc: "100% secure checkout",
                icon: CircleDollarSign,
              },
              {
                title: "24/7 Support",
                desc: "Always here for you",
                icon: Headset,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4 pt-6 md:pt-0"
              >
                <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
