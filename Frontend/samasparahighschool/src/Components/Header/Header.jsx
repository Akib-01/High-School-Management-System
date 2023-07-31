import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../Assets/logo.png";
import { HeaderData } from "./HeaderData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (index) => {
    setShowSubMenu((prevState) => (prevState === index ? null : index));
  };

  return (
    <>
      <div className="h-20 p-0 m-0 sticky top-0 z-[999999] bg-[#004EA2] font-Roboto">
        <div className="md:pl-[100px] ">
          <div className="h-16 w-20 rounded-full shadow-md absolute top-2 bg-white transform hover:scale-105 duration-500 ">
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
            className={`absolute md:flex text-white md:justify-end md:pr-16 md:static md:z-auto bg-[#004EA2] w-full pl-9 transition-all duration-500 ease-in ${
              showSubMenu !== null ? "top-20 " : "top-[-560px]"
            }`}
          >
            {HeaderData.map((item, index) => {
              return (
                <div
                  ref={menuRef}
                  key={index}
                  onMouseEnter={() => toggleMenu(index)}
                  onMouseLeave={() => toggleMenu(index)}
                  className="md:block hover:bg-[#224077] hover:scale-105 transition-all duration-500 ease-in md:px-4 md:py-6 cursor-pointer"
                >
                  {/* If the menu has a sub-menu, render it as a dropdown */}
                  {item.subMenu ? (
                    <div>
                      <div className="md:flex md:items-end text-xl">
                        <Link to={item.path}>{item.title}</Link>
                        {/* Render the sub-menu */}
                        {showSubMenu === index && (
                          <ul className="absolute top-[76px] left-0 bg-slate-100 w-44 text-black ">
                            {item.subMenu.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className="p-1 text-[15px] hover:bg-slate-300 hover:text-blue-600"
                              >
                                <Link to={subItem.path}>{subItem.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ) : (
                    // If it doesn't have a sub-menu, render as a regular menu item
                    <li key={index} className="md:flex md:items-end text-xl">
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
