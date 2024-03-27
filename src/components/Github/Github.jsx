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
      <div className="bg-gray-800 text-white p-12 text-3xl text-center flex flex-col justify-center items-center gap-4">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="profile pic" width={300} className="" />
        <GitHubCalendar
          username="swamiabhishek45"
          blockSize={15}
          blockMargin={5}
          color="#39d353"
          fontSize={16}
        />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () =>{
  const response = await fetch("https://api.github.com/users/swamiabhishek45")
  return response.json();

}
