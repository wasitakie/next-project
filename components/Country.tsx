import React from "react";
import Image from "next/image";
import Button from "./Button";
type Props = {};

export default function Country({}: Props) {
  // const headScroll = () => {

  // };
  return (
    <div className="country">
      <div className="flex-1 pt-36 px-6 sm:px-16">
        <h1 className="conutry-title">
          THE <span className="text-[#ffafcc] text-extrabold">BAKERY</span> SHOP
        </h1>
        <p className="conutry-subtitle">
          Welcome to bakery shop. we have everything in store
        </p>
        <Button
          title="OUR SHOP"
          buttonStyle="bg-[#faedcd] mt-5 rounded-lg"
          // handleClick={headScroll}
        />
      </div>
      <div className="contry-container-image">
        <div className="country-image">
          <Image
            src={"/images/bg-banner-bakery.png"}
            alt="bakery"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
}
