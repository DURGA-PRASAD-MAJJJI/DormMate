import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { members } from "../assets/data";

const Floor = ({ floor }) => {
  const navigate = useNavigate();
  const floorNumber = parseInt(floor);

  // 9 rooms per floor
  const roomIds = [...Array(9)].map((_, i) => parseInt(`${floor}0${i + 1}`));

  // Filter only members on this floor
  const floorMembers = members.filter(member => Math.floor(member.room / 100) === floorNumber);

  // Calculate total capacity
  let totalCapacity = 0;
  roomIds.forEach(roomId => {
    totalCapacity += roomId % 10 === 9 ? 1 : 3;
  });

  const occupiedSlots = floorMembers.length;
  const totalRooms = roomIds.length;
  const emptySlots = totalCapacity - occupiedSlots;

  const handleRoomClick = (roomId) => navigate(`/room/${roomId}`);
  const roomColors = [
    "from-orange-500 to-orange-400", "from-orange-600 to-orange-500", "from-orange-700 to-orange-600",
    "from-orange-800 to-orange-700", "from-orange-900 to-orange-800", "from-orange-500 to-orange-400",
    "from-orange-600 to-orange-500", "from-orange-700 to-orange-600", "from-orange-800 to-orange-700"
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-wide uppercase drop-shadow-lg">Floor {floor}</h1>

      {/* Summary */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 text-center w-full max-w-4xl shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm md:text-base font-semibold text-white">
          <Stat label="Total Rooms" value={totalRooms} />
          <Stat label="Total Capacity" value={totalCapacity} />
          <Stat label="Occupied Slots" value={occupiedSlots} />
          <Stat label="Empty Slots" value={emptySlots} />
        </div>
      </div>

      {/* Room Cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {roomIds.map((roomId, index) => (
          <motion.div
            key={roomId}
            onClick={() => handleRoomClick(roomId)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-xl p-6 cursor-pointer text-center font-bold text-xl bg-gradient-to-br ${roomColors[index]} shadow-xl transition-all duration-300`}
          >
            Room {roomId}
          </motion.div>
        ))}
      </motion.div>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05 }}
        className="mt-10 px-6 py-3 rounded-full bg-white text-orange-600 font-bold text-sm md:text-base shadow-md hover:shadow-xl transition duration-300"
      >
        ← Back
      </motion.button>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-orange-400 text-xl">{value}</span>
    <span className="text-white/70">{label}</span>
  </div>
);

export default Floor;
