import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navi = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full bg-black z-50 shadow-lg px-6 md:px-16 border-b border-b-[#f7931e]">
            <div className="flex items-center justify-between py-3 w-full">
                <img onClick={() => navigate('/')} className="w-36 h-28 cursor-pointer animate-pulse hover:animate-none transition-all duration-500 transform hover:scale-105" src={assets.logo} alt="Logo" />
                <div className="flex flex-1 justify-center">
                    <ul className="hidden md:flex items-center gap-10 text-lg font-semibold tracking-wide transform -translate-x-6 justify-center w-full">
                        <NavLink to="/" className={({ isActive }) => `relative py-2 transition duration-300 ${isActive ? 'text-[#f7931e]' : 'text-gray-300'} hover:text-white group`}>
                            HOME<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f7931e] transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                        <NavLink to="/layout" className={({ isActive }) => `relative py-2 transition duration-300 ${isActive ? 'text-[#f7931e]' : 'text-gray-300'} hover:text-white group`}>
                            LAYOUT<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f7931e] transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => `relative py-2 transition duration-300 ${isActive ? 'text-[#f7931e]' : 'text-gray-300'} hover:text-white group`}>
                            ABOUT<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f7931e] transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `relative py-2 transition duration-300 ${isActive ? 'text-[#f7931e]' : 'text-gray-300'} hover:text-white group`}>
                            CONTACT<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f7931e] transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navi;
