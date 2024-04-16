import React from "react";
import Card from "./Card";
import MernChatApp from "../../assets/img/mernChatApp.png";
import Soccer from "../../assets/img/soccer.png";
import Blog from "../../assets/img/blog.png";
import Social from '../../assets/img/social.png';
import Bubble from '../../assets/img/bubble.png';
import Image from '../../assets/img/chatApp.png';
import Todo from '../../assets/img/todo.png';
import Spotify from '../../assets/img/spotify.png';

function Projects() {
    return (
        <>
            <div className="dark:bg-gray-800">
                <div className="flex  justify-center items-center p-8 h-full mx-auto">
                    <h1 className="text-4xl dark:text-white  font-bold">
                        My Projects
                    </h1>
                </div>
                <div className="flex flex-wrap gap-14 justify-center md:justify-start md:mx-auto py-6 sm:py-0 w-full max-w-screen-lg  dark:bg-gray-800 ">
                    <Card
                        src={Social}
                        name="Netlink - Social Media App"
                        desc="This project showcases a full stack social media platform. It offers a range of functionalities to enhance user interaction and engagement."
                        T1="NodeJs"
                        T2="ExpressJs"
                        T3="MongoDB"
                        btn="Get Code"
                        LiveLink="https://netlink-slxg.onrender.com/"
                        GithubLink="https://github.com/swamiabhishek45/Social-Media-App"
                    />
                    <Card
                        src={MernChatApp}
                        name="Demo Project"
                        desc="Chat Bee is chat application build with the power of MERN Stack. This application allows user to chat in real-time communication."
                        T1="NodeJs"
                        T2="React"
                        T3="MongoDB"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/Chat-Bee-Chat-App"
                    />
                    <Card
                        src={Blog}
                        name="Demo Project"
                        desc="This is simple demo project"
                        T1="React"
                        T2="Tailwind CSS"
                        T3="Appwrite"
                        btn="Get Code"
                        LiveLink="https://mega-blog-project-bice.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/MegaBlog-Project"
                    />
                    <Card
                        src={Soccer}
                        name="Demo Project"
                        desc="This is simple demo project"
                        T1="JavaScript"
                        T2="#CSS"
                        T3="#JavaScript"
                        btn="Get Code"
                        LiveLink="https://soccer-club-eta.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/Animating-Website"
                    />
                    <Card
                        src={Bubble}
                        name="Demo Project"
                        desc="This is simple demo project"
                        T1="#HTML"
                        T2="#CSS"
                        T3="#JavaScript"
                        btn="Get Code"
                        LiveLink="https://bubble-bash-ten.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/Bubble-Game"
                    />
                    <Card
                        src={Image}
                        name="Demo Project"
                        desc="This is simple demo project"
                        T1="#HTML"
                        T2="#CSS"
                        T3="#JavaScript"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/MysteryMeet-Chat-App"
                    />
                    <Card
                        src={Todo}
                        name="Demo Project"
                        desc="This is simple demo project"
                        T1="#HTML"
                        T2="#CSS"
                        T3="#JavaScript"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/React.js-Learning/tree/main/Projects/10todoContextLocal"
                    />
                    <Card
                        src={Spotify}
                        name="Demo Project"
                        desc="This is simple demo project"
                        T1="#HTML"
                        T2="#CSS"
                        T3="#JavaScript"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/Spotify-Clone"
                    />
                </div>
            </div>
        </>
    );
}

export default Projects;
