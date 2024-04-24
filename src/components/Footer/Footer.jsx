import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="dark:bg-gray-900 border-t-2 dark:border-0">
            <div className="container p-5">
                <div className="sm:flex items-center justify-between md:gap-8">
                    <div className="w-full sm:w-1/2">
                        <h2 className="text-[26px] leading-10 dark:text-white text-black font-[600] mb-5 md:text-[2rem]">
                            Do you want to make beautiful products?
                        </h2>
                        <a href="mailto:abhishekswami1435@gmail.com">
                            <button className="button-42">
                                Hire Me <i class="ri-mail-send-line"></i>
                            </button>
                        </a>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <p className="dark:text-gray-300 text-gray-500 leading-7 mt-4 sm:mt-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam ut iusto, enim obcaecati eaque officia
                            culpa tempore ex repellendus? Maiores exercitationem
                            in magnam, rem hic qui ratione dolor debitis
                            doloribus.
                        </p>
                        <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                            <span className="dark:text-gray-300 font-[600] text-[15px]">
                                Follow Me:{" "}
                            </span>

                            <span
                                className="w-[35px] h-[35px] 
                                bg-[#fd5e2b] p-1 rounded-[50px] cursor-pointer text-center"
                            >
                                <a
                                    href="https://github.com/swamiabhishek45"
                                    target="_blank"
                                    className="text-white font-[500] text-[18px]"
                                >
                                    <i class="ri-github-line"></i>
                                </a>
                            </span>
                            <span className="w-[35px] h-[35px] bg-[#fd5e2b] p-1 rounded-[50px] cursor-pointer text-center">
                                <a
                                    href="https://twitter.com/swamiabhishek45"
                                    target="_blank"
                                    className="text-white font-[500] text-[18px]"
                                >
                                    <i class="ri-twitter-x-line"></i>
                                </a>
                            </span>
                            <span className="w-[35px] h-[35px] bg-[#fd5e2b] p-1 rounded-[50px] cursor-pointer text-center">
                                <a
                                    href="https://www.linkedin.com/in/swamiabhishek45/"
                                    target="_blank"
                                    className="text-white font-[500] text-[18px]"
                                >
                                    <i class="ri-linkedin-line"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
