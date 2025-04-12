import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const AddStaffForm = ({ show, onClose, onSubmit, formData, onFormChange, departments }) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 20 }} 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Add New Staff Member</h2>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <X size={24} className="text-gray-500" />
                </button>
              </div>
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Form fields... */}
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button type="button" onClick={onClose} className="px-6 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-md hover:from-blue-700 hover:to-blue-600 transition-all">
                    Add Staff
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddStaffForm;