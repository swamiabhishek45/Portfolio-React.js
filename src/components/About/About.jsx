import React from "react";

function About() {
    return (
        <section id="services" className="bg-white dark:bg-[#0e1630]">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="font-[800] text-[2.4rem] mb-5 dark:text-white ">
                        About Me
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto font-[500] text-[16px] leading-7 dark:text-white">
                        Basically, it's all about learning and experience. Hi, I
                        am Abhishek. I like to learn from
                        different people and I respect everyone's opinion. And
                        playing chess is my favorite hobby.
                    </p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-full sm:px-0">
                        <div className="relative text-gray-700 dark:text-gray-300 antialiased text-sm font-semibold">
                            {/* Vertical line  */}
                            <div className="hidden absolute w-1 sm:block bg-orange-600 h-full left-1/2 transform -translate-x-1/2"></div>

                            {/* left card  */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div
                                                data-aos="fade-right"
                                                data-aos-duration="1600"
                                                className="bg-white dark:bg-gray-700 hover:dark:bg-[#fd7f0b] p-4 rounded shadow group hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                                                    Personal Info
                                                </h3>

                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                    <div className="flex flex-col gap-2">
                                                        <h1>
                                                            <i class="ri-user-fill mr-2"></i>
                                                            Abhishek Swami
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-mail-fill mr-2"></i>
                                                            abhishekswami1435@gmail.com
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-phone-fill mr-2"></i>
                                                            +91 8956XXXXXX
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-graduation-cap-fill mr-2"></i>
                                                            B Tech - Computer
                                                            Science
                                                        </h1>
                                                        <h1>
                                                            <i class="ri-map-pin-fill mr-2"></i>
                                                            Latur, Maharashtra,
                                                            India
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500 border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-account-circle-fill text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* right card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                data-aos="fade-left"
                                                data-aos-duration="1600"
                                                className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-[#fd7f0b]  hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <h3
                                                    className="font-[700] my-3
                                                group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start"
                                                >
                                                    Experience
                                                </h3>

                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                    Comming soon ....
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500  border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-building-2-fill text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* left card  */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div
                                                data-aos="fade-right"
                                                data-aos-duration="1600"
                                                className="bg-white dark:bg-gray-700 hover:dark:bg-[#fd7f0b] p-4 rounded shadow group hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                                                    Education
                                                </h3>

                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                    <div className="">
                                                        <h1>
                                                            <i class="ri-graduation-cap-fill mr-2"></i>
                                                            Dr. Babasaheb
                                                            Ambedkar
                                                            Technological
                                                            University
                                                        </h1>
                                                        <h2 className="">
                                                            B Tech, Computer
                                                            Science{" | "}
                                                            <span>
                                                                2021 - 2025
                                                            </span>
                                                        </h2>
                                                    </div>

                                                    <div className="">
                                                        <h1>
                                                            <i class="ri-graduation-cap-fill mr-2"></i>
                                                            Shri. Shamgir
                                                            Kanishta
                                                            Mahavidyalaya, Latur
                                                        </h1>
                                                        <h2 className="">
                                                            HSC{" | "}
                                                            <span>
                                                                2019 - 2021
                                                            </span>
                                                        </h2>
                                                    </div>
                                                    <div className="">
                                                        <h1>
                                                            <i class="ri-graduation-cap-fill mr-2"></i>
                                                            Parimal Madhyamik
                                                            Vidyalaya, Latur
                                                        </h1>
                                                        <h2 className="">
                                                            SSC{" | "}
                                                            <span>
                                                                2016 - 2019
                                                            </span>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500 border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-graduation-cap-fill text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* right card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                data-aos="fade-left"
                                                data-aos-duration="1600"
                                                className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-[#fd7f0b]  hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                                            >
                                                <h3
                                                    className="font-[700] my-3
                                                group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start"
                                                >
                                                    Skills
                                                </h3>

                                                <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                                                    <div>
                                                        <h1>
                                                            <i class="ri-contrast-fill mr-2"></i>
                                                            Frontend
                                                        </h1>
                                                        <p>
                                                            HTML, CSS,
                                                            JavaScript,
                                                            Bootstrap, Tailwind
                                                            CSS, React.js, Redux{" "}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h1>
                                                            <i class="ri-server-fill mr-2"></i>
                                                            Backend
                                                        </h1>
                                                        <p>
                                                            Node.js, Express.js,
                                                            EJS{" "}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h1>
                                                            <i class="ri-database-2-fill mr-2"></i>
                                                            Database
                                                        </h1>
                                                        <p>
                                                            MongoDB, SQL,
                                                            Appwrite{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500  border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-code-s-slash-line text-[18px]"></i>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
