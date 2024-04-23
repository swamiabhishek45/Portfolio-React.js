import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type";
import CountUp from "react-countup";
import Hero from './hero.png';

export default function Home() {
    return (
        <>
            <section
                className="pt-0 dark:bg-gray-800 dark:text-white"
                id="about"
            >
                <div className="container pt-14">
                    <div className="md:flex items-center justify-between sm: flex-col md:flex-row">
                        {/* Left side */}
                        <div className="w-full md:basis-1/2">
                            <h5
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className="text-orange-700 text-center sm:flex sm:justify-start text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]"
                            >
                                <Type />
                            </h5>
                            <h1
                                data-aos="fade-left"
                                data-aos-duration="1600"
                                className="font-[800] text-center sm:text-start text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                            >
                                I'm Swami Abhishek
                            </h1>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1700"
                                className="flex gap-2 font-[500] text-[15px] leading-7  sm:pr-10 text-center sm:text-start text-gray-600 dark:text-gray-300"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Asperiores natus sapiente
                                nostrum ipsam? Sunt tenetur iusto consequuntur
                                harum, laborum ducimus corporis fugiat rerum
                                sint molestias inventore earum dolor nesciunt
                                sit cum nulla culpa alias odio at porro. Placeat
                                eaque, accusantium enim distinctio, ipsam non
                                dicta unde repudiandae nostrum vero rem.
                            </p>
                            {/* Butttos  */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="200"
                                className="flex items-center justify-center sm:justify-start gap-6 mt-7"
                            >
                                <Link to="/contact">
                                    <button className="bg-orange-600 text-white cursor-pointer p-4 px-8  outline-none rounded-full flex items-center gap-2 hover:bg-orange-700 font-bold text-sm">
                                        Contact Me
                                    </button>
                                </Link>
                                <button
                                    className="bg-gray-600 text-white cursor-pointer p-4 px-8  outline-none font-bold rounded-full hover:bg-gray-700 textsm
                                text-sm"
                                >
                                    Download CV
                                </button>
                            </div>
                            {/* Social Icons  */}
                            <div
                                className="flex items-center justify-center sm:justify-start gap-9 mt-12"
                                data-aos="fade-up"
                                data-aos-duration="1700"
                            >
                                <a
                                    href="https://github.com/swamiabhishek45"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[20px] font-[400]"
                                >
                                    <i class="ri-github-fill"></i>
                                </a>
                                <a
                                    href="https://twitter.com/swamiabhishek45"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[20px] font-[400]"
                                >
                                    <i class="ri-twitter-x-line"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/swamiabhishek45/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[20px] font-[400]"
                                >
                                    <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </div>
                        </div>
                        {/*====== Left End =========*/}
                        {/* Hero img */}
                        <div className="basis-1/3 mt-10 sm:mt-0">
                            <figure className="flex items-center justify-center">
                                <img
                                    src={Hero}
                                    alt=""
                                />
                            </figure>
                        </div>
                        {/* Hero content right  */}
                        <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-2 md:mt-0 md:flex-col md:justify-end md:text-end">
                            <div className="mb-10">
                                <h2 className="font-[700] text-[32px]">
                                    <CountUp
                                        start={0}
                                        end={2}
                                        duration={2}
                                        suffix="+"
                                    />
                                </h2>
                                <h4 className="font-[600] text-[18px]">
                                    Years of Experience
                                </h4>
                            </div>
                            <div className="mb-10">
                                <h2 className="font-[700] text-[32px]">
                                    <CountUp
                                        start={0}
                                        end={99}
                                        duration={2}
                                        suffix="%"
                                    />
                                </h2>
                                <h4 className="font-[600] text-[18px]">
                                    Success Rate
                                </h4>
                            </div>
                            <div className="mb-10">
                                <h2 className="font-[700] text-[32px]">
                                    <CountUp
                                        start={0}
                                        end={4}
                                        duration={2}
                                        suffix="+"
                                    />
                                </h2>
                                <h4 className="font-[600] text-[18px]">
                                    Happy Clients
                                </h4>
                            </div>
                            <div className="mb-10">
                                <h2 className="font-[700] text-[32px]">
                                    <CountUp
                                        start={0}
                                        end={10}
                                        duration={2}
                                        suffix="+"
                                    />
                                </h2>
                                <h4 className="font-[600] text-[18px]">
                                    Projects Completed
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
