import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navi = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full bg-black z-50 shadow-md px-6 md:px-16">
            <div className="flex items-center justify-between text-sm py- border-b border-b-[#f7931e] w-full">
                <img 
                    onClick={() => navigate('/')} 
                    className="w-40 h-32 cursor-pointer animate-pulse hover:animate-none transition-all duration-500" 
                    src={assets.logo} 
                    alt="Logo" 
                />
                <div className="flex flex-1 justify-center">
                    <ul className="hidden md:flex items-center gap-10 text-xl transform -translate-x-6 justify-center w-full">
                        <NavLink to="/"><li className="py-2 text-lg">HOME</li></NavLink>
                        <NavLink to="/layout"><li className="py-2 text-lg">LAYOUT</li></NavLink>
                        <NavLink to="/about"><li className="py-2 text-lg">ABOUT</li></NavLink>
                        <NavLink to="/contact"><li className="py-2 text-lg">CONTACT</li></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navi;
