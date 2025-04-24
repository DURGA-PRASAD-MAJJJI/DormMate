// components/Menu/MealSummary.jsx
import React from 'react';
import { FiXCircle } from 'react-icons/fi';

const MealSummary = ({ selectedMeals, onRemove }) => {
  const calculateTotalCalories = () => selectedMeals.length * 350;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Meal Selections</h2>
      {selectedMeals.length === 0 ? (
        <div className="text-center py-6">
          <FiXCircle className="mx-auto text-4xl text-gray-400 mb-3" />
          <p className="text-gray-600">You haven't selected any meals yet.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {selectedMeals.map((meal, idx) => (
              <div key={idx} className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                <span className="font-medium">{meal}</span>
                <button onClick={() => onRemove(meal)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Nutrition Summary</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{selectedMeals.length}</div>
                <div className="text-sm text-gray-600">Meals</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{calculateTotalCalories()}</div>
                <div className="text-sm text-gray-600">Calories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {selectedMeals.length > 2 ? 'High' : selectedMeals.length > 0 ? 'Moderate' : 'Low'}
                </div>
                <div className="text-sm text-gray-600">Intake</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MealSummary;
