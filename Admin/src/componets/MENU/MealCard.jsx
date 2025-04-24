// components/Menu/MealCard.jsx
import React from 'react';
import { FaUtensils, FaCoffee, FaMoon } from 'react-icons/fa';

const MealCard = ({ title, meals, onSelect, selectedMeals }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
        {title.icon && <span className="text-yellow-500">{title.icon}</span>}
        {title.text}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
              ${selectedMeals.includes(meal.name) ? 'ring-2 ring-green-500' : ''}`}
          >
            <div className="relative">
              <img 
                src={meal.image} 
                alt={meal.name} 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Food+Image';
                }}
              />
              {meal.isSpecial && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Special
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">{meal.name}</h3>
                {meal.isVegetarian ? (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Veg</span>
                ) : (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Non-Veg</span>
                )}
              </div>
              <p className="text-gray-600 text-sm mt-1">{meal.description || 'Delicious meal prepared with care'}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-yellow-500 font-medium">
                  {meal.price ? `₹${meal.price}` : 'Included'}
                </span>
                <button 
                  onClick={() => onSelect(meal.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors
                    ${selectedMeals.includes(meal.name) 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-yellow-500 text-white hover:bg-yellow-600'}`}
                >
                  {selectedMeals.includes(meal.name) ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealCard;
