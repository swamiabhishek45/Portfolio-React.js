import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import OpenSourceSection from "./GithubStreak";

function Github() {
    const data = useLoaderData();
    console.log(data);

    // const [Data, setData] = useState([]);
    // useEffect(() => {
    //   fetch("https://api.github.com/users/swamiabhishek45")
    //     .then(response => response.json())
    //     .then((Data) => {
    //       setData(Data);
    //     });
    // }, []);
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="w-1/3 p-4 border-r dark:bg-[#0e1630] border-gray-300">
                {/* <Github /> */} hihi
            </div>

            {/* Right Section */}
            <div className="w-2/3 overflow-y-auto scrollbar-hide p-4 dark:bg-[#0e1630] dark:text-white">
                <div className="max-w-3xl mx-auto">
                    <img
                        src={data.avatar_url}
                        alt="Profile Banner"
                        className="rounded-full w-32 mx-auto mb-6"
                    />
                    <h1 className="text-4xl font-bold text-center mb-2">
                        {data.name}
                    </h1>
                    <p className="text-center text-gray-600">
                        I work on all things{" "}
                        <span className="font-semibold">Software</span> at IRIS
                        Software
                        <br />
                        Truly love working on Web
                    </p>

                    <section className="my-8">
                        <h2 className="text-xl font-semibold">About</h2>
                        <p>
                            Hey there! I'm a software engineer with a knack for
                            building efficient, intuitive digital experiences
                            and a passion for turning complex challenges into
                            elegant solutions. I've had the privilege of working
                            on projects that make a real difference.
                        </p>
                    </section>

                    <section className="my-8">
                        <h2 className="text-xl font-semibold">Skills</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {[
                                "Java",
                                "TypeScript",
                                "React.js",
                                "Angular",
                                "Next.js",
                                "Express.js",
                                "Spring Boot",
                                "Redux Toolkit",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-gray-200 text-black px-3 py-1 rounded-md text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <OpenSourceSection />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch(
        "https://api.github.com/users/swamiabhishek45"
    );
    return response.json();
};
