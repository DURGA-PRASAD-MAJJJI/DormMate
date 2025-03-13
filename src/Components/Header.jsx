import React from "react";

const Header = () => {
    return (
        <div className="flex justify-center items-start min-h-screen pt-0 p-6">
            <div className="bg-[#f7931e] bg-opacity-80 text-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row max-w-4xl w-full justify-between">
                {/* Left Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-center md:text-left">
                    <h1 className="text-3xl font-bold">Project Overview</h1>
                    <p className="text-lg">1. This is the first line of description.</p>
                    <p className="text-lg">2. Here goes the second line.</p>
                    <p className="text-lg">3. Adding more details here.</p>
                    <p className="text-lg">4. Fourth line with info.</p>
                    <p className="text-lg">5. Final line with summary.</p>
                </div>

                {/* Right Side - Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/23/Disc_Platters.JPG"
                        alt="Disk Image"
                        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
