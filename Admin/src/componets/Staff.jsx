import React, { useState } from 'react';
import { staffMembers } from '../assets/staff';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';
import StaffCard from './StaffCards';
import StaffModal from './StaffModel';
import AddStaff from './AddStaff';
import StaffFilters from './StaffFilters';

const Staff = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStaff, setNewStaff] = useState({ name: '', email: '', mobile: '', department: '', position: '', shift: 'Morning (7AM-3PM)', salary: '', address: '', image: null });
  
  const departments = [...new Set(staffMembers.map(staff => staff.department))];
  const filteredStaff = staffMembers.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || staff.email.toLowerCase().includes(searchTerm.toLowerCase()) || staff.mobile.includes(searchTerm);
    const matchesDepartment = filterDepartment === 'all' || staff.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleAddStaff = (e) => {
    e.preventDefault();
    console.log('Adding new staff:', newStaff);
    setShowAddForm(false);
    setNewStaff({ name: '', email: '', mobile: '', department: '', position: '', shift: 'Morning (7AM-3PM)', salary: '', address: '', image: null });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 md:pl-[280px] py-8">
      <div className="max-w-8xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div><h1 className="text-3xl font-bold text-gray-800">Staff Management</h1><p className="text-gray-500">Manage your hostel staff members</p></div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowAddForm(true)} className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2.5 rounded-xl shadow-md transition-all">
            <UserPlus size={18} className="text-white" /> Add New Staff
          </motion.button>
        </motion.div>

        <StaffFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterDepartment={filterDepartment} setFilterDepartment={setFilterDepartment} departments={departments} count={filteredStaff.length} />

        {filteredStaff.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStaff.map((staff) => (
              <StaffCard key={staff._id} staff={staff} onClick={() => setSelectedStaff(staff)} />
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
            <div className="text-gray-400 mb-4 flex justify-center"><User size={48} className="opacity-50" /></div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No staff members found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        <StaffModal staff={selectedStaff} onClose={() => setSelectedStaff(null)} />
        <AddStaff show={showAddForm} onClose={() => setShowAddForm(false)} onSubmit={handleAddStaff} formData={newStaff} onFormChange={(e) => setNewStaff({...newStaff, [e.target.name]: e.target.value})} departments={departments} />
      </div>
    </div>
  );
};

export default Staff;