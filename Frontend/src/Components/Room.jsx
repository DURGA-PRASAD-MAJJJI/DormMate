import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { members } from "../assets/data";
import { assets } from "../assets/assets";
import { User, Phone, Briefcase, MapPin, Calendar, Building2, PlusCircle } from "lucide-react";

const Room = () => {
    const { roomId } = useParams();
    const [selectedMember, setSelectedMember] = useState(null);
    const [showFullImage, setShowFullImage] = useState(false);
    const roomNumber = parseInt(roomId);
    const isSingleRoom = roomNumber % 10 === 9;
    const roomMembers = members.filter(member => member.room === roomNumber);
    const capacity = isSingleRoom ? 1 : 3;
    const navigate = useNavigate();


    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0c0c0c] to-black p-6 flex flex-col items-center text-white overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl mt-24">
                <div className="relative text-center mb-12">
                    <h2 className="text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c00] to-[#ff5722] animate-pulse">Room {roomNumber}</h2>
                    <motion.div className="absolute inset-0 -z-10 blur-xl opacity-30 animate-ping bg-gradient-to-r from-[#ff8c00]/20 to-[#ff5722]/20 rounded-full w-64 h-64 mx-auto mt-[-40px]" />
                </div>
                <div className="grid gap-6">
                    {[...Array(capacity)].map((_, i) => {
                        const member = roomMembers[i];
                        return (
                            <motion.div whileHover={{ scale: 1.03 }} key={i} onClick={() => member && setSelectedMember(member)} className={`group relative p-5 rounded-2xl border-2 backdrop-blur-md transition-all cursor-pointer duration-300 ${member ? "bg-white/5 border-[#ff8c00]" : "border-dashed border-white/30 hover:border-green-500"}`}>
                                {member ? (
                                    <div className="flex items-center justify-between">
                                        <img src={assets.bed} alt="Bed" className="w-12 h-12 object-cover rounded-lg shadow" />
                                        <div className="flex-1 px-4">
                                            <h3 className="text-lg font-bold text-[#ff8c00]">{member.name}</h3>
                                            <p className="text-sm text-white/60">{member.profession}</p>
                                        </div>
                                        <img src={member.image} alt={member.name} className="w-14 h-14 rounded-full border-2 border-[#ff8c00] object-cover transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between px-4 py-2">
                                        <div
                                            onClick={() => navigate('/book')}
                                            className="flex items-center gap-3 cursor-pointer rounded-lg transition-all"
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate('/book')}
                                        >
                                            <PlusCircle className="w-10 h-10 text-green-500 animate-pulse" />
                                            <p className="text-green-600 font-semibold">Available slot here You can your slot</p>
                                        </div>
                                    </div>

                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            <button onClick={() => window.history.back()} className="mt-12 px-6 py-3 bg-gradient-to-r from-[#ff8c00] to-[#ff5722] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300">← Back to Floor</button>

            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-3xl border border-[#ff8c00] shadow-2xl"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 bg-[#ff8c00] text-black px-3 py-1 rounded-full font-bold hover:bg-[#ff6f00] hover:scale-110 transition"
                            >
                                ✖
                            </button>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    onClick={() => setShowFullImage(true)}
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-32 h-32 rounded-full object-cover border-4 border-[#ff8c00] cursor-pointer hover:scale-105 transition-transform mb-4"
                                />
                                <h3 className="text-3xl font-bold text-[#ff8c00]">{selectedMember.name}</h3>
                                <p className="text-sm italic text-white/70">{selectedMember.description}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm font-medium text-white/90">
                                <InfoChip icon={<Calendar size={16} />} label="Age" value={selectedMember.age} />
                                <InfoChip icon={<Briefcase size={16} />} label="Profession" value={selectedMember.profession} />
                                <InfoChip icon={<MapPin size={16} />} label="Address" value={selectedMember.address} />
                                <InfoChip icon={<Phone size={16} />} label="Phone" value={selectedMember.mobile} />
                                <InfoChip icon={<Building2 size={16} />} label="Floor" value={selectedMember.floor} />
                                <InfoChip icon={<User size={16} />} label="Room" value={selectedMember.room} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {showFullImage && selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
                    <img src={selectedMember.image} alt={selectedMember.name} className="max-w-4xl w-full h-auto rounded-xl border-4 border-[#ff8c00]" />
                    <button onClick={() => setShowFullImage(false)} className="absolute top-6 right-6 bg-[#ff8c00] text-black px-4 py-1 rounded-full font-bold hover:bg-[#ff6f00]">Close</button>
                </div>
            )}
        </div>
    );
};

const InfoChip = ({ icon, label, value }) => (
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
        {icon}
        <span className="text-[#ff8c00] font-semibold">{label}:</span>
        <span>{value}</span>
    </div>
);

export default Room;
