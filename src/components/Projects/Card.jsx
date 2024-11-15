import React from "react";
import { ArrowUpRight } from "lucide-react";

function Card(props) {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="w-[300px] rounded-md border mb-10 dark:border-gray-600"
        >
            <img
                src={props.src}
                alt="img"
                className="h-[200px] w-full rounded-t-md "
            />
            <div className="p-4">
                <h1 className="inline-flex items-center text-lg dark:text-white font-semibold">
                    {props.name} &nbsp;
                </h1>
                <p className="mt-3 dark:text-gray-400 text-sm text-gray-600">
                    {props.desc}
                </p>
                <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        {props.T1}
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        {props.T2}
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        {props.T3}
                    </span>
                </div>
                <div
                    className={`${
                        props.LiveLink && "flex gap-2  justify-between"
                    }   mt-2`}
                >
                    <a href={props.GithubLink} target="_blank">
                        <button className="px-8 py-2 rounded-md w-full bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl transition duration-200">
                            Github
                        </button>
                    </a>
                    {props.LiveLink && (
                        <a href={props.LiveLink} target="_blank">
                            <button className="px-8 py-2 rounded-md  bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl transition duration-200">
                                Live Link
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
