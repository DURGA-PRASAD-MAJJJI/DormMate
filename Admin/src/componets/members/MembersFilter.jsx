import { Search } from 'lucide-react';

const PAYMENT_STATUS_OPTIONS = [
  { value: '', label: 'All Statuses' },
  { value: 'paid', label: 'Paid' },
  { value: 'pending', label: 'Pending' }
];

const SORT_OPTIONS = [
  { key: 'name', label: 'Name' },
  { key: 'joinDate', label: 'Join Date' },
  { key: 'floor', label: 'Floor' }
];

const MembersFilter = ({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  sortConfig,
  requestSort,
  floors,
  sharingTypes,
  resetFilters,
  isMobile
}) => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-4'} gap-4`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              aria-label="Search members"
            />
          </div>
          <div>
            <label htmlFor="floor-filter" className="block text-xs font-medium text-gray-500 mb-1">Floor</label>
            <select
              id="floor-filter"
              value={filters.floor}
              onChange={(e) => setFilters({ ...filters, floor: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">All Floors</option>
              {floors.map(floor => (
                <option key={`floor-${floor}`} value={floor}>Floor {floor}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sharing-filter" className="block text-xs font-medium text-gray-500 mb-1">Sharing Type</label>
            <select
              id="sharing-filter"
              value={filters.sharing}
              onChange={(e) => setFilters({ ...filters, sharing: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">All Types</option>
              {sharingTypes.map(type => (
                <option key={`type-${type}`} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="payment-filter" className="block text-xs font-medium text-gray-500 mb-1">Payment Status</label>
            <select
              id="payment-filter"
              value={filters.paymentStatus}
              onChange={(e) => setFilters({ ...filters, paymentStatus: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
            >
              {PAYMENT_STATUS_OPTIONS.map(option => (
                <option key={`status-${option.value}`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-2 flex-wrap">
            {SORT_OPTIONS.map(({ key, label }) => (
              <button
                key={`sort-${key}`}
                onClick={() => requestSort(key)}
                className={`text-xs px-3 py-1 rounded-full ${
                  sortConfig.key === key 
                    ? 'bg-orange-100 text-orange-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {label} {sortConfig.key === key && (
                  sortConfig.direction === 'ascending' ? '↑' : '↓'
                )}
              </button>
            ))}
          </div>
          <button
            onClick={resetFilters}
            className="text-xs text-orange-600 hover:text-orange-800 font-medium"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersFilter;