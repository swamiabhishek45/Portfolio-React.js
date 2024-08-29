import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type";
import CountUp from "react-countup";
import Hero from "./hero.jpg";
import Resume from "./Abhishek-Swami-Resume.pdf";
import About from "../About/About";
import { BackgroundGradient } from "../ui/background-gradient";
import Down from "../../assets/down.svg";

export default function Home() {
    return (
        <>
            <section
                className="relative pt-0 dark:bg-[#0e1630] dark:text-white"
                id="about"
            >
                <div className="container pt-14">
                    <div className="md:flex items-center justify-between sm: flex-col md:flex-row">
                        {/* Left side */}
                        <div className="w-full md:basis-1/2 mb-10">
                            <h5
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className="text-[#fd5e2b] text-center sm:flex sm:justify-start text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]"
                            >
                                <Type />
                            </h5>
                            <h1
                                data-aos="fade-left"
                                data-aos-duration="1600"
                                className="font-[700] text-center sm:text-start text-[2.5rem] sm:text-[3rem] leading-[60px] sm:leading-[60px] mt-5"
                            >
                                <div className="flex items-center justify-center sm:justify-start gap-4">
                                    <div className="w-14 h-[2px] bg-black dark:bg-white"></div>
                                    Hello,
                                    <br />
                                </div>
                                I'm Abhishek Swami
                                {/* <div className="flex gap-4">v

                                <div>I'm</div>
                                <div className="waviy">
                                    <span style={{ "--i": 1 }}>A</span>
                                    <span style={{ "--i": 2 }}>b</span>
                                    <span style={{ "--i": 3 }}>h</span>
                                    <span style={{ "--i": 4 }}>i</span>
                                    <span style={{ "--i": 5 }}>s</span>
                                    <span style={{ "--i": 6 }}>h</span>
                                    <span style={{ "--i": 7 }}>e</span>
                                    <span style={{ "--i": 8 }}>k</span>
                                </div>
                                <div className="waviy">
                                    <span style={{ "--i": 9 }}>S</span>
                                    <span style={{ "--i": 10 }}>w</span>
                                    <span style={{ "--i": 11 }}>a</span>
                                    <span style={{ "--i": 12 }}>m</span>
                                    <span style={{ "--i": 13 }}>i</span>
                                    
                                </div>
                            </div> */}
                            </h1>
                            <p
                                data-aos="fade-right"
                                data-aos-duration="1700"
                                className="flex gap-2 font-[500] text-[15px] leading-7  sm:pr-10 text-center sm:text-start text-gray-600 dark:text-gray-400 mt-3"
                            >
                                I'm a web designer and full-stack developer
                                focused on crafting clean & user-friendly
                                experiences, I am passionate about building
                                excellent software that improves the lives of
                                those around me.
                            </p>
                            {/* Butttos  */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="200"
                                className="flex items-center justify-center sm:justify-start gap-6 mt-7"
                            >
                                <Link to="/contact">
                                    <button className="button-87 ">
                                        Contact Me
                                        <i class="ri-contacts-line ml-2"></i>
                                    </button>
                                </Link>
                                <a href={Resume} download={true}>
                                    <button className="button-87" role="button">
                                        Download CV
                                        <i class="ri-download-2-line ml-2"></i>
                                    </button>
                                </a>
                            </div>
                            {/* Social Icons  */}
                            <div
                                className="flex items-center justify-center sm:justify-start gap-9 mt-10"
                                data-aos="fade-up"
                                data-aos-duration="1600"
                            >
                                <a
                                    href="https://github.com/swamiabhishek45"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[22px] font-[400] hover:text-orange-500 transition-all ease-in duration-200"
                                >
                                    <i class="ri-github-fill"></i>
                                </a>
                                <a
                                    href="https://twitter.com/swamiabhishek45"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[22px] font-[400] hover:text-orange-500 transition-all ease-in duration-200"
                                >
                                    <i class="ri-twitter-x-line"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/swamiabhishek45/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[22px] font-[400] hover:text-orange-500 transition-all ease-in duration-200"
                                >
                                    <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </div>
                        </div>
                        {/*====== Left End =========*/}
                        {/* Hero img */}
                        <BackgroundGradient className=" rounded-[22px] max-w-sm p-1 sm:p-1 bg-white dark:bg-zinc-900">
                            <div className="basis-1/3">
                                <figure className="flex items-center justify-center relative overflow-hidden">
                                    <img
                                        className="rounded-[22px] w-full h-full hover:scale-105 transition-transform duration-300"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                        src={Hero}
                                        alt=""
                                    />
                                    <div class="absolute inset-0  transition-opacity duration-300 rounded-md"></div>
                                </figure>
                            </div>
                        </BackgroundGradient>
                        {/* Hero content right  */}
                        <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-2 md:mt-0 md:flex-col md:justify-end md:text-end">
                            <div className="mb-10">
                                <h2 className="font-[700] text-[32px] ">
                                    <CountUp
                                        start={0}
                                        end={250}
                                        duration={2}
                                        suffix="+"
                                    />
                                </h2>
                                <h4 className="font-[600] text-[18px]">
                                    DSA Problems Solved
                                </h4>
                            </div>
                            <div className="mb-10">
                                <h2 className="font-[700] text-[32px]">
                                    <CountUp
                                        start={0}
                                        end={100}
                                        duration={2}
                                        suffix="+"
                                    />
                                </h2>
                                <h4 className="font-[600] text-[18px]">
                                    Streak Achieved
                                </h4>
                            </div>
                            <div className="mb-10">
                                <h2 className="font-[700] text-[32px]">
                                    <CountUp
                                        start={0}
                                        end={700}
                                        duration={2}
                                        suffix="+"
                                    />
                                </h2>
                                <h4 className="font-[600] text-[18px]">
                                    Code Commits
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

                <div className="flex justify-center ">
                    <img src={Down} alt="" className="hidden md:block animate-jump w-10 absolute " />
                </div>
            </section>
            <About />
        </>
    );
}
