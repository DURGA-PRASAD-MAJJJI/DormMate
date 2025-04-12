import { Search, Filter } from 'lucide-react';

const StaffFilters = ({ searchTerm, setSearchTerm, filterDepartment, setFilterDepartment, departments, count }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm mb-8 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search staff..." 
            className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <select 
            className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white" 
            value={filterDepartment} 
            onChange={(e) => setFilterDepartment(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-end text-gray-600 font-medium">
          {count} {count === 1 ? 'staff member' : 'staff members'} found
        </div>
      </div>
    </div>
  );
};

export default StaffFilters;