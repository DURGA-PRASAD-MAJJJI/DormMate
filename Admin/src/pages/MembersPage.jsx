// pages/MembersPage.jsx

import React from 'react';
import Navi from '../componets/Navi'
import Header from '../componets/Header'
import TotalMembers from './TotalMembers';

const MembersPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:block w-64 bg-white border-r shadow-sm">
        <Navi />
      </div>

      {/* Main area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white shadow-sm">
          <Header />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <TotalMembers />
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
