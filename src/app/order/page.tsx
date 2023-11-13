import React from "react";
import { WarningAmber } from "@mui/icons-material";
import Link from "next/link";

const Order = () => {
  return (
    <div className="flex justify-center items-center max-w-[1400px] mx-auto min-h-[90vh] my-2.5">
      <div className="shadow-xl w-[30rem] h-96 rounded-md flex flex-col justify-center items-center gap-y-4 text-center">
        <WarningAmber className="text-amber-500" style={{ fontSize: "3rem" }} />
        <h1 className="font-extrabold text-xl">Order Page in Development!</h1>
        <p className="text-sm">
          This feature is part of the next application update.
        </p>
        <p className="text-sm font-semibold">
          Star this repo to keep track of progress!
        </p>
        <p className="font-semibold mt-2">
          <span className="text-green-700">Woodside</span> Bazaar
        </p>

        <hr />

        <Link href={"/"}>
          <button className="text-base font-semibold bg-amber-600 hover:bg-amber-700 duration-200 text-white py-1 px-2 rounded-sm mt-2">
            Head back to Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
