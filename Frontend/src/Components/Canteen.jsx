import React, { useState, useEffect } from 'react';
import { assets } from "../assets/assets";

const images = [assets.landing_bg1, assets.bg2, assets.bg3, assets.bg4];

const Canteen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pollResult, setPollResult] = useState({ like: 0, dislike: 0 });
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const imageInterval = setInterval(() => setCurrentImageIndex(prev => (prev + 1) % images.length), 5000);
    const timeInterval = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(imageInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const handleVote = (type) => setPollResult(prev => ({ ...prev, [type]: prev[type] + 1 }));

  const formattedDate = dateTime.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
  const formattedTime = dateTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true });
  const formattedDay = dateTime.toLocaleDateString(undefined, { weekday: 'long' });

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans flex items-center justify-center bg-black">
      <img src={images[currentImageIndex]} alt="Background" className="absolute w-full h-full object-cover brightness-[0.3] scale-110 transition-opacity duration-1000 ease-in-out" />

      <div className="relative z-10 w-[90%] max-w-[380px] sm:max-w-[420px] bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl text-white flex flex-col justify-between items-center h-[60%] sm:h-[60%]">

        <div className="flex flex-col items-center justify-center flex-grow w-full px-4 py-5 sm:py-6 space-y-5">
          <div className="text-center space-y-1">
            <h2 className="text-yellow-300 text-xl sm:text-2xl font-bold uppercase tracking-widest">Today's Special</h2>
            <p className="text-sm sm:text-base font-light text-white/90">{formattedDate}</p>
            <p className="text-sm font-light text-white/80">{formattedDay} • {formattedTime}</p>
          </div>

          <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60">
            <img src={assets.idli} alt="Dish" className="w-full h-full object-cover" />
          </div>

          <div className="text-center">
            <p className="text-yellow-300 font-medium text-sm sm:text-base">Main Dish</p>
            <h1 className="text-white text-lg sm:text-xl font-bold mt-1">IDLI · ఇడ్లీ · இட்லி</h1>
          </div>
        </div>

        <div className="w-full px-5 py-4 bg-white/5 border-t border-white/20">
          <p className="text-white font-semibold text-center mb-2">How do you like it?</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => handleVote('like')} className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-xl shadow transition text-sm">👍 {pollResult.like}</button>
            <button onClick={() => handleVote('dislike')} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-xl shadow transition text-sm">👎 {pollResult.dislike}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canteen;
