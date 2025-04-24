import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, UserRoundSearch, Group, Menu, X, Utensils } from "lucide-react";

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const navItems = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/members", label: "Total Members", icon: Group },
    { to: "/staff", label: "Staff Members", icon: UserRoundSearch },
    { to: "/menu", label: "Canteen Menu", icon: Utensils  },

  ];

  return (
    <>
      <button className="md:hidden fixed top-3 left-3 z-50 p-2 rounded-md bg-black text-white border border-orange-500" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}
      <nav className={`fixed md:fixed h-screen w-64 bg-black text-white flex flex-col justify-between py-10 px-6 border-r border-orange-700 z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="pt-20">
          <ul className="space-y-6">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink to={to} key={label} onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-orange-500 hover:bg-orange-600 transition-all font-semibold ${isActive ? "text-orange-400" : ""}`}>
                <Icon size={20} /> {label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="text-sm text-center text-white/60 border-t border-white/10 pt-6 pb-4">© 2025 PG Admin</div>
      </nav>
    </>
  );
};

export default Navi;
