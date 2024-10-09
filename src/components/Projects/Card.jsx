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
                    <a href={props.LiveLink} target="_blank">
                        {props.LiveLink && (
                            <ArrowUpRight className="h-4 w-4 cursor-pointer" />
                        )}
                    </a>
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
                <a href={props.GithubLink} target="_blank">
                    <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-orange-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {props.btn}
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Card;
