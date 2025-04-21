import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, UserPlus, Menu, X, User2Icon, UserCircle2Icon, UserCog, User2, UserCheckIcon, UserMinus2, UserRoundIcon, UserRoundSearch, GrabIcon, Group, GroupIcon, LucideGroup } from "lucide-react";

const Navi = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
        window.addEventListener('resize', handleResize);
        return () => { document.body.style.overflow = 'auto'; window.removeEventListener('resize', handleResize); };
    }, [isOpen]);

    return (
        <>
            <button className="md:hidden fixed top-3 left-3 z-50 p-2 rounded-md bg-black text-white border border-orange-500" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
            {isOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />}
            <nav className={`fixed md:fixed h-screen w-64 bg-black text-white flex flex-col justify-between py-10 px-6 border-r border-orange-700 z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
                <div className="pt-20">
                    <ul className="space-y-6">
                        <NavLink to="/dashboard" onClick={() => { setIsOpen(false); setActiveItem('dashboard'); }}>
                            <li className={`flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-orange-500 hover:bg-orange-600 cursor-pointer transition-all font-semibold ${activeItem === 'dashboard' ? 'text-orange-400' : ''}`}><LayoutDashboard size={20} /> Dashboard</li>
                        </NavLink>
                        <div className="h-px bg-white/10 mx-2"></div>
                        <NavLink to="/members" onClick={() => { setIsOpen(false); setActiveItem('members'); }}>
                            <li className={`flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-orange-500 hover:bg-orange-600 cursor-pointer transition-all font-semibold ${activeItem === 'TotalMembers' ? 'text-orange-400' : ''}`}><Group size={20} />Total Members</li>
                        </NavLink>
                        <div className="h-px bg-white/10 mx-2"></div>
                        <NavLink to="/staff" onClick={() => { setIsOpen(false); setActiveItem('Staff'); }}>
                        <li className={`flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-orange-500 hover:bg-orange-600 cursor-pointer transition-all font-semibold ${activeItem === 'Staff' ? 'text-orange-400' : ''}`}><UserRoundSearch size={20} /> Staff Members</li></NavLink>
                    </ul>
                </div>
                <div className="text-sm text-center text-white/60 border-t border-white/10 pt-6 pb-4">© 2025 PG Admin</div>
            </nav>
        </>
    );
};
export default Navi;