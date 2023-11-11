import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-[90vh] bg-[#AFE1AF] flex justify-center items-center">
      <form className="container mx-4 md:mx-auto bg-white w-[700px] h-96 rounded-lg overflow-hidden shadow-lg flex">
        <div className="w-1/3 relative">
          <div
            className="relative h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/loginRegister.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-500 via-transparent to-emerald-700 opacity-75 flex flex-col justify-center items-end p-2 sm:p-8">
              <div className="text-white text-base sm:text-2xl font-bold text-end mb-2">
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

        <div className="sm:w-2/3 flex flex-col justify-center items-start px-4 py-2">
          <h1 className="text-2xl">Log In</h1>
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
          </div>

          {/* submit btn */}
          <button className="mt-4 py-2 px-4 bg-emerald-800 text-white rounded-md">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
