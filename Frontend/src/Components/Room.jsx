import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Room = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const members = [
        { id: 1, name: "Raj", profile: assets.p1, description: "Raj is a software engineer with a passion for coding and problem-solving." },
        { id: 2, name: "Rishi", profile: assets.p2, description: "Rishi is an artist who loves to paint and create digital art." },
        { id: 3, name: "Hemanth", profile: assets.p3, description: "Hemanth is a musician skilled in playing guitar and composing music." }
    ];

    return (
        <div className="relative flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-black via-[#1a1a1a] to-black">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="w-96 h-auto bg-black bg-opacity-90 backdrop-blur-md border border-[#ff8c00] rounded-3xl p-6 flex flex-col items-center lg:w-[40rem] transition-all duration-500"
            >
                
                {/* Room Number Heading */}
                <h2 className="text-[#ff8c00] text-2xl font-bold mb-4 border-b border-[#ff8c00] pb-2 w-full text-center tracking-widest uppercase">
                    Room 1
                </h2>

                {members.map(member => (
                    <div 
                        key={member.id} 
                        className="relative w-full flex items-center justify-between p-3 bg-[#1a1a1a] bg-opacity-70 rounded-xl shadow-md hover:bg-[#292929] transition duration-300 hover:shadow-[0px_0px_15px_rgba(255,87,34,0.6)] cursor-pointer"
                        onClick={() => setSelectedMember(member)}
                    >
                        {/* Bed Image on Left */}
                        <img src={assets.bed} alt="Bed" className="w-14 h-14 object-cover rounded-lg shadow-md hover:scale-110 transition-transform duration-300" />

                        {/* Member Name in Center */}
                        <span className="text-[#ff8c00] font-semibold text-lg tracking-wider">
                            {member.name}
                        </span>

                        {/* Profile Picture on Right */}
                        <img src={member.profile} alt={member.name} className="w-14 h-14 object-cover rounded-full shadow-md border-2 border-[#ff8c00] hover:scale-110 transition-transform duration-300" />
                    </div>
                ))}
            </motion.div>

            {/* Member Details Popup */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div 
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className="bg-[#1a1a1a] border border-[#ff8c00] p-6 rounded-2xl shadow-lg max-w-sm text-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                        >
                            <img src={selectedMember.profile} alt={selectedMember.name} className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-2 border-[#ff8c00]" />
                            <h3 className="text-[#ff8c00] text-xl font-bold">{selectedMember.name}</h3>
                            <p className="text-white mt-2">{selectedMember.description}</p>

                            <button 
                                className="mt-4 px-4 py-2 bg-[#ff8c00] text-black font-bold rounded-lg hover:bg-[#ff6f00] transition"
                                onClick={() => setSelectedMember(null)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Room;
