import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "../Theme Button/ThemeBtn";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0  ">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <h1 className="mr-3 h-12 text-3xl text-orange-700 font-bold">
              Abhishek.
            </h1>
          </Link>
          <span className="cursor-pointer md:hidden flex gap-4 items-center">
            <ThemeBtn />
            <img
              onClick={() => setOpen(!open)}
              src={
                open
                  ? "https://cdn.hugeicons.com/icons/cancel-01-stroke-rounded.svg"
                  : "https://cdn.hugeicons.com/icons/hamburger-02-stroke-rounded.svg"
              }
              alt="hamburger-02"
              name="hamburger"
              width="30"
              height="30"
              className="dark:invert"
            />
          </span>

          <div
            className=" sm:hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
            id="mobile-menu-2 "
          >
            <ul
              className={`flex flex-col md:mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0       md:flex md:item-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-gray-900 dark:text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all md:transition-none duration-500  ease-in ${
                open ? "top-16" : "top-[-490px]"
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "to-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 sm:dark:hover:bg-gray-900 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "to-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 dark:border-gray-600 sm:dark:hover:bg-gray-900 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive ? "text-orange-700" : "to-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50  dark:border-gray-600 sm:dark:hover:bg-gray-900 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  My Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "to-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 dark:border-gray-600 sm:dark:hover:bg-gray-900 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "to-gray-700"
                    } border-b border-gray-100 
                     dark:border-gray-600 sm:dark:hover:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className=" invisible md:visible">
                <ThemeBtn />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
