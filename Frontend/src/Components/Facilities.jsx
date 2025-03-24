import React, { useState } from "react";
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

const Facilities = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <div className="w-full h-72 relative pt-4">
            {/* Scrolling Cards */}
            {!selectedMovie && (
                <div className="relative w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
                    <motion.div
                        className="flex space-x-6 flex-nowrap w-max"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,
                            ease: "linear"
                        }}
                    >
                        {[...movies, ...movies].map((movie, index) => (
                            <motion.div
                                key={index}
                                className="w-48 h-64 cursor-pointer border-4 border-primary shadow-lg rounded-lg flex-shrink-0 bg-transparent"
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedMovie(movie)}
                            >
                                <img src={movie.img} alt={movie.title} className="w-full h-full object-cover rounded-lg" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}

            {/* Modal for Card Details */}
            {selectedMovie && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-lg w-96"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                    >
                        <h2 className="text-xl font-bold text-gray-900">{selectedMovie.title}</h2>
                        <img src={selectedMovie.img} alt={selectedMovie.title} className="rounded-lg w-full mb-4" />
                        <p className="text-gray-700">{selectedMovie.description}</p>
                        <button
                            className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-red-600"
                            onClick={() => setSelectedMovie(null)}
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Facilities;
