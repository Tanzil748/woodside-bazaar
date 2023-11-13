import React from "react";
import { CheckBox } from "@mui/icons-material";
import Link from "next/link";

const Success = () => {
  return (
    <div className="flex justify-center items-center max-w-[1400px] mx-auto min-h-[90vh] my-2.5">
      <div className="shadow-xl w-[30rem] h-96 rounded-md flex flex-col justify-center items-center gap-y-4 text-center">
        <CheckBox className="text-green-800" style={{ fontSize: "3rem" }} />
        <h1 className="font-extrabold text-xl">Thank you for your order!</h1>
        <p className="text-sm">
          Your order should ship out in 2-5 business days.
        </p>
        <p className="text-sm font-semibold">
          If you have any questions feel free to contact us.
        </p>
        <p className="font-semibold mt-2">
          <span className="text-green-700">Woodside</span> Bazaar
        </p>

        <hr />

        <div className="flex items-end gap-2">
          <Link href={"/order"}>
            <button className="text-base font-semibold bg-green-700 hover:bg-green-800 duration-200 text-white py-1 px-2 rounded-sm mt-2">
              View Your Orders
            </button>
          </Link>
          <Link href={"/"}>
            <button className="text-sm underline py-1 px-2 text-green-700 duration-200 hover:text-green-800 mt-2">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
