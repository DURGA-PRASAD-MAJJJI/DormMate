import { motion } from 'framer-motion';
import { User, Briefcase, Clock, Mail, Phone, Star } from 'lucide-react';

const StaffCard = ({ staff, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }} 
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-90 md:w-64 lg:w-64 mx-auto md:mx-0 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg overflow-hidden border border-gray-300 cursor-pointer transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Company Header */}
      <div className="bg-[#f7931e] py-2 px-4 text-white text-center">
        <h3 className="font-bold text-lg">COMPANY NAME</h3>
        <p className="text-xs">Employee Identification Card</p>
      </div>

      {/* Profile Section - Enhanced for mobile */}
      <div className="p-4 flex items-center">
        <div className="w-20 h-20 md:w-20 md:h-20 rounded-md border-2 border-[#f7931e] overflow-hidden bg-white mr-4">
          {staff.image ? (
            <img 
              src={staff.image} 
              alt={staff.name} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <User className="text-gray-400" size={32} />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <h3 className="text-lg font-bold text-gray-800 truncate">{staff.name}</h3>
            {staff.isManager && <Star className="text-yellow-500 fill-yellow-400" size={14} />}
          </div>
          <p className="text-sm text-gray-600 truncate">{staff.position}</p>
          <p className="text-xs text-gray-500 mt-1 truncate">ID: {staff.employeeId || 'EMP-0000'}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div className="flex items-center">
            <Briefcase size={14} className="text-[#f7931e] mr-1" />
            <span className="truncate">{staff.department}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="text-[#f7931e] mr-1" />
            <span className="truncate">{staff.shift}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-3">
          <div className="flex items-center text-sm mb-1">
            <Mail size={14} className="text-[#f7931e] mr-2" />
            <span className="text-gray-700 truncate">{staff.email}</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone size={14} className="text-[#f7931e] mr-2" />
            <span className="text-gray-700 truncate">{staff.mobile}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-2 px-4 text-center text-xs text-gray-600 border-t border-gray-200">
        Valid until: {staff.expiryDate || '31/12/2025'}
      </div>
    </motion.div>
  );
};

export default StaffCard;