import React, { useState, useEffect } from 'react';
import { assets } from "../assets/assets";
const images = [
  assets.landing_bg1,
  assets.bg2,
  assets.bg3,
  assets.bg4,
];
const Canteen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleContainer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-screen h-screen bg-cover bg-center overflow-hidden">
      <img src={images[currentImageIndex]} alt="Canteen Background" className="w-full h-full object-cover brightness-50 transition-opacity duration-1000 ease-in-out scale-110" />

      {/* Canteen Notice Box */}
      <div 
        className={`absolute ${isOpen 
          ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100 w-[300px] p-6 md:w-[200px] md:p-3" 
          : "top-5 right-5 w-[220px] p-4 md:w-[180px] md:p-2"} 
        bg-white bg-opacity-30 backdrop-blur-md text-white rounded-2xl shadow-2xl 
        border border-white border-opacity-40 flex flex-col items-center 
        cursor-pointer transition-all duration-500 ease-in-out z-10`} 
        onClick={toggleContainer}
      >

        {/* Dish Image */}
        <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md mb-4 border-2 border-white md:w-16 md:h-16">
          <img src={assets.idli} alt="Dish Image" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-xl font-extrabold uppercase tracking-wide text-center drop-shadow-lg md:text-lg">MENU</h1>
        <p className="text-xs font-medium opacity-90 md:text-[10px]">📅 Date: <span className="font-semibold">14 March 2025</span></p>
        <p className="text-xs font-medium opacity-90 md:text-[10px]">⏰ Time: <span className="font-semibold">7:30 AM</span></p>
        <p className="text-xs font-medium opacity-90 md:text-[10px]">📆 Day: <span className="font-semibold">Monday</span></p>

        <p className="text-base font-bold text-yellow-300 mt-3 md:text-sm">🍽 Dish Name</p>
        <p className="text-base font-bold text-white mt-1 drop-shadow-lg md:text-sm">IDLI . ఇడ్లీ . இட்லி</p>

        {/* Suggestion Input */}
        <p className="text-xs font-semibold text-white mt-4 md:text-[10px]">
          Suggestion:
          <input
            type="text"
            placeholder="Type here..."
            className="border-b border-white outline-none text-white bg-transparent px-2 w-full mt-1 focus:border-yellow-400 transition duration-200 md:px-1 md:mt-0.5"
          />
        </p>
      </div>
    </div>
  );
};

export default Canteen;