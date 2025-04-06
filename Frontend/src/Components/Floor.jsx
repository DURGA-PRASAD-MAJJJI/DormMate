import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Floor = ({ floor }) => {
  const navigate = useNavigate();
  const handleRoomClick = (roomId) => navigate(`/room/${roomId}`);
  const roomColors = [
    "from-orange-500 to-orange-400", "from-orange-600 to-orange-500", "from-orange-700 to-orange-600",
    "from-orange-800 to-orange-700", "from-orange-900 to-orange-800", "from-orange-500 to-orange-400",
    "from-orange-600 to-orange-500", "from-orange-700 to-orange-600", "from-orange-800 to-orange-700"
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-black text-white px-4 relative">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-6 text-center uppercase tracking-widest">Floor {floor}</h1>
      <motion.div className="relative w-[90%] max-w-5xl bg-white bg-opacity-10 backdrop-blur-lg border border-orange-500 rounded-2xl shadow-2xl p-6 flex flex-col h-auto md:h-[55vh]" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="grid gap-4 w-full h-full text-white font-semibold text-lg md:grid-cols-5 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-9">
          {[...Array(9)].map((_, index) => {
            const roomId = parseInt(`${floor}${0}${index + 1}`);
            return (
              <motion.div key={roomId} onClick={() => handleRoomClick(roomId)} className={`bg-gradient-to-r ${roomColors[index]} flex justify-center items-center rounded-lg shadow-lg hover:scale-105 hover:shadow-[0px_0px_20px_rgba(255,100,0,0.8)] transition-transform p-6 h-20 md:h-full cursor-pointer text-center text-lg sm:text-xl md:text-2xl tracking-wide`}>
                Room {roomId}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <button onClick={() => navigate(-1)} className="fixed bottom-6 right-6 sm:bottom-4 sm:right-4 bg-[#ff8c00] text-black px-6 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-[#ff6f00] transition-all shadow-md hover:shadow-[0_0_20px_rgba(255,140,0,0.7)] hover:scale-105 z-50">← Back</button>
    </div>
  );
};

export default Floor;
