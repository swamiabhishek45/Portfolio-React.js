import React from "react";
import GitHubCalendar from "react-github-calendar";

const OpenSourceSection = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:text-white">
            {/* Title */}
            {/* <h2 className="text-2xl font-semibold mb-4">Opensource</h2> */}

            {/* Profile Section */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub Logo"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                        <p className="font-semibold text-lg">Abhishek Swami</p>
                    </div>
                </div>
                <a href="https://github.com/swamiabhishek45">
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                        Follow
                    </button>
                </a>
            </div>

            {/* GitHub Contribution Graph */}
            <div className="border p-4   rounded-md">
                <GitHubCalendar
                    username="swamiabhishek45"
                    blockSize={12}
                    blockMargin={5}
                    color="#39d353"
                    fontSize={16}
                    
                    
                />
            </div>
        </div>
    );
};

export default OpenSourceSection;
