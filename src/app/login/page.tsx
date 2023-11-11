// this page is temporarily not in use, currently using next-auth default signin page. will switch to this in the future when I add a database

import React from "react";
import Link from "next/link";
import { GitHub, Google } from "@mui/icons-material";

const Login = () => {
  return (
    <div className="min-h-[90vh] bg-[#AFE1AF] flex justify-center items-center">
      <form className="container mx-4 md:mx-auto bg-white w-[700px] h-auto rounded-lg overflow-hidden shadow-lg flex">
        <div className="hidden sm:block w-1/3 relative">
          <div
            className="relative h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/loginRegister.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-500 via-transparent to-emerald-700 opacity-75 flex flex-col justify-center items-end p-2 sm:p-8">
              <div className="text-white text-end text-base sm:text-2xl font-bold mb-2">
                Don't have an account?
              </div>
              <Link href="/register">
                <button className="bg-white text-green-900 py-1 sm:py-2 px-1 rounded-sm text-base">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-2/3 flex flex-col justify-center items-center px-4 py-2">
          <h1 className="text-2xl mb-2 font-medium">Login</h1>
          <div className="flex flex-col w-full border-opacity-50">
            {/* social btns */}
            <div className="flex flex-wrap justify-center gap-3">
              <button className="bg-black text-white p-2 rounded-md shadow-xl hover:scale-110 duration-200 flex items-center gap-2">
                <GitHub /> Sign In With Github
              </button>
              <button className="p-2 rounded-md shadow-xl hover:scale-110 duration-200 flex items-center gap-2">
                <Google /> Sign In With Google
              </button>
            </div>
            <div className="divider">OR</div>
            {/* Username */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="input input-bordered w-full input-sm"
              />
              <label className="label">
                <span className="label-text-alt">Use this username:</span>
                <span className="label-text-alt">Blah</span>
              </label>
            </div>
            {/* Password */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full input-sm"
              />
              <label className="label">
                <span className="label-text-alt">Use this password:</span>
                <span className="label-text-alt">blahpass</span>
              </label>
            </div>

            {/* submit btn */}
            <button className="mt-4 py-2 px-4 bg-emerald-800 text-white rounded-md">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
