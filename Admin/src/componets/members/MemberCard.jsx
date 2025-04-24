import { motion } from 'framer-motion';
import { Mail, Phone, Home, Calendar, Edit, Trash2 } from 'lucide-react';

const MemberCard = ({ member, onEdit, onDelete }) => {
    const joinDate = new Date(member.joinDate);
    const formattedDate = joinDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <motion.div
            className="w-90 md:w-64 lg:w-64 mx-auto md:mx-0 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg overflow-hidden border border-gray-300 cursor-pointer transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Company Header */}
            <div className="bg-[#f7931e] py-2 px-4 text-white text-center">
                <h3 className="font-bold text-lg">DormMate</h3>
                <p className="text-xs">Member Identification Card</p>
            </div>

            {/* Profile Section - Enhanced for mobile */}
            <div className="p-4 flex items-center">
                <div className="w-20 h-20 md:w-20 md:h-20 rounded-md border-2 border-[#f7931e] overflow-hidden bg-white mr-4">
                    {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 text-2xl">👤</span>
                        </div>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                        <h3 className="text-lg font-bold text-gray-800 truncate">{member.name}</h3>
                        {member.pay ? (
                            <span className="text-green-500 font-bold text-sm whitespace-nowrap">Paid</span>
                        ) : (
                            <span className="text-red-500 font-bold text-sm whitespace-nowrap">Pending</span>
                        )}
                    </div>
                    <p className="text-sm text-gray-600 truncate">{member.profession}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate">ID: {member.memberId || 'MEM-0000'}</p>
                </div>
            </div>

            {/* Details Section */}
            <div className="px-4 pb-4">
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div className="flex items-center">
                        <Home size={14} className="text-[#f7931e] mr-1" />
                        <span className="truncate">Floor {member.floor}, Room {member.room}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar size={14} className="text-[#f7931e] mr-1" />
                        <span className="truncate">Joined {formattedDate}</span>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-3">
                    <div className="flex items-center text-sm mb-1">
                        <Mail size={14} className="text-[#f7931e] mr-2" />
                        <span className="text-gray-700 truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <Phone size={14} className="text-[#f7931e] mr-2" />
                        <span className="text-gray-700 truncate">{member.mobile}</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 py-2 px-4 text-center text-xs text-gray-600 border-t border-gray-200">
                Valid until: {member.expiryDate || '31/12/2025'}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-2 p-4">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit();
                    }}
                    className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
                    title="Edit"
                    aria-label={`Edit ${member.name}`}
                >
                    <Edit size={16} />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                    title="Delete"
                    aria-label={`Delete ${member.name}`}
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </motion.div>
    );
};

export default MemberCard;