import React, { useState } from 'react';
import { UserPlus, User, Mail, Phone, Home, Briefcase, Calendar, Save, Image, Info } from 'lucide-react';

const AddMember = () => {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', floor: '', room: '', profession: '', joinDate: '', sharing: '3-Sharing', pay: false, address: '', image: null });
    const [previewImage, setPreviewImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) { setFormData(prev => ({ ...prev, image: file })); setPreviewImage(URL.createObjectURL(file)); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const memberData = { _id: `member${Math.floor(Math.random() * 9000) + 1000}`, ...formData, age: formData.joinDate ? (() => { const today = new Date(); const birthDate = new Date(formData.joinDate); let age = today.getFullYear() - birthDate.getFullYear(); const m = today.getMonth() - birthDate.getMonth(); if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--; return age; })() : 0 };
            console.log('Member added:', memberData);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setFormData({ name: '', email: '', mobile: '', floor: '', room: '', profession: '', joinDate: '', sharing: '3-Sharing', pay: false, address: '', image: null });
            setPreviewImage(null);
            alert('Member added successfully!');
        } catch (error) { console.error('Error adding member:', error); alert('Failed to add member. Please try again.'); }
        finally { setIsSubmitting(false); }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 ml-4 md:ml-40">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                        <div className="flex items-center gap-4"><UserPlus size={32} className="text-white" /><div><h1 className="text-2xl md:text-3xl font-bold">Add New Member</h1><p className="text-orange-100 opacity-90">Complete all fields to register a new PG member</p></div></div>
                    </div>
                    <form onSubmit={handleSubmit} className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden border-2 border-orange-300">
                                    {previewImage ? <img src={previewImage} alt="Preview" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-gray-400"><Image size={32} /></div>}
                                </div>
                                <label className="cursor-pointer bg-orange-100 text-orange-700 px-4 py-2 rounded-lg hover:bg-orange-200 transition flex items-center gap-2"><Image size={16} /><span>Upload Photo</span><input type="file" accept="image/*" onChange={handleImageChange} className="hidden" /></label>
                            </div>
                            <div className="space-y-1"><label className="flex items-center gap-2 text-gray-700 font-medium"><User size={18} className="text-orange-500" /> Full Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" placeholder="Full Name" required /></div>
                            <div className="space-y-1"><label className="flex items-center gap-2 text-gray-700 font-medium"><Mail size={18} className="text-orange-500" /> Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" placeholder="name@example.com" required /></div>
                            <div className="space-y-1"><label className="flex items-center gap-2 text-gray-700 font-medium"><Phone size={18} className="text-orange-500" /> Mobile</label><input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" placeholder="xxxxxxxxxx" required /></div>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-1"><label className="flex items-center gap-2 text-gray-700 font-medium"><Briefcase size={18} className="text-orange-500" /> Profession</label><input type="text" name="profession" value={formData.profession} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" placeholder="Current status" required /></div>
                            <div className="space-y-1"><label className="flex items-center gap-2 text-gray-700 font-medium"><Home size={18} className="text-orange-500" /> Address</label><textarea name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all min-h-[100px]" placeholder="your Residence" /></div>
                            <div className="space-y-1"><label className="flex items-center gap-2 text-gray-700 font-medium"><Home size={18} className="text-orange-500" /> Room Assignment</label><div className="grid grid-cols-2 gap-4"><select name="floor" value={formData.floor} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" required><option value="">Select Floor</option>{[1, 2, 3, 4].map(floor => <option key={floor} value={floor}>Floor {floor}</option>)}</select><select name="room" value={formData.room} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" required><option value="">Select Room</option>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(room => <option key={room} value={room}>Room {formData.floor || '0'}{room}</option>)}</select></div></div>
                            <div className="space-y-1"><label className="flex items-center gap-2 text-gray-700 font-medium"><Info size={18} className="text-orange-500" /> Sharing Type</label><select name="sharing" value={formData.sharing} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"><option value="3-Sharing">3-Sharing</option><option value="2-Sharing">2-Sharing</option><option value="1-Sharing">1-Sharing (Private)</option></select></div>
                            <div className="space-y-1"><label className="flex items-center gap-2 text-gray-700 font-medium"><Calendar size={18} className="text-orange-500" /> Join Date</label><input type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" required /></div>
                            <div className="flex items-center space-x-3"><input type="checkbox" name="pay" checked={formData.pay} onChange={handleChange} className="h-5 w-5 text-orange-600 rounded focus:ring-orange-500" /><label className="text-gray-700 font-medium">Payment Completed</label></div>
                        </div>
                        <div className="md:col-span-2"><button type="submit" disabled={isSubmitting} className={`w-full ${isSubmitting ? 'bg-orange-400' : 'bg-orange-600 hover:bg-orange-700'} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2`}>{isSubmitting ? (<><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Processing...</>) : (<><Save size={20} /> Register Member</>)}</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default AddMember;