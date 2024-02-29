import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white dark:bg-gray-800 ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://pm1.aminoapps.com/6679/f1aff75b7d1af3483d60044ef4ebfc1f5295c360_hq.jpg"
              alt="image"
              width={400}
            />
          </div>
          <div
            className="md:7/12 lg:w-6/12 relative sm:bottom-32 fixed-bottom"
          >
            <ul
              className={`items-center  justify-center sm:dark:bg-gray-900 xl:bg-white p-1 text-muted-foreground rounded-[30px] dark:md:bg-secondary w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none`}
            >
              <li>
                <NavLink
                  to="/about/personal"
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-orange-700 text-white" : "to-gray-700"
                    } inline-flex items-center justify-center whitespace-nowrap rounded-full px-10 py-1.5 text-base font-medium transition-all h-[48px] w-[162px] xl:w-auto`
                  }
                >
                  Personal Info
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about/qualification"
                  className={({ isActive }) => ` ${
                    isActive ? "bg-orange-700 text-white" : "to-gray-700"
                  }
                  inline-flex items-center justify-center whitespace-nowrap rounded-full px-10 py-1.5 text-base font-medium transition-all h-[48px] w-[162px] xl:w-auto`}
                >
                  Qualifications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about/skills"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "bg-orange-700 text-white" : "to-gray-700"
                    } inline-flex items-center justify-center whitespace-nowrap rounded-full px-16 py-1.5 text-base font-medium transition-all h-[48px] w-[162px] xl:w-auto`
                  }
                >
                  Skills
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
