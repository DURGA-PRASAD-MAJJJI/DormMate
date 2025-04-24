// components/Menu/MealTimeIndicator.jsx
import React from 'react';
import { FaUtensils, FaCoffee, FaMoon } from 'react-icons/fa';

const MealTimeIndicator = ({ showBreakfast, showLunch, showDinner, currentMeal }) => {
  return (
    <div className="mb-8 bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-center gap-4">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${showBreakfast ? 'bg-yellow-100 text-yellow-800' : 'text-gray-400'}`}>
          <FaCoffee />
          <span>Breakfast</span>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${showLunch ? 'bg-green-100 text-green-800' : 'text-gray-400'}`}>
          <FaUtensils />
          <span>Lunch</span>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${showDinner ? 'bg-blue-100 text-blue-800' : 'text-gray-400'}`}>
          <FaMoon />
          <span>Dinner</span>
        </div>
      </div>
      <div className="mt-3 text-center text-lg font-medium text-gray-700">
        Currently serving: <span className="text-yellow-600">{currentMeal}</span>
      </div>
    </div>
  );
};

export default MealTimeIndicator;
