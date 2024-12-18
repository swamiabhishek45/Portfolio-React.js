import React from "react";
import Card from "./Card";
import MernChatApp from "../../assets/img/mernChatApp.png";
import Soccer from "../../assets/img/soccer.png";
import Blog from "../../assets/img/blog.png";
import Social from "../../assets/img/social.png";
import Bubble from "../../assets/img/bubble.png";
import ChatApp from "../../assets/img/chatapp.png";
import Todo from "../../assets/img/todo.png";
import Spotify from "../../assets/img/spotify.png";
import LiveDocs from "../../assets/img/livedocs.png";
import Giphy from "../../assets/img/giphy.png";
import LearnNex from "../../assets/img/learnnex.png";

function Projects() {
    return (
        <>
            <div className="dark:bg-[#0e1630]">
                <div className="flex  justify-center items-center p-8 h-full mx-auto">
                    <h1 className="text-4xl dark:text-white  font-bold">
                        My Projects
                    </h1>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-14 justify-center md:justify-start md:mx-auto py-6 sm:py-0 w-full max-w-screen-lg  dark:bg-[#0e1630] ">
                    <Card
                        src={LiveDocs}
                        name="LiveDocs - Web Application"
                        desc="LiveDocs is a clone of Goole Docs. The primary goal is to demonstrate the developer's skills in realtime enviroment that creates a lasting impact."
                        T1="Next.js"
                        T2="TypeScript"
                        T3="LiveBlocks"
                        btn="Get Code"
                        LiveLink="https://livedocs45.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/LiveDocs"
                    />
                    <Card
                        src={Social}
                        name="Netlink - Social Media App"
                        desc="This project showcases a full stack social media platform. It offers a range of functionalities to enhance user interaction and engagement."
                        T1="Node"
                        T2="Express"
                        T3="MongoDB"
                        btn="Get Code"
                        LiveLink="https://netlink-slxg.onrender.com/"
                        GithubLink="https://github.com/swamiabhishek45/Social-Media-App"
                    />
                    <Card
                        src={Blog}
                        name="Tree Trop Tales - Blog App"
                        desc="Developed a Blog Application in which users can post their though, ideas by writing blogs with images. It has authentication functionlity."
                        T1="React"
                        T2="Tailwind CSS"
                        T3="Appwrite"
                        btn="Get Code"
                        LiveLink="https://treetoptail.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/MegaBlog-Project"
                    />
                    <Card
                        src={MernChatApp}
                        name="Chat Bee - Chat Application"
                        desc="Chat Bee is chat application build with the power of MERN Stack. This application allows user to chat in real-time communication."
                        T1="Node"
                        T2="React"
                        T3="MongoDB"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/Chat-Bee-Chat-App"
                    />
                    <Card
                        src={LearnNex}
                        name="LearnNex - Course Website"
                        desc=" LearnNex is a course website build with the power of Next.js, TypeScript, and Aceternity UI. It provides a platform for users to learn."
                        T1="Next.js"
                        T2="TypeScript"
                        T3="Aceternity UI"
                        btn="Get Code"
                        LiveLink="https://learn-nex.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/learnNex"
                    />
                    <Card
                        src={Giphy}
                        name="GIPHY Clone"
                        desc="GIFFEE is a GIPHY clone build using React + Vite, Tailwind CSS and GIPHY API to fetch data from GIPHY API and display them on the screen."
                        T1="React"
                        T2="Tailwind CSS"
                        T3="GIPHY API"
                        btn="Get Code"
                        LiveLink="https://giffee.vercel.app"
                        GithubLink="https://github.com/swamiabhishek45/GIFFEE"
                    />
                    <Card
                        src={Soccer}
                        name="Animating Website"
                        desc="I've crafted a dynamic and engaging soccer club website. With smooth animations and transitions powered by GSAP."
                        T1="JavaScript"
                        T2="CSS"
                        T3="GSAP"
                        btn="Get Code"
                        LiveLink="https://soccer-club-eta.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/Animating-Website"
                    />
                    <Card
                        src={Spotify}
                        name="Spotify Clone"
                        desc="This app provides you a smooth experience with responsiveness. It has songs that you like. This app is responsive in small devices also."
                        T1="HTML"
                        T2="CSS"
                        T3="JavaScript"
                        btn="Get Code"
                        LiveLink="https://spotify20-roan.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/Spotify-Clone"
                    />
                    <Card
                        src={ChatApp}
                        name="Mystery Meet - Chat App"
                        desc="Implemented a own chat app using socket.io library. As the name mystrey you can chat with any random person this is the uniqueness of this app."
                        T1="HTML"
                        T2="JavaScript"
                        T3="Socket.IO"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/MysteryMeet-Chat-App"
                    />
                    <Card
                        src={Bubble}
                        name="Bubble Game"
                        desc="Dive into a world of delightful distraction with our charming bubble game site! Crafted with love using HTML, CSS, and JavaScript"
                        T1="HTML"
                        T2="CSS"
                        T3="JavaScript"
                        btn="Get Code"
                        LiveLink="https://bubble-bash-ten.vercel.app/"
                        GithubLink="https://github.com/swamiabhishek45/Bubble-Game"
                    />
                    <Card
                        src={Todo}
                        name="Add Todo"
                        desc="Created a simple yet efficient to-do website. Storing to-dos locally using localStorage enhances accessibility and persistence."
                        T1="React"
                        T2="TailwindCSS"
                        T3="Context API"
                        btn="Get Code"
                        LiveLink=""
                        GithubLink="https://github.com/swamiabhishek45/React.js-Learning/tree/main/Projects/10todoContextLocal"
                    />
                </div>
            </div>
        </>
    );
}

export default Projects;
