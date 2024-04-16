import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";

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
        <>
            <div className="dark:bg-gray-800 text-black dark:text-white p-12 text-3xl text-center flex flex-col justify-center items-center gap-4">
                Github Followers: {data.followers}
                {/* Github Username: {data.login} */}
                <img
                    src={data.avatar_url}
                    alt="profile pic"
                    width={300}
                    className=""
                />
                <div className="bg-gray-400 dark:bg-gray-600 p-8 rounded-md w-full flex justify-center items-center">

                <GitHubCalendar
                    username="swamiabhishek45"
                    blockSize={15}
                    blockMargin={5}
                    color="#39d353"
                    fontSize={16}
                    />
                    </div>
            </div>
        </>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch(
        "https://api.github.com/users/swamiabhishek45"
    );
    return response.json();
};
