import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';

const Navi = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "HOME", to: "/" },
    { name: "LAYOUT", to: "/layout" },
    { name: "ABOUT", to: "/about" },
    { name: "CONTACT", to: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-black z-50 px-6 md:px-16 border-b border-[#f7931e]">
      <div className="flex items-center justify-between py-3 w-full">
        <img onClick={() => navigate('/')} className="w-32 h-20 cursor-pointer animate-pulse hover:animate-none transition-all duration-500 transform hover:scale-105" src={assets.logo} alt="Logo" />
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10 text-lg font-semibold tracking-wide">
            {navLinks.map(link => (
              <NavLink key={link.name} to={link.to} className={({ isActive }) => `relative py-2 transition duration-300 ${isActive ? 'text-[#f7931e]' : 'text-gray-300'} hover:text-white group`}>
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f7931e] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#f7931e]">{menuOpen ? <X size={30} /> : <Menu size={30} />}</button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden w-full flex flex-col items-center bg-black border-t border-[#f7931e] py-4 space-y-4">
          {navLinks.map(link => (
            <NavLink key={link.name} to={link.to} onClick={() => setMenuOpen(false)} className={({ isActive }) => `text-lg font-semibold transition duration-200 ${isActive ? 'text-[#f7931e]' : 'text-gray-300'} hover:text-white`}>
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navi;
