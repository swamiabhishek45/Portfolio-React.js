import React, { useEffect, useState } from "react";
import ChessWebAPI from "chess-web-api";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const chessAPI = new ChessWebAPI();

function PlayerProfile({ username }) {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (username) {
            chessAPI
                .getPlayer(username)
                .then((response) => setProfile(response.body))
                .catch((err) => setError(err.message));
        }
    }, [username]);

    // useEffect(() => {
    //     if (profile) {
    //         // GSAP animation for smooth fade-in effect
    //         gsap.from(".profile-card", { opacity: 0, y: 20, duration: 1 });
    //     }
    // }, [profile]);

    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!profile)
        return <p className="text-center text-gray-600">Loading...</p>;

    return (
        <motion.div
            className="max-w-4xl mx-auto mt-10 p-6 dark:bg-[#0e1630] text-black dark:text-white shadow-md rounded-md border border-gray-200 profile-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold text-center mb-4">
                {profile.username}
            </h1>
            <div className="flex flex-col items-center">
                <img
                    src={profile.avatar}
                    alt="avatar"
                    className="w-32 h-32 rounded-full shadow-lg mb-4"
                />
                <p className="text-gray-700 text-lg">
                    Rating:{" "}
                    <span className="font-semibold">{profile.rating}</span>
                </p>
                <p className="text-gray-700 text-lg">
                    Country:{" "}
                    <span className="font-semibold">{profile.country}</span>
                </p>
                <p className="text-gray-700 text-lg">
                    Followers:{" "}
                    <span className="font-semibold">{profile.followers}</span>
                </p>
            </div>

            <motion.div
                className="mt-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1">
                    Play
                </h2>
                <p className="text-gray-700 mt-2">
                    URL:{" "}
                    <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        {profile.url}
                    </a>
                </p>
                <p className="text-gray-700">
                    Playing: {profile.playing || "N/A"}
                </p>
                <p className="text-gray-700">
                    Challenges: {profile.challenges || "N/A"}
                </p>
            </motion.div>

            <motion.div
                className="mt-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1">
                    Followers
                </h2>
                <p className="text-gray-700 mt-2">
                    Followers: {profile.followers}
                </p>
                <p className="text-gray-700">
                    Following: {profile.following || "N/A"}
                </p>
            </motion.div>

            <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1">
                    Profile
                </h2>
                <p className="text-gray-700 mt-2">Country: {profile.country}</p>
                <p className="text-gray-700">
                    Location: {profile.location || "N/A"}
                </p>
                <p className="text-gray-700">
                    Joined:{" "}
                    {new Date(profile.joined * 1000).toLocaleDateString()}
                </p>
                <p className="text-gray-700">
                    Last online:{" "}
                    {new Date(profile.lastOnline * 1000).toLocaleDateString() ||
                        "N/A"}
                </p>
            </motion.div>
        </motion.div>
    );
}

export default PlayerProfile;
