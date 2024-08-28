import Image from "next/image";
import { fullBakery } from "types";
import { DollarSign } from "lucide-react";
import { useContext } from "react";
import { useAppDispatch, useAppSelector } from "libs/store/hooks/hooks";
import { addProductToCart } from "libs/store/slices/cartSlices";
import AddToBag from "@/components/AddToBag";

async function getData(id: string) {
  const data = await fetch(process.env.NEXT_URL + `/bakery/${id}`);
  if (data.ok) {
    return data.json();
  }
  return [];
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getData(params.id);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-4 md:grid-cols-1">
        {product.map((comment: fullBakery) => (
          <div key={comment.cakeid} className="grid gap-8 lg:grid-cols-2">
            <div className="">
              <Image
                src={`/images/${comment.cake_image}`}
                alt={comment.cake_name}
                width={200}
                height={200}
                className="w-full h-full object-center object-cover cursor-pointer"
              />
            </div>

            <div className="md:py-8 mb-2 md:mb-3">
              <span className="font-semibold text-2xl">
                {comment.cake_name}
              </span>
              <div className="mb-4 flex items-center gap-1 mt-3">
                <DollarSign className="w-10 h-10" />
                <span className="font-bold text-5xl text-black ">
                  {comment.slices}
                </span>
              </div>
              {/* <div className="mb-4 "> 
                <p className="font-bold text-lg">Quantity</p>
                <input
                  type="number"
                  className="w-5 px-4 py-2 text-black text-sm rounded-lg"
                  value={1}
                />
              </div> */}

              <div className="flex gap-2.5 mt-5">
                <AddToBag
                  currency="USD"
                  name={comment.cake_name}
                  image={`/images/${comment.cake_image}`}
                  price={comment.slices}
                  key={comment.cakeid}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
