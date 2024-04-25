import React from "react";

function About() {
    return (
        <section id="services" className="bg-white dark:bg-gray-800">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="font-[800] text-[2.4rem] mb-5 dark:text-white ">
                        What do I help
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto font-[500] text-[16px] leading-7 dark:text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Harum mollitia dignissimos necessitatibus commodi
                        facilis ratione ipsa doloribus animi reiciendis ad.
                        Deserunt, recusandae officiis quod commodi cupiditate
                        vitae repudiandae amet dolorum?
                    </p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-full sm:px-0">
                        <div className="relative text-gray-700 dark:text-gray-300 antialiased text-sm font-semibold">
                            {/* Vertical line  */}
                            <div data-aos="fade-left"
                                                data-aos-duration="1600" className="hidden absolute w-1 sm:block bg-orange-600 h-full left-1/2 transform -translate-x-1/2"></div>

                            {/* left card  */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div
                                                data-aos="fade-right"
                                                data-aos-duration="1600"
                                                className="bg-white dark:bg-gray-700 hover:dark:bg-orange-500 p-4 rounded shadow group hover:bg-orange-500 cursor-pointer ease-in duration-150"
                                            >
                                                <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                                                    Education
                                                </h3>

                                                <p className="text-[15px] group-hover:text-white leading-7 text-center sm:text-start">
                                                    Lorem, ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Totam adipisci modi ab
                                                    voluptas aperiam, ratione
                                                    repellendus? Hic nostrum
                                                    officiis optio!
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500 border-white dark:border-gray-800 border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-graduation-cap-line text-[18px]"></i>
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
                                                className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-orange-500  hover:bg-orange-500 cursor-pointer ease-in duration-150"
                                            >
                                                <h3
                                                    className="font-[700] my-3
                                                group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start"
                                                >
                                                    Skills
                                                </h3>

                                                <p className="text-[15px] group-hover:text-white leading-7 text-center sm:text-start">
                                                    Lorem, ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Totam adipisci modi ab
                                                    voluptas aperiam, ratione
                                                    repellendus? Hic nostrum
                                                    officiis optio!
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-orange-500  border-white dark:border-gray-800 border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <i class="ri-graduation-cap-line text-[18px]"></i>
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
