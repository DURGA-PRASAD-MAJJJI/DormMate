import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Power, Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="w-full bg-gradient-to-r from-black to-gray-900 shadow-lg py-3 px-4 md:py-4 md:px-6 flex items-center justify-between border-b border-orange-500/30 fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-3">
                <button className="md:hidden text-white" onClick={toggleSidebar}><Menu size={24} /></button>
                <div className="flex items-center gap-3 group cursor-pointer">
                    <img src={assets.logo} alt="Logo" className="w-9 h-9 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110" />
                    <h1 className="text-white text-xl md:text-3xl font-bold tracking-widest drop-shadow-md bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">PG Admin</h1>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-orange-600 hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/20" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Power size={18} className="text-white" /><span className="text-white font-medium text-sm hidden md:inline">Logout</span>
                </button>
                {mobileMenuOpen && <div className="md:hidden absolute top-16 right-4 bg-gray-800 rounded-lg shadow-xl p-2 border border-orange-500/30"><button className="w-full text-white text-sm px-3 py-2 hover:bg-orange-600 rounded-md transition">Logout</button></div>}
            </div>
        </header>
    );
};
export default Header;