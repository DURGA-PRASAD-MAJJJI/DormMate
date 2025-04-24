// components/Menu/Menu.jsx
import React, { useState, useEffect } from 'react';
import { todaysMenu } from '../assets/menuu';
import MealCard from '../componets/MENU/MealCard';
import MealSummary from '../componets/MENU/MealSummary';
import MealTimeIndicator from '../componets/MENU/MealTimeIndicator';
import { FiClock } from 'react-icons/fi';

const Meal = () => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentHour(new Date().getHours()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleMealSelect = (mealName) => {
    setSelectedMeals(prev =>
      prev.includes(mealName) ? prev.filter(name => name !== mealName) : [...prev, mealName]
    );
  };

  const showBreakfast = currentHour >= 7 && currentHour < 11;
  const showLunch = currentHour >= 11 && currentHour < 17;
  const showDinner = currentHour >= 17 || currentHour < 3;
  const getCurrentMealTime = () => showBreakfast ? 'Breakfast' : showLunch ? 'Lunch' : 'Dinner';

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Hostel Canteen Menu</h1>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow">
              <FiClock className="text-blue-500" />
              <span className="font-medium">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-4 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Today's Special</h2>
                <p className="text-white">{todaysMenu.specialOfTheDay}</p>
              </div>
              <button onClick={() => setShowSummary(!showSummary)} className="mt-3 md:mt-0 bg-white text-yellow-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {showSummary ? 'Hide Summary' : 'View My Selections'}
              </button>
            </div>
          </div>
        </header>

        {showSummary && (
          <MealSummary selectedMeals={selectedMeals} onRemove={handleMealSelect} />
        )}

        <MealTimeIndicator 
          showBreakfast={showBreakfast}
          showLunch={showLunch}
          showDinner={showDinner}
          currentMeal={getCurrentMealTime()}
        />

        {showBreakfast && (
          <MealCard title={{ text: 'Breakfast' }} meals={todaysMenu.breakfast} onSelect={handleMealSelect} selectedMeals={selectedMeals} />
        )}
        {showLunch && (
          <MealCard title={{ text: 'Lunch' }} meals={todaysMenu.lunch} onSelect={handleMealSelect} selectedMeals={selectedMeals} />
        )}
        {showDinner && (
          <MealCard title={{ text: 'Dinner' }} meals={todaysMenu.dinner} onSelect={handleMealSelect} selectedMeals={selectedMeals} />
        )}

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Menu changes daily. Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-1">Have dietary restrictions? Contact the canteen manager.</p>
        </footer>
      </div>
    </div>
  );
};

export default Meal;
