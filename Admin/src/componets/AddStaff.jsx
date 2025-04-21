import React, { useState } from 'react';
import { UserPlus, User, Mail, Phone, Home, Briefcase, Calendar, Save, Image, DollarSign, BookOpen, Shield } from 'lucide-react';

const AddStaffForm = ({ show, onClose, onSubmit, departments }) => {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        position: '', 
        department: '', 
        salary: '', 
        joinDate: '', 
        address: '', 
        education: '', 
        experience: '', 
        isAdmin: false, 
        image: null 
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) { 
            setFormData(prev => ({ ...prev, image: file })); 
            setPreviewImage(URL.createObjectURL(file)); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await onSubmit(formData);
            setFormData({ 
                name: '', 
                email: '', 
                phone: '', 
                position: '', 
                department: '', 
                salary: '', 
                joinDate: '', 
                address: '', 
                education: '', 
                experience: '', 
                isAdmin: false, 
                image: null 
            });
            setPreviewImage(null);
        } catch (error) {
            console.error('Error adding staff:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="mt-40 bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-4xl">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                    <div className="flex items-center gap-4">
                        <UserPlus size={32} className="text-white" />
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">Add New Staff</h1>
                            <p className="text-orange-100 opacity-90">Complete all fields to register a new staff member</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-center">
                            <div className="relative w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden border-2 border-orange-300">
                                {previewImage ? 
                                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" /> : 
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <Image size={32} />
                                    </div>
                                }
                            </div>
                            <label className="cursor-pointer bg-orange-100 text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-200 transition flex items-center gap-2">
                                <Image size={16} />
                                <span>Upload Photo</span>
                                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                            </label>
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <User size={18} className="text-orange-500" /> Full Name
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                                placeholder="Full Name" 
                                required 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <Mail size={18} className="text-orange-500" /> Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                                placeholder="name@example.com" 
                                required 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <Phone size={18} className="text-orange-500" /> Phone
                            </label>
                            <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                                placeholder="+1 (555) 123-4567" 
                                required 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <Home size={18} className="text-orange-500" /> Address
                            </label>
                            <textarea 
                                name="address" 
                                value={formData.address} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all min-h-[100px]" 
                                placeholder="Current address" 
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <Briefcase size={18} className="text-orange-500" /> Position
                            </label>
                            <input 
                                type="text" 
                                name="position" 
                                value={formData.position} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                                placeholder="Job position" 
                                required 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <Briefcase size={18} className="text-orange-500" /> Department
                            </label>
                            <select 
                                name="department" 
                                value={formData.department} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                                required
                            >
                                <option value="">Select department</option>
                                {departments.map((dept) => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <DollarSign size={18} className="text-orange-500" /> Salary
                            </label>
                            <input 
                                type="number" 
                                name="salary" 
                                value={formData.salary} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                                placeholder="Monthly salary" 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <Calendar size={18} className="text-orange-500" /> Join Date
                            </label>
                            <input 
                                type="date" 
                                name="joinDate" 
                                value={formData.joinDate} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                                required 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <BookOpen size={18} className="text-orange-500" /> Education
                            </label>
                            <textarea 
                                name="education" 
                                value={formData.education} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all min-h-[80px]" 
                                placeholder="Educational background" 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <Briefcase size={18} className="text-orange-500" /> Experience
                            </label>
                            <textarea 
                                name="experience" 
                                value={formData.experience} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all min-h-[80px]" 
                                placeholder="Previous work experience" 
                            />
                        </div>

                        <div className="flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                name="isAdmin" 
                                checked={formData.isAdmin} 
                                onChange={handleChange} 
                                className="h-5 w-5 text-orange-600 rounded focus:ring-orange-500" 
                            />
                            <label className="flex items-center gap-2 text-gray-700 font-medium">
                                <Shield size={18} className="text-orange-500" /> Admin Privileges
                            </label>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="md:col-span-2 flex justify-end gap-4">
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all font-medium"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`px-6 py-3 rounded-lg ${isSubmitting ? 'bg-orange-400' : 'bg-orange-600 hover:bg-orange-700'} text-white font-medium transition-all flex items-center gap-2`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Save size={20} />
                                    Add Staff Member
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStaffForm;