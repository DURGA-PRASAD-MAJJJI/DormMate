import { motion, AnimatePresence } from 'framer-motion';

const MembersModal = ({ children, onClose, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(4px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MembersModal;