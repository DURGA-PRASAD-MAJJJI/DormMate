import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const movies = [
    { id: 1, title: "Mineral Water Fridge", img: assets.f1, description: "A modern fridge with mineral water storage to keep your beverages perfectly chilled at all times." },
    { id: 2, title: "Washing Machine", img: assets.f2, description: "A high-efficiency washing machine designed to make your laundry effortless and quick." },
    { id: 3, title: "Water Geyser", img: assets.f3, description: "Instant hot water supply for a refreshing and comfortable bathing experience." },
    { id: 4, title: "Refrigerator", img: assets.f4, description: "Spacious, energy-efficient refrigerator to keep your food fresh and organized." },
    { id: 5, title: "24/7 Free WiFi", img: assets.f5, description: "Seamless, high-speed internet access anytime, anywhere within the facility." }
];

const Facilities = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    return (
        <div className="w-full h-120 relative flex flex-col items-center overflow-none ">
            {/* <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 mb-6 text-center uppercase">Facilities Available</h1> */}
            {!selectedMovie && (
                <div className="absolute top-[-120px] w-full overflow-x-scroll">
                    <motion.div className="flex space-x-6 flex-nowrap w-max " initial={{ x: 0 }} animate={{ x: "-50%" }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}>
                        {[...movies, ...movies].map((movie, index) => (
                            <motion.div key={index} className="w-50 h-30 cursor-pointer border border-orange-500 shadow-md rounded-lg flex-shrink-0 bg-white transform hover:scale-105 transition duration-300 flex  items-center justify-center p-4" onClick={() => setSelectedMovie(movie)}>
                                <img src={movie.img} alt={movie.title} className="w-20 h-20 object-cover rounded-lg mb-3 shadow" />
                                <h3 className="text-lg font-semibold text-orange-600 text-center">{movie.title}</h3>
                                {/* <p className="text-sm text-gray-700 text-center mt-2">{movie.description}</p> */}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}
            {selectedMovie && (
                <motion.div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <motion.div className="bg-black border border-orange-500 rounded-lg shadow-lg w-96 p-6 relative flex flex-col items-center text-center" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                        <button className="absolute top-2 right-2 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-700" onClick={() => setSelectedMovie(null)}>✕</button>
                        <img src={selectedMovie.img} alt={selectedMovie.title} className="rounded-lg w-24 h-24 mb-4 shadow-md border-2 border-orange-500" />
                        <h2 className="text-2xl font-semibold text-orange-500 mb-2">{selectedMovie.title}</h2>
                        <p className="text-gray-300 text-sm leading-relaxed">{selectedMovie.description}</p>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Facilities;
