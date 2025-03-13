import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navi = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#f7931e] w-full">
            <img onClick={() => navigate('/')} className="w-40 h-32 cursor-pointer animate-pulse hover:animate-none transition-all duration-500" src={assets.logo} alt="Logo" />
            <div className="flex flex-1 justify-center">
                <ul className="hidden md:flex items-center gap-10 text-xl  transform -translate-x-6 justify-center w-full">
                    <NavLink to="/"><li className="py-2 text-lg">HOME</li><hr className="border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden" /></NavLink>
                    <NavLink to="/layout"><li className="py-2 text-lg">LAYOUT</li><hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" /></NavLink>
                    <NavLink to="/about"><li className="py-2 text-lg">ABOUT</li><hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" /></NavLink>
                    <NavLink to="/contact"><li className="py-2 text-lg">CONTACT</li><hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" /></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navi;
