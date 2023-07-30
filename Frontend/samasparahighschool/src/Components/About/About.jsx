import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="pt-20">
        <div className="pl-40">
          <Link to={"/"} className="text-blue-500 font-medium text-xl">
            Home
          </Link>
        </div>
        <div className="text-center">
          <p className="text-4xl font-medium">About</p>
        </div>
        <div className="flex justify-center items-center mt-8 mb-8">
          <div className="rounded-lg bg-slate-50 p-6 shadow-2xl shadow-slate-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative rounded-lg h-[270px] w-[370px] bg-[#0073B7] flex justify-center items-center transform hover:scale-105 duration-500">
                <p className="text-white text-3xl">Information</p>
                <div className="absolute inset-0 bg-blue-700 bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-30"></div>
              </div>
              <div className="relative rounded-lg h-[270px] w-[370px] bg-[#00C0EF] flex justify-center items-center transform hover:scale-105 duration-500">
                <p className="text-white text-3xl">Principal's Message</p>
                <div className="absolute inset-0 bg-blue-700 bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-30"></div>
              </div>
              <div className="relative rounded-lg h-[270px] w-[370px] bg-[#F56954] flex justify-center items-center transform hover:scale-105 duration-500">
                <p className="text-white text-3xl">School Committee</p>
                <div className="absolute inset-0 bg-blue-700 bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-30"></div>
              </div>
              <div className="relative rounded-lg h-[270px] w-[370px] bg-[#00A65A] flex justify-center items-center transform hover:scale-105 duration-500">
                <p className="text-white text-3xl">History</p>
                <div className="absolute inset-0 bg-blue-700 bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-30"></div>
              </div>
              <div className="relative rounded-lg h-[270px] w-[370px] bg-[#BA79CB] flex justify-center items-center transform hover:scale-105 duration-500">
                <p className="text-white text-3xl">Career</p>
                <div className="absolute inset-0 bg-blue-700 bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-30"></div>
              </div>
              <div className="relative rounded-lg h-[270px] w-[370px] bg-[#00B29E] flex justify-center items-center transform hover:scale-105 duration-500">
                <p className="text-white text-3xl">Records</p>
                <div className="absolute inset-0 bg-blue-700 bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
