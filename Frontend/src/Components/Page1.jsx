import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
    const navigate = useNavigate();
    const handleRoomClick = (roomId) => navigate(`/room/${roomId}`);

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-transparent backdrop-blur-xl p-4 pt-20">
            <motion.div 
                className="relative w-[85%] max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col h-auto md:h-[55vh]"
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="grid gap-4 w-full h-full text-white font-semibold text-lg md:grid-cols-5 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-9">
                    
                    {/* First Row Boxes */}
                    <motion.div onClick={() => handleRoomClick(1)} className="bg-gradient-to-r from-[#ffcc80] to-[#ffb74d] flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,152,0,0.6)] transition-transform p-6 h-20 md:h-full cursor-pointer">
                        Room 1
                    </motion.div>
                    <motion.div onClick={() => handleRoomClick(2)} className="bg-gradient-to-r from-[#ffb74d] to-[#ffa726] flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,140,0,0.6)] transition-transform p-6 h-20 md:h-full cursor-pointer">
                        Room 2
                    </motion.div>
                    <motion.div onClick={() => handleRoomClick(3)} className="bg-gradient-to-r from-[#ffa726] to-[#ff9800] flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,128,0,0.6)] transition-transform p-6 h-20 md:h-full cursor-pointer">
                        Room 3
                    </motion.div>
                    <motion.div onClick={() => handleRoomClick(4)} className="bg-gradient-to-r from-[#ff9800] to-[#ff8c00] flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,120,0,0.6)] transition-transform p-6 h-20 md:h-full cursor-pointer">
                        Room 4
                    </motion.div>

                    <div className="hidden md:block"></div>

                    {/* Second Row Boxes */}
                    <motion.div onClick={() => handleRoomClick(5)} className="bg-gradient-to-r from-[#ffcc80] to-[#ffb74d] flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,152,0,0.6)] transition-transform p-6 h-20 md:h-full cursor-pointer">
                        Room 5
                    </motion.div>
                    <motion.div onClick={() => handleRoomClick(6)} className="bg-gradient-to-r from-[#ffb74d] to-[#ffa726] flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,140,0,0.6)] transition-transform p-6 h-20 md:h-full cursor-pointer">
                        Room 6
                    </motion.div>
                    <motion.div onClick={() => handleRoomClick(7)} className="bg-gradient-to-r from-[#ffa726] to-[#ff9800] flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,128,0,0.6)] transition-transform p-6 h-20 md:h-full cursor-pointer">
                        Room 7
                    </motion.div>
                    <motion.div onClick={() => handleRoomClick(8)} className="bg-gradient-to-r from-[#ff9800] to-[#ff8c00] flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,120,0,0.6)] transition-transform p-6 h-20 md:h-full cursor-pointer">
                        Room 8
                    </motion.div>

                    {/* Last Box - Room 9 */}
                    <motion.div onClick={() => handleRoomClick(9)} className="bg-gradient-to-r from-[#ff8c00] to-[#ff7b00] flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_15px_rgba(255,100,0,0.6)] transition-transform h-16 md:h-[70%] p-6 cursor-pointer">
                        Room 9
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
};

export default Page1;
