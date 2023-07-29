import React from "react";
import logo from "./Assets/logo.png";

export default function Body() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl space-y-2 md:flex md:items-center md:py-4 md:space-y-0 md:space-x-6">
        <img
          className="h-24 mx-auto rounded-full ring-8 ring-purple-400 transform hover:scale-105 duration-500 md:mx-0 md:flex-shrink-0"
          src={logo}
          alt="logo"
        />
        <div className="text-center space-y-2 md:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Samaspara High School
            </p>
          </div>
          <button className="btn btn-purple">visit now</button>
          <button className="btn btn-green ml-1">Website</button>
        </div>
      </div>
    </div>
  );
}
