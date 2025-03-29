import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
    const navigate = useNavigate();
    const handleRoomClick = (roomId) => navigate(`/room/${roomId}`);

    const roomColors = [
        "from-orange-500 to-orange-400", 
        "from-orange-600 to-orange-500", 
        "from-orange-700 to-orange-600", 
        "from-orange-800 to-orange-700", 
        "from-orange-900 to-orange-800", 
        "from-orange-500 to-orange-400", 
        "from-orange-600 to-orange-500", 
        "from-orange-700 to-orange-600", 
        "from-orange-800 to-orange-700"
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 pt-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-6 text-center uppercase tracking-widest">Floor I</h1>
            <motion.div 
                className="relative w-[90%] max-w-5xl bg-white bg-opacity-10 backdrop-blur-lg border border-orange-500 rounded-2xl shadow-2xl p-6 flex flex-col h-auto md:h-[55vh]"
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="grid gap-4 w-full h-full text-white font-semibold text-lg md:grid-cols-5 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-9">
                    {[...Array(9)].map((_, index) => (
                        <motion.div 
                            key={index + 1} 
                            onClick={() => handleRoomClick(index + 1)} 
                            className={`bg-gradient-to-r ${roomColors[index]} flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_20px_rgba(255,100,0,0.8)] transition-transform p-6 h-20 md:h-full cursor-pointer text-center text-lg sm:text-xl md:text-2xl tracking-wide`}
                        >
                            Room {index + 1}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Page1;