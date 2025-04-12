import React from "react";
import { members } from "../assets/data";
import { motion } from "framer-motion";
import { LayoutDashboard, Building, Users, Bed, UserCheck, UserX, Briefcase, IndianRupee, Calendar } from "lucide-react";

const Dashboard = () => {
  // Room configuration
  const totalFloors = 4, roomsPerFloor = 9;
  const roomNumbers = Array.from({ length: totalFloors * roomsPerFloor }, (_, i) => {
    const floor = Math.floor(i / roomsPerFloor) + 1;
    const room = (i % roomsPerFloor) + 1;
    return parseInt(`${floor}0${room}`);
  });
  const totalCapacity = roomNumbers.reduce((acc, _, i) => acc + (i % roomsPerFloor === 8 ? 1 : 3), 0);

  // Occupancy stats
  const occupiedSlots = members.length;
  const emptySlots = totalCapacity - occupiedSlots;
  const staffMembers = members.filter(m => m.profession.toLowerCase() === "staff").length;
  const singleOccupancy = members.filter(m => m.room.toString().endsWith('9')).length;
  const tripleOccupancy = occupiedSlots - singleOccupancy;

  // Revenue calculations
  const monthlyRevenue = (singleOccupancy * 10000) + (tripleOccupancy * 8000);
  const annualRevenue = monthlyRevenue * 12;

  const cards = [
    { label: "Total Floors", value: totalFloors, icon: <Building size={28} />, color: "bg-blue-100 text-blue-600" },
    { label: "Total Rooms", value: roomNumbers.length, icon: <Bed size={28} />, color: "bg-purple-100 text-purple-600" },
    { label: "Total Capacity", value: totalCapacity, icon: <Users size={28} />, color: "bg-green-100 text-green-600" },
    { label: "Occupied Slots", value: occupiedSlots, icon: <UserCheck size={28} />, color: "bg-orange-100 text-orange-600" },
    { label: "Empty Slots", value: emptySlots, icon: <UserX size={28} />, color: "bg-red-100 text-red-600" },
    { label: "Staff Members", value: staffMembers, icon: <Briefcase size={28} />, color: "bg-indigo-100 text-indigo-600" },
    { label: "Monthly Revenue", value: `₹${monthlyRevenue.toLocaleString('en-IN')}`, icon: <IndianRupee size={28} />, color: "bg-emerald-100 text-emerald-600" },
    { label: "Annual Revenue", value: `₹${annualRevenue.toLocaleString('en-IN')}`, icon: <Calendar size={28} />, color: "bg-amber-100 text-amber-600" }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-10 md:pl-[280px] py-10 overflow-x-hidden">
      <div className="max-w-8xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-3 mb-12">
          <LayoutDashboard size={40} className="text-orange-500" />
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 tracking-wide text-center drop-shadow-md">Admin Dashboard</h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} whileHover={{ scale: 1.03 }} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-100">
              <div className={`${card.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto`}>{card.icon}</div>
              <h2 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">{card.value}</h2>
              <p className="text-gray-600 text-lg font-medium tracking-wide text-center">{card.label}</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-16 bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg"><p className="text-blue-600 font-medium">Occupancy Rate</p><p className="text-2xl font-bold text-gray-800">{Math.round((occupiedSlots/totalCapacity)*100)}%</p></div>
            <div className="bg-green-50 p-4 rounded-lg"><p className="text-green-600 font-medium">Staff Ratio</p><p className="text-2xl font-bold text-gray-800">{Math.round((staffMembers/occupiedSlots)*100)}%</p></div>
            <div className="bg-orange-50 p-4 rounded-lg"><p className="text-orange-600 font-medium">Single Rooms Occupancy</p><p className="text-2xl font-bold text-gray-800">{singleOccupancy}</p></div>
            <div className="bg-purple-50 p-4 rounded-lg"><p className="text-purple-600 font-medium">Triple Rooms Occupancy</p><p className="text-2xl font-bold text-gray-800">{tripleOccupancy}</p></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;