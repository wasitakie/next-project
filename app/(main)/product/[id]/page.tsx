import Image from "next/image";
import { fullBakery } from "types";
import { DollarSign } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "store/slices/cartSlices";
import AddToBag from "@/components/AddToBag";

async function getData(id: string) {
  const res = await fetch("http://localhost:3000/bakery/" + id, {
    next: { revalidate: 10 },
  });
  return res.json();
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
        {product.map((data: fullBakery) => (
          <div className="grid gap-8 lg:grid-cols-2" key={data.cakeid}>
            <div className="">
              <Image
                src={`/images/${data.cake_image}`}
                alt={data.cake_name}
                width={200}
                height={200}
                className="w-full h-full object-center object-cover cursor-pointer"
                priority={true}
              />
            </div>

            <div className="md:py-8 mb-2 md:mb-3">
              <span className="font-semibold text-2xl">{data.cake_name}</span>
              <div className="mb-4 flex items-center gap-1 mt-3">
                <DollarSign className="w-10 h-10" />
                <span className="font-bold text-5xl text-black ">
                  {data.slices}
                </span>
              </div>
              <div className="mt-2 text-lg">{data.cake_description}</div>
              {/* <div className="mb-4 "> 
                <p className="font-bold text-lg">Quantity</p>
                <input
                  type="number"
                  className="w-5 px-4 py-2 text-black text-sm rounded-lg"
                  value={1}
                />
              </div> */}

              <div className="flex gap-2.5 mt-5">
                <AddToBag product={data} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
