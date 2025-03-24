import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import Navi from "./Navi"; // Import the Navbar

const images = [
    assets.landing_bg1,
    assets.bg2,
    assets.bg3,
    assets.bg4,
];

const Landingpage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navi /> {/* Fixed Navbar */}
            <div className="mt-32 flex items-center justify-center relative w-screen h-screen">
                {images.map((image, index) => (
                    <motion.img key={index} src={image}alt=""
                        className="absolute inset-0 w-full h-full object-cover"initial={{ opacity: 0 }}animate={{ opacity: index === currentImageIndex ? 1 : 0 }}transition={{ duration: 1, ease: "easeInOut" }}/>
                ))}
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 text-white z-10 space-y-2 sm:space-y-4">
                    <motion.p className="text-2xl sm:text-4xl text-black font-semibold" initial={{ opacity: 0, x: -50 }}animate={{ opacity: 1, x: 0 }}transition={{ duration: 0.8, delay: 0.3 }}>Welcome</motion.p>

                    <motion.p className="text-4xl sm:text-6xl text-primary font-semibold" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}transition={{ duration: 0.8, delay: 0.6 }}>Dormmate</motion.p>
                    
                    <motion.p className="text-5xl sm:text-7xl font-semibold" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}transition={{ duration: 0.8, delay: 0.9 }}>Hope you like this...</motion.p>
                </div>
            </div>
        </>
    );
};

export default Landingpage;
