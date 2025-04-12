import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, Mail, Phone, Clock, DollarSign } from 'lucide-react';

const StaffModal = ({ staff, onClose }) => {
  return (
    <AnimatePresence>
      {staff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.9 }} 
            transition={{ type: 'spring', damping: 25 }} 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="relative h-48 bg-gradient-to-r from-blue-50 to-gray-50 flex items-center justify-center overflow-hidden">
              {staff.image ? (
                <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center shadow-inner">
                  <User className="text-blue-600" size={64} />
                </div>
              )}
              <button onClick={onClose} className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{staff.name}</h2>
              <p className="text-blue-600 font-medium mb-5">{staff.position}</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Briefcase className="flex-shrink-0 mt-0.5 text-gray-400" size={18} />
                  <div>
                    <div className="text-sm text-gray-500">Department</div>
                    <div className="font-medium">{staff.department}</div>
                  </div>
                </div>
                {/* Other info fields... */}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end gap-3">
                <button onClick={onClose} className="px-5 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                  Close
                </button>
                <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StaffModal;