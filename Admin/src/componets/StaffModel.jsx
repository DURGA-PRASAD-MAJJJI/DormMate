import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User, Calendar, Settings, ArrowUpRight } from 'lucide-react';

const StaffModal = ({ staff, onClose }) => {
  return (
    <AnimatePresence>
      {staff && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden border border-gray-200"
          >
            {/* Header with profile */}
            <div className="relative">
              <div className="h-40 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              
              <div className="absolute -bottom-14 left-6">
                <div className="w-28 h-28 rounded-2xl border-4 border-white bg-white shadow-lg overflow-hidden">
                  {staff.image ? (
                    <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <User className="text-gray-400" size={48} />
                    </div>
                  )}
                </div>
              </div>
              
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm hover:bg-white transition-all duration-200"
              >
                <X size={18} className="text-gray-700" />
              </button>
            </div>
            
            {/* Main content */}
            <div className="pt-16 px-6 pb-6">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{staff.name}</h2>
                  <p className="text-indigo-600 font-medium">{staff.position}</p>
                </div>
                <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <Settings size={18} />
                </button>
              </div>
              
              <p className="text-gray-500 text-sm mb-6">Joined {staff.joinDate || 'Jan 2022'}</p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 rounded-xl p-3 text-center">
                  <p className="text-sm text-indigo-600 font-medium">Projects</p>
                  <p className="text-xl font-bold text-gray-800">24</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-3 text-center">
                  <p className="text-sm text-purple-600 font-medium">Rating</p>
                  <p className="text-xl font-bold text-gray-800">4.8</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <p className="text-sm text-blue-600 font-medium">Years</p>
                  <p className="text-xl font-bold text-gray-800">3</p>
                </div>
              </div>
              
              {/* Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{staff.email || 'johndoe@company.com'}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{staff.phone || '+1 (555) 123-4567'}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Schedule</p>
                    <p className="font-medium">Mon-Fri, 9AM-5PM</p>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-3">
                <button 
                  onClick={onClose} 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <span>Close</span>
                </button>
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2">
                  <span>Edit</span>
                  <ArrowUpRight size={16} />
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