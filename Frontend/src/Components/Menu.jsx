import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const movies = [
  { id: 1, title: "Chapati", img: assets.chapati, description: "Chapati is a traditional Indian flatbread made from whole wheat flour." },
  { id: 2, title: "Dosa", img: assets.dosa, description: "Dosa is a crispy, savory pancake made from fermented rice and lentil batter." },
  { id: 3, title: "Idli", img: assets.idli, description: "Idli is a soft, steamed rice cake, popular as a healthy breakfast option in South India." },
  { id: 4, title: "Upma", img: assets.upma, description: "Upma is a flavorful and nutritious dish made from semolina and vegetables." },
  { id: 5, title: "Uttapam", img: assets.uttauppam, description: "Uttapam is a thick, savory pancake topped with vegetables and served with chutney." },
  { id: 6, title: "Pulihora", img: assets.pulihora, description: "Pulihora, also known as tamarind rice, is a tangy and spicy South Indian dish." }
];

const Menu = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="fixed bottom-10 right-10 w-56 h-80">
      {!selectedMovie && (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <motion.div key={movies[currentIndex].id} className="absolute w-full h-full cursor-pointer border-2 border-primary shadow-lg rounded-lg" initial={{ opacity: 0, rotateY: 180, y: 50 }} animate={{ opacity: 1, rotateY: 0, y: 0 }} transition={{ duration: 2.5, ease: "easeInOut" }} whileHover={{ scale: 1.05 }} onClick={() => { setSelectedMovie(movies[currentIndex]); setIsPaused(true); }}>
            <img src={movies[currentIndex].img} alt={movies[currentIndex].title} className="w-full h-full object-cover rounded-lg" />
          </motion.div>
        </div>
      )}
      {selectedMovie && (
        <motion.div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg w-96" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedMovie.title}</h2>
            <img src={selectedMovie.img} alt={selectedMovie.title} className="rounded-lg w-full mb-4" />
            <p className="text-gray-700">{selectedMovie.description}</p>
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-orange-600" onClick={() => { setSelectedMovie(null); setIsPaused(false); }}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
