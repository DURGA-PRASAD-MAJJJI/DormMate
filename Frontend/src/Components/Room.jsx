import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { members } from "../assets/data";
import { assets } from "../assets/assets";

const Room = () => {
    const { roomId } = useParams();
    const [selectedMember, setSelectedMember] = useState(null);
    const [showFullImage, setShowFullImage] = useState(false);
    const roomNumber = parseInt(roomId);
    const floor = Math.floor(roomNumber / 100);
    const isRoomFive = roomNumber % 100 === 5;
    const capacity = isRoomFive ? 1 : 3;
    const roomMembers = members.filter(member => member.room === roomNumber);

    return (
        <div className="relative flex flex-col items-center min-h-screen p-4 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d]">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-3xl bg-black/80 backdrop-blur-lg border border-[#ff8c00] rounded-3xl p-6 mt-24">
                <h2 className="text-[#ff8c00] text-3xl font-extrabold mb-6 border-b border-[#ff8c00] pb-2 text-center tracking-widest uppercase drop-shadow-lg">Room {roomNumber}</h2>
                <div className="space-y-4">
                    {[...Array(capacity)].map((_, i) => {
                        const member = roomMembers[i];
                        return (
                            <div key={i} className={`relative w-full flex items-center justify-between p-4 rounded-xl border border-[#ff8c00]/30 transition-all duration-300 cursor-pointer ${member ? "bg-gradient-to-r from-[#1a1a1a] to-[#292929] hover:shadow-[0_0_20px_rgba(255,87,34,0.7)]" : "bg-green-100 border-green-500 text-green-800"}`} onClick={() => member && setSelectedMember(member)}>
                                <img src={assets.bed} alt="Bed" className="w-14 h-14 object-cover rounded-lg shadow-md hover:scale-110 transition-transform duration-300" />
                                <span className={`font-semibold text-lg tracking-wider drop-shadow-sm ${member ? "text-[#ff8c00]" : ""}`}>{member ? member.name : "Ready to give opportunity for someone to stay"}</span>
                                {member ? <img src={member.image} alt={member.name} className="w-14 h-14 object-cover rounded-full border-2 border-[#ff8c00] shadow-md hover:scale-110 transition-transform duration-300" /> : <div className="w-14 h-14 rounded-full border-2 border-green-500 bg-white flex items-center justify-center text-sm text-green-800">Empty</div>}
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <div className="w-full flex justify-center mt-6">
                <button onClick={() => window.history.back()} className="bg-gradient-to-r from-[#ff9800] to-[#ff5722] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 border border-[#ffc107] ring-2 ring-transparent hover:ring-[#ff8c00]/50">← Back to Floor</button>
            </div>

            <AnimatePresence>
                {selectedMember && (
                    <motion.div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-gradient-to-br from-[#1a1a1a] to-[#292929] border border-[#ff8c00] p-10 rounded-3xl max-w-xl w-full text-white relative" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}>
                            <button className="absolute top-4 right-4 bg-[#ff8c00] text-black rounded-full px-3 py-1 font-bold hover:bg-[#ff6f00] transition-all hover:scale-110" onClick={() => setSelectedMember(null)}>✖</button>
                            <img onClick={() => setShowFullImage(true)} src={selectedMember.image} alt={selectedMember.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-[#ff8c00] cursor-pointer" />
                            <h3 className="text-4xl font-bold text-[#ff8c00] tracking-wider drop-shadow-md text-center">{selectedMember.name}</h3>
                            <p className="mt-3 italic opacity-80 text-sm text-center">{selectedMember.description}</p>
                            <div className="mt-6 space-y-3 text-left text-base font-medium text-white/90">
                                <p><span className="text-[#ff8c00]">Age:</span> {selectedMember.age}</p>
                                <p><span className="text-[#ff8c00]">Profession:</span> {selectedMember.profession}</p>
                                <p><span className="text-[#ff8c00]">Address:</span> {selectedMember.address}</p>
                                <p><span className="text-[#ff8c00]">Phone:</span> {selectedMember.mobile}</p>
                                <p><span className="text-[#ff8c00]">Floor:</span> {selectedMember.floor}</p>
                                <p><span className="text-[#ff8c00]">Room Number:</span> {selectedMember.room}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {showFullImage && selectedMember && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
                    <img src={selectedMember.image} alt={selectedMember.name} className="max-w-4xl w-full h-auto rounded-xl border-4 border-[#ff8c00]" />
                    <button className="absolute top-6 right-6 bg-[#ff8c00] text-black px-4 py-1 rounded-full font-bold hover:bg-[#ff6f00]" onClick={() => setShowFullImage(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Room;
