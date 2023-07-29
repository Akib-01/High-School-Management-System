import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../Assets/logo.png";
import { HeaderData } from "./HeaderData";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-20  p-0 m-0 sticky top-0 z-[999999] bg-sky-900 font-Roboto">
        <div className=" ">
          <div className="h-16 w-20 rounded-full shadow-md absolute top-2  bg-white transform hover:scale-105 duration-500 ">
            <Link to="/">
              <div className="md:flex items-center justify-between">
                <img
                  src={Logo}
                  alt="School logo"
                  className="h-16 w-32 rounded-full "
                />
              </div>
              <div className="absolute top-2 left-24 h-16 w-24 ">
                <p className="text-white font-semibold">
                  Samas Para High School
                </p>
              </div>
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={` absolute md:flex  text-white md:justify-end md:pr-8 md:static md:z-auto bg-sky-900  w-full  pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-560px]"
            }`}
          >
            {HeaderData.map((item, index) => {
              return (
                <div key={index} className="md:block md:relative md:top-6">
                  <li
                    key={index}
                    className="md:ml-8 md:flex md:items-end hover:text-slate-400 transform hover:scale-105 duration-500 text-xl md:my-0 my-7"
                    onClick={() => setOpen(!open)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <Outlet />;
    </>
  );
}
