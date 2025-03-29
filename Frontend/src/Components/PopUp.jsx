import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleBlockClick = (path) => {
        navigate(path);
    };

    return (
        <>
            {/* Floating Button */}
            <div 
                className="fixed bottom-6 right-6 w-16 h-16 cursor-pointer z-50 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
                onClick={() => setIsOpen(true)}
            >
                <img src={assets.building} alt="Open Modal" className="w-10 h-10 object-contain" />
            </div>

            {/* PopUp Modal */}
            {isOpen && (
                <motion.div 
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-lg z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="bg-[#1a1a1a] bg-opacity-80 backdrop-blur-2xl border border-[#ff8c00] rounded-2xl shadow-2xl p-6 w-96 flex flex-col items-center"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                        {/* Grid Buttons */}
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="p-6 rounded-lg shadow-md flex justify-center items-center text-white font-semibold bg-gradient-to-r from-orange-500 to-orange-700 hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,140,0,0.6)] transition-all duration-300 cursor-pointer" onClick={() => handleBlockClick("/page1")}>Floor I</div>
                            <div className="p-6 rounded-lg shadow-md flex justify-center items-center text-white font-semibold bg-gradient-to-r from-red-500 to-red-700 hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,69,0,0.6)] transition-all duration-300 cursor-pointer" onClick={() => handleBlockClick("/page2")}>Floor II</div>
                            <div className="p-6 rounded-lg shadow-md flex justify-center items-center text-white font-semibold bg-gradient-to-r from-yellow-500 to-yellow-700 hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,215,0,0.6)] transition-all duration-300 cursor-pointer" onClick={() => handleBlockClick("/page3")}>Floor III</div>
                            <div className="p-6 rounded-lg shadow-md flex justify-center items-center text-white font-semibold bg-gradient-to-r from-purple-500 to-purple-700 hover:scale-105 hover:shadow-[0px_0px_15px_rgba(128,0,128,0.6)] transition-all duration-300 cursor-pointer" onClick={() => handleBlockClick("/page4")}>Floor IV</div>
                        </div>

                        {/* Close Button */}
                        <button 
                            className="mt-6 w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_20px_rgba(255,69,0,0.6)] transition-all duration-300 font-semibold tracking-wide"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default PopUp;
