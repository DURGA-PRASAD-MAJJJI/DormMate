import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserPlus, User, Mail, Phone, Home, Briefcase,
  Calendar, Save, Image, Info, X
} from 'lucide-react';

const AddMember = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: '',
      email: '',
      mobile: '',
      floor: '',
      room: '',
      profession: '',
      joinDate: '',
      sharing: '3-Sharing',
      pay: false,
      address: '',
      image: null
    }
  );
  const [previewImage, setPreviewImage] = useState(initialData?.image || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile is required';
    if (!formData.floor) newErrors.floor = 'Floor is required';
    if (!formData.room) newErrors.room = 'Room is required';
    if (!formData.profession.trim()) newErrors.profession = 'Profession is required';
    if (!formData.joinDate) newErrors.joinDate = 'Join date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size should be less than 2MB');
        return;
      }
      setFormData(prev => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const age = formData.joinDate
        ? (() => {
            const today = new Date();
            const birthDate = new Date(formData.joinDate);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
            return age;
          })()
        : 0;

      const memberData = {
        ...formData,
        age
      };

      await onSubmit(memberData);
      if (!initialData) {
        setFormData({
          name: '',
          email: '',
          mobile: '',
          floor: '',
          room: '',
          profession: '',
          joinDate: '',
          sharing: '3-Sharing',
          pay: false,
          address: '',
          image: null
        });
        setPreviewImage(null);
      }

      if (onClose) onClose();
    } catch (error) {
      console.error('Error submitting member:', error);
      alert('Failed to submit member. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white z-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <UserPlus size={32} className="text-white" />
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {initialData ? 'Edit Member' : 'Add New Member'}
                  </h1>
                  <p className="text-orange-100 opacity-90">
                    {initialData ? 'Update member details' : 'Complete all fields to register a new PG member'}
                  </p>
                </div>
              </div>
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-orange-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-white" />
                </button>
              )}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden border-2 border-orange-300">
                  {previewImage ? (
                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <User size={48} />
                    </div>
                  )}
                </div>
                <label className="cursor-pointer bg-orange-100 text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-200 transition flex items-center gap-2">
                  <Image size={16} />
                  <span>Upload Photo</span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>

              {/* Name, Email, Mobile Inputs */}
              {['name', 'email', 'mobile'].map(field => (
                <div className="space-y-1" key={field}>
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    {field === 'name' && <User size={18} className="text-orange-500" />}
                    {field === 'email' && <Mail size={18} className="text-orange-500" />}
                    {field === 'mobile' && <Phone size={18} className="text-orange-500" />}
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field === 'mobile' ? 'xxxxxxxxxx' : field === 'email' ? 'name@example.com' : 'Full Name'}
                    className={`w-full px-4 py-3 rounded-lg border ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                  />
                  {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Profession */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <Briefcase size={18} className="text-orange-500" /> Profession
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="Current status"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.profession ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                />
                {errors.profession && <p className="text-red-500 text-sm mt-1">{errors.profession}</p>}
              </div>

              {/* Address */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <Home size={18} className="text-orange-500" /> Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your residence address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all min-h-[100px]"
                />
              </div>

              {/* Floor & Room */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <Home size={18} className="text-orange-500" /> Room Assignment
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['floor', 'room'].map((field, idx) => (
                    <div key={field}>
                      <select
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                      >
                        <option value="">{`Select ${field.charAt(0).toUpperCase() + field.slice(1)}`}</option>
                        {(field === 'floor' ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6, 7, 8, 9]).map(val => (
                          <option key={val} value={val}>
                            {field === 'room' ? `Room ${formData.floor || '0'}${val}` : `Floor ${val}`}
                          </option>
                        ))}
                      </select>
                      {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sharing Type */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <Info size={18} className="text-orange-500" /> Sharing Type
                </label>
                <select
                  name="sharing"
                  value={formData.sharing}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                >
                  <option value="3-Sharing">3-Sharing</option>
                  <option value="2-Sharing">2-Sharing</option>
                  <option value="1-Sharing">1-Sharing (Private)</option>
                </select>
              </div>

              {/* Join Date */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <Calendar size={18} className="text-orange-500" /> Join Date
                </label>
                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.joinDate ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                />
                {errors.joinDate && <p className="text-red-500 text-sm mt-1">{errors.joinDate}</p>}
              </div>

              {/* Pay Checkbox & Submit Button */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="pay"
                  name="pay"
                  checked={formData.pay}
                  onChange={handleChange}
                  className="accent-orange-500 scale-125"
                />
                <label htmlFor="pay" className="text-gray-700 font-medium">Has Paid Fees?</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <Save size={18} /> {isSubmitting ? 'Saving...' : initialData ? 'Update Member' : 'Add Member'}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddMember;
