import React from "react";

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function search() {
  return (
    <>
      <div className="relative flex">
        <select className="bg-white dark:bg-gray-800 h-10 px-5 rounded-full text-sm focus:outline-none outline-none border-2 border-gray-300 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden">
          <option>All Categories</option>
          <option>cake</option>
        </select>
        <Input
          className="bg-gray-50 h-10 flex px-5 py-2  w-full rounded-full text-sm focus:outline-none  border border-gray-300"
          placeholder="Search for more than 20,000 products"
        ></Input>
        <button className="absolute right-0 top-0 mt-2 mr-4">
          <SearchIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </>
  );
}
