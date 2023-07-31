import React from "react";

export default function InfoBar() {
  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-8 text-lg font-medium">
        <div className="flex justify-center col-span-2  md:col-span-2 items-center h-16 bg-red-500 text-gray-200 ">
          EIIN: 123035
        </div>
        <div className="flex justify-center items-center col-span-2 md:col-span-2 h-16 bg-[#004EA2] text-gray-200">
          Institution code
        </div>
        <div className="flex justify-center items-center col-span-2 md:col-span-2 h-16 bg-red-500 text-gray-200">
          Center code
        </div>
        <div className="flex justify-center items-center col-span-2 md:col-span-2 h-16 bg-[#004EA2] text-gray-200">
          Estd Year: 1959
        </div>
      </div>
    </>
  );
}
