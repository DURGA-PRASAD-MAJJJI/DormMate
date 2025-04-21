import { UserPlus, User } from 'lucide-react';

const MembersEmptyState = ({ hasFilters, onAddMember }) => (
  <div className="h-full flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-sm p-8 text-center max-w-md">
      <div className="mx-auto w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
        <User size={40} className="text-orange-500" />
      </div>
      <h3 className="text-xl font-medium text-gray-800 mb-2">
        {hasFilters ? 'No matching members found' : 'No members yet'}
      </h3>
      <p className="text-gray-600 mb-4">
        {hasFilters 
          ? 'Try adjusting your search or filters' 
          : 'Get started by adding your first member'}
      </p>
      <button
        onClick={onAddMember}
        className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 justify-center mx-auto"
      >
        <UserPlus size={18} />
        <span>Add Member</span>
      </button>
    </div>
  </div>
);

export default MembersEmptyState;