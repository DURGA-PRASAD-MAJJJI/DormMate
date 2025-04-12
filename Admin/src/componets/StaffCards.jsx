import { motion } from 'framer-motion';
import { User, Briefcase, Clock, Mail, Phone, Star } from 'lucide-react';

const StaffCard = ({ staff, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-72 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-200/50 cursor-pointer transition-all duration-300 hover:shadow-2xl"
    >
      {/* Profile Header */}
      <div className="relative h-40 bg-gradient-to-r from-yellow-300 to-orange-500 flex justify-center items-end pb-6">         <div className="absolute -bottom-12 w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
          {staff.image ? (
            <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
              <User className="text-indigo-600" size={40} />
            </div>
          )}
        </div>
      </div>

      {/* Staff Details */}
      <div className="pt-16 px-6 pb-6 text-center">
        <div className="flex justify-center items-center gap-1 mb-1">
          <h3 className="text-xl font-bold text-gray-800">{staff.name}</h3>
          {staff.isManager && <Star className="text-yellow-500 fill-yellow-400" size={16} />}
        </div>
        
        <p className="text-sm text-purple-600 font-medium mb-4">{staff.position}</p>
        
        <div className="flex justify-between mb-5 px-4">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Department</div>
            <div className="text-sm font-medium text-gray-700 flex items-center justify-center gap-1">
              <Briefcase size={14} className="text-indigo-400" />
              {staff.department}
            </div>
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Shift</div>
            <div className="text-sm font-medium text-gray-700 flex items-center justify-center gap-1">
              <Clock size={14} className="text-indigo-400" />
              {staff.shift}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <a 
            href={`mailto:${staff.email}`} 
            onClick={e => e.stopPropagation()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
          >
            <Mail size={16} />
          </a>
          <a 
            href={`tel:${staff.mobile}`} 
            onClick={e => e.stopPropagation()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
          >
            <Phone size={16} />
          </a>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
            <User size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StaffCard;