import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader2, User } from 'lucide-react';
import AddMember from '../componets/AddMember';
import { members as initialMembers } from '../assets/data';
import { MemberCard, MembersFilter, MembersEmptyState, MembersModal, MembersHeader } from '../componets/members';

const TotalMembers = () => {
    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddMember, setShowAddMember] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [filters, setFilters] = useState({
        floor: '',
        sharing: '',
        paymentStatus: ''
    });
    const [sortConfig, setSortConfig] = useState({
        key: 'name',
        direction: 'ascending'
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const loadMembers = async () => {
            try {
                setIsLoading(true);
                await new Promise(resolve => setTimeout(resolve, 800));
                const formattedMembers = initialMembers.map(member => ({
                    ...member,
                    image: member.image || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
                    joinDate: new Date(member.joinDate).toISOString()
                }));
                setMembers(formattedMembers);
            } catch (err) {
                setError('Failed to load members. Please try again later.');
                console.error('Error loading members:', err);
            } finally {
                setIsLoading(false);
            }
        };
        loadMembers();
    }, []);

    const { filteredMembers, floors, sharingTypes } = useMemo(() => {
        const sorted = [...members].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });

        const filtered = sorted.filter(member => {
            const matchesSearch =
                member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                member.profession.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesFilters = (
                (filters.floor === '' || member.floor === filters.floor) &&
                (filters.sharing === '' || member.sharing === filters.sharing) &&
                (filters.paymentStatus === '' ||
                    (filters.paymentStatus === 'paid' && member.pay) ||
                    (filters.paymentStatus === 'pending' && !member.pay))
            );

            return matchesSearch && matchesFilters;
        });

        const uniqueFloors = [...new Set(members.map(member => member.floor))].sort();
        const uniqueSharingTypes = [...new Set(members.map(member => member.sharing))].sort();

        return {
            filteredMembers: filtered,
            floors: uniqueFloors,
            sharingTypes: uniqueSharingTypes
        };
    }, [members, sortConfig, searchTerm, filters]);

    const requestSort = useCallback((key) => {
        setSortConfig(prevConfig => ({
            key,
            direction: prevConfig.key === key && prevConfig.direction === 'ascending' 
                ? 'descending' 
                : 'ascending'
        }));
    }, []);

    const handleAddMember = useCallback((newMember) => {
        const id = members.length > 0 ? Math.max(...members.map(m => m.id)) + 1 : 1;
        const memberWithImage = {
            ...newMember,
            id,
            image: newMember.image || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
        };
        setMembers(prev => [...prev, memberWithImage]);
        setShowAddMember(false);
    }, [members.length]);

    const handleUpdateMember = useCallback((updatedMember) => {
        setMembers(prev => prev.map(member =>
            member.id === updatedMember.id ? {
                ...updatedMember,
                image: updatedMember.image || member.image
            } : member
        ));
        setEditingMember(null);
        setShowAddMember(false);
    }, []);

    const handleDeleteMember = useCallback((id) => {
        if (window.confirm('Are you sure you want to delete this member?')) {
            setMembers(prev => prev.filter(member => member.id !== id));
        }
    }, []);

    const resetFilters = useCallback(() => {
        setFilters({
            floor: '',
            sharing: '',
            paymentStatus: ''
        });
        setSearchTerm('');
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="flex flex-col items-center">
                    <Loader2 className="animate-spin text-orange-500 h-12 w-12 mb-4" />
                    <p className="text-gray-600">Loading members...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col bg-gray-50 min-h-full">
                <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
                    <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <User className="text-red-500" size={24} />
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Error Loading Data</h3>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg transition-all"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <MembersHeader 
                memberCount={filteredMembers.length}
                setShowFilters={setShowFilters}
                showFilters={showFilters}
                setShowAddMember={setShowAddMember}
                isMobile={isMobile}
            />
            {showFilters && (
                <MembersFilter
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filters={filters}
                    setFilters={setFilters}
                    sortConfig={sortConfig}
                    requestSort={requestSort}
                    floors={floors}
                    sharingTypes={sharingTypes}
                    resetFilters={resetFilters}
                    isMobile={isMobile}
                />
            )}
            <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
                {filteredMembers.length > 0 ? (
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} gap-5`}>
                        {filteredMembers.map(member => (
                            <MemberCard 
                                key={`member-${member.id}`}
                                member={member}
                                onEdit={() => {
                                    setEditingMember(member);
                                    setShowAddMember(true);
                                }}
                                onDelete={() => handleDeleteMember(member.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <MembersEmptyState 
                        hasFilters={searchTerm || Object.values(filters).some(f => f !== '')}
                        onAddMember={() => setShowAddMember(true)}
                    />
                )}
            </main>
            <MembersModal
                isOpen={showAddMember}
                onClose={() => {
                    setShowAddMember(false);
                    setEditingMember(null);
                }}
            >
                <AddMember
                    onClose={() => {
                        setShowAddMember(false);
                        setEditingMember(null);
                    }}
                    onSubmit={editingMember ? handleUpdateMember : handleAddMember}
                    initialData={editingMember}
                />
            </MembersModal>
        </div>
    );
};

export default TotalMembers;
