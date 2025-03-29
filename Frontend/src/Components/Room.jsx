import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Room = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const members = [
        { id: 1, name: "Raj", age: 28, profession: "Software Engineer", address: "123 Tech Street, City A", phone: "123-456-7890", floor: 2, room: 101, profile: assets.p1, description: "Raj is a software engineer with a passion for coding and problem-solving." },
        { id: 2, name: "Rishi", age: 25, profession: "Artist", address: "456 Art Lane, City B", phone: "987-654-3210", floor: 3, room: 202, profile: assets.p2, description: "Rishi is an artist who loves to paint and create digital art." },
        { id: 3, name: "Hemanth", age: 30, profession: "Musician", address: "789 Melody Road, City C", phone: "555-666-7777", floor: 1, room: 303, profile: assets.p3, description: "Hemanth is a musician skilled in playing guitar and composing music." }
    ];
    return (
        <div className="relative flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-black via-[#1a1a1a] to-black">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-96 h-auto bg-black bg-opacity-90 backdrop-blur-md border border-[#ff8c00] rounded-3xl p-6 flex flex-col items-center lg:w-[40rem] transition-all duration-500">
                <h2 className="text-[#ff8c00] text-2xl font-bold mb-4 border-b border-[#ff8c00] pb-2 w-full text-center tracking-widest uppercase">Room 1</h2>
                {members.map(member => (
                    <div key={member.id} className="relative w-full flex items-center justify-between p-3 bg-[#1a1a1a] bg-opacity-70 rounded-xl shadow-md hover:bg-[#292929] transition duration-300 hover:shadow-[0px_0px_15px_rgba(255,87,34,0.6)] cursor-pointer" onClick={() => setSelectedMember(member)}>
                        <img src={assets.bed} alt="Bed" className="w-14 h-14 object-cover rounded-lg shadow-md hover:scale-110 transition-transform duration-300" />
                        <span className="text-[#ff8c00] font-semibold text-lg tracking-wider">{member.name}</span>
                        <img src={member.profile} alt={member.name} className="w-14 h-14 object-cover rounded-full shadow-md border-2 border-[#ff8c00] hover:scale-110 transition-transform duration-300" />
                    </div>
                ))}
            </motion.div>
            <AnimatePresence>
                {selectedMember && (
                    <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-gradient-to-br from-[#1a1a1a] to-[#292929] border border-[#ff8c00] p-6 rounded-3xl shadow-xl max-w-md text-center text-white relative" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}>
                            <button className="absolute top-4 right-4 bg-[#ff8c00] text-black rounded-full px-3 py-1 font-bold shadow-md hover:bg-[#ff6f00] transition" onClick={() => setSelectedMember(null)}>✖</button>
                            <img src={selectedMember.profile} alt={selectedMember.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-[#ff8c00] shadow-lg" />
                            <h3 className="text-2xl font-bold text-[#ff8c00]">{selectedMember.name}</h3>
                            <p className="mt-2 italic opacity-80">{selectedMember.description}</p>
                            <div className="mt-4 space-y-2 text-left text-lg">
                                <p><strong>Age:</strong> {selectedMember.age}</p>
                                <p><strong>Profession:</strong> {selectedMember.profession}</p>
                                <p><strong>Address:</strong> {selectedMember.address}</p>
                                <p><strong>Phone:</strong> {selectedMember.phone}</p>
                                <p><strong>Floor:</strong> {selectedMember.floor}</p>
                                <p><strong>Room Number:</strong> {selectedMember.room}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default Room;
