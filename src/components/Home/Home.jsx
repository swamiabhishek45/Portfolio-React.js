import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type";

export default function Home() {
  return (
    <div className="mx-auto w-full h-screen  dark:bg-gray-800">
      <aside className="relative md:ml-28 overflow-hidden text-black rounded-lg sm:mx mx-2 sm:py-8 dark:text-white">
        <div className=" z-10 max-w-screen-xl px-4  pb-20  mx-auto sm:px- lg:px-1">
          <div className="max-w-lg sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <img
              className="h-10 invisible md:h-auto md:visible"
              src="https://qph.cf2.quoracdn.net/main-qimg-3998f08372833ead5d352f68c52da902.webp"
              alt="image1"
            />
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-4 h-full ">
          <div className="">
            <h3 className="text-orange-700 text-center sm:flex sm:justify-start text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              <Type />
            </h3>

            <h1 className=" text-5xl sm:text-7xl font-bold mt-4 text-center sm:flex sm:justify-start">
              Hi, my name is
            </h1>
            <h1 className=" text-7xl sm:text-7xl  font-bold my-4 text-center sm:flex sm:justify-start">
              Abhishek Swami
            </h1>

            <p className="subtitle max-w-[490px] md:ml-0 mx-auto xl:max-0 text-center sm:text-start sm:flex sm:justify-start">
              I'm a web designer and front-end developer focused on crafting
              clean & user-friendly experiences, I am passionate about building
              excellent software that improves the lives of those around me.
            </p>

            <div className="flex justify-center sm:justify-start gap-4 mt-8">
              <Link to="/contact">
                <button className="bg-orange-600 text-white cursor-pointer p-4 px-8  outline-none rounded-full hover:bg-orange-700 font-bold">
                  Contact Me
                </button>
              </Link>
              <button className="bg-gray-600 text-white cursor-pointer p-4 px-8  outline-none font-bold rounded-full hover:bg-gray-700 ">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </aside>
      {/* <div className="">
        <h1 className="text-center text-2xl sm:text-5xl  font-medium">
          My Services
        </h1>
        
      </div> */}
    </div>
  );
}

