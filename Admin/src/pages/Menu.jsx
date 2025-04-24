import React from 'react'
import Meal from './Meal';
import Navi from '../componets/Navi';
import Header from '../componets/Header';
const Menu = () => {
  return (
    <div className="h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-64 bg-white border-r shadow-sm z-20">
        <Navi />
      </div>

      {/* Main area */}
      <div className="flex flex-col md:ml-64 h-full">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white shadow-sm">
          <Header />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth p-4 sm:p-6">
          <Meal />
        </div>
      </div>
    </div>
  );
}

export default Menu
