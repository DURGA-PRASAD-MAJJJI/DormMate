import { User, UserPlus, Filter, ChevronDown, ChevronUp } from 'lucide-react';

const MembersHeader = ({ 
  memberCount, 
  setShowFilters, 
  showFilters, 
  setShowAddMember,
  isMobile
}) => (
  <header className="bg-white shadow-sm z-10 sticky top-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-3">
            <User size={24} className="text-orange-500" />
            <span>PG Members</span>
            <span className="text-xs md:text-sm font-normal bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
              {memberCount} {memberCount === 1 ? 'member' : 'members'}
            </span>
          </h1>
          <div className="flex items-center gap-3">
            {!isMobile && (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all text-sm"
                aria-expanded={showFilters}
                aria-label="Toggle filters"
              >
                <Filter size={16} />
                <span>Filters</span>
                {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
            <button
              onClick={() => setShowAddMember(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-3 md:px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-sm"
              aria-label="Add new member"
            >
              <UserPlus size={16} />
              <span className="hidden md:inline">Add Member</span>
            </button>
          </div>
        </div>
        
        {isMobile && (
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all text-sm"
            aria-expanded={showFilters}
          >
            <Filter size={16} />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}
      </div>
    </div>
  </header>
);

export default MembersHeader;