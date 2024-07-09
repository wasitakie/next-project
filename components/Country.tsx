import React from "react";
import Image from "next/image";
type Props = {};

export default function Country({}: Props) {
  return (
    <div className="country">
      <div className="flex-1 pt-36 px-6 sm:px-16">
        <h1 className="conutry-title">
          THE <span className="bg-amber-500 p-2">Bakery</span> SHOP
        </h1>
        <p className="conutry-subtitle">
          Welcome to bakery shop. we have everything in store
        </p>
      </div>
      <div className="contry-container-image">
        <div className="country-image">
          <Image
            src={"/images/bakery.png"}
            alt="bakery"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
}
