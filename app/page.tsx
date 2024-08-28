import Image from "next/image";
import Country from "@/components/Country";
import BakeryCard from "@/components/BakeryCard";

export default function Home() {
  return (
    <>
      <div className=" overflow-hidden bg-[#f6f3da]">
        <Country />
      </div>
      <BakeryCard />
    </>
  );
}
