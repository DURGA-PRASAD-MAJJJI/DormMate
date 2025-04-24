import React, { useState, useEffect } from 'react';
import { staffMembers } from '../assets/staff';
import { motion } from 'framer-motion';
import { User, UserPlus, Loader2 } from 'lucide-react';
import StaffCard from '../componets/StaffCards';
import StaffModal from '../componets/StaffModel';
import AddStaff from '../componets/AddStaff';
import StaffFilters from '../componets/StaffFilters';
import { toast } from 'react-hot-toast';

const Staff = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStaff, setNewStaff] = useState({ 
    name: '', 
    email: '', 
    mobile: '', 
    department: '', 
    position: '', 
    shift: 'Morning (7AM-3PM)', 
    salary: '', 
    address: '', 
    image: null 
  });
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 second loading simulation
    
    return () => clearTimeout(timer);
  }, []);

  const departments = ['all', ...new Set(staffMembers.map(staff => staff.department))];
  const filteredStaff = staffMembers.filter(staff => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = staff.name.toLowerCase().includes(searchLower) || 
                         staff.email.toLowerCase().includes(searchLower) || 
                         staff.mobile.includes(searchTerm);
    const matchesDepartment = filterDepartment === 'all' || staff.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });
  
  const handleAddStaff = (e) => {
    e.preventDefault();
    if (!newStaff.name || !newStaff.email || !newStaff.department) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      console.log('Adding new staff:', newStaff);
      toast.success('New staff added successfully!');
      setShowAddForm(false);
      setNewStaff({ 
        name: '', 
        email: '', 
        mobile: '', 
        department: '', 
        position: '', 
        shift: 'Morning (7AM-3PM)', 
        salary: '', 
        address: '', 
        image: null 
      });
      setIsLoading(false);
    }, 1000);
  };
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewStaff(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 md:pl-[280px] py-8">
      <div className="max-w-8xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }} 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Staff Management</h1>
            <p className="text-gray-500">Manage your hostel staff members</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={() => setShowAddForm(true)} 
            className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-5 py-2.5 rounded-xl shadow-md transition-all"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <>
                <UserPlus size={18} /> Add New Staff
              </>
            )}
          </motion.button>
        </motion.div>

        <StaffFilters 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          filterDepartment={filterDepartment} 
          setFilterDepartment={setFilterDepartment} 
          departments={departments} 
          count={filteredStaff.length} 
          isLoading={isLoading}
        />

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="mb-4"
            >
              <Loader2 size={48} className="text-orange-500" />
            </motion.div>
            <p className="text-gray-600 text-lg">Loading staff data...</p>
            <p className="text-gray-400 text-sm mt-2">Please wait while we fetch the information</p>
          </div>
        ) : filteredStaff.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredStaff.map((staff) => (
              <StaffCard key={staff._id || staff.id} staff={staff} onClick={() => setSelectedStaff(staff)} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100"
          >
            <div className="text-gray-400 mb-4 flex justify-center"><User size={48} className="opacity-50" /></div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No staff members found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {selectedStaff && <StaffModal staff={selectedStaff} onClose={() => setSelectedStaff(null)} />}
        {showAddForm && (
          <AddStaff 
            show={showAddForm} 
            onClose={() => setShowAddForm(false)} 
            onSubmit={handleAddStaff} 
            formData={newStaff} 
            onFormChange={handleFormChange} 
            departments={departments.filter(d => d !== 'all')} 
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default Staff;