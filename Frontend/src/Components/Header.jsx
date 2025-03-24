import React from "react";
import { assets } from "../assets/assets"; // Ensure this path is correct

const Header = () => {
    return (
        <div className="flex flex-col items-center p-4 md:p-10">  
            <div className="bg-[#f7931e] bg-opacity-80 text-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row max-w-full md:max-w-3xl w-full h-auto md:h-[450px] justify-between border border-black overflow-hidden">

                {/* Left Side */}
                <div className="flex-1 flex flex-col justify-center space-y-4 text-left p-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase">MENU</h1>
                    <p className="text-md md:text-lg font-medium opacity-90">📅 Date: <span className="font-semibold">14 March 2025</span></p>
                    <p className="text-md md:text-lg font-medium opacity-90">⏰ Time: <span className="font-semibold">7:30 AM</span></p>
                    <p className="text-md md:text-lg font-medium opacity-90">📆 Day: <span className="font-semibold">Monday</span></p>
                    <p className="text-xl md:text-3xl font-bold text-yellow-300 mt-2">🍽 Dish Name</p>
                    <p className="text-xl md:text-3xl font-bold text-white mt-2">IDLI . ఇడ్లీ. இட்லி</p>

                    {/* Suggestion Input */}
                    <p className="text-lg md:text-xl font-semibold text-white mt-4">
                        Suggestion:
                        <input
                            type="text"
                            placeholder="Type here..."
                            className="border-b-2 border-white outline-none text-white bg-transparent px-2 w-36 md:w-40 ml-2"
                        />
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 flex justify-center items-center p-4">
                    <div className="w-44 h-44 md:w-full md:h-full rounded-2xl shadow-lg overflow-hidden">
                        <img src={assets.idli} alt="Dish Image" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Cooking Image */}
            <div >
                <img src={assets.cooking} alt="Cooking Illustration" className="" />
            </div>
        </div>
    );
};

export default Header;
