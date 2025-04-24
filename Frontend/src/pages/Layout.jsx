import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-4 pt-28 pb-10 space-y-10 relative">
      {/* Canteen Section */}
      <div onClick={() => navigate('/canteen')} className="relative cursor-pointer bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row w-[95%] md:h-[58vh] border border-gray-500 transition-transform duration-300 hover:scale-[1.02]">
        <div className="w-full md:w-1/2 h-[38vh] md:h-full">
          <img src={assets.r1} alt="Canteen Area" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-white text-center md:text-left">
          <h1 className="text-3xl font-extrabold mb-4 text-amber-400 drop-shadow-lg">Canteen Area</h1>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">A hostel canteen is a lively dining space where students enjoy affordable, hygienic, and nutritious meals. It fosters social interactions, community bonding, and a relaxed atmosphere.</p>
        </div>
      </div>

      {/* Rooms Available Section */}
      <div onClick={() => navigate('/popup')} className="relative cursor-pointer bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row w-[95%] md:h-[58vh] border border-gray-500 transition-transform duration-300 hover:scale-[1.02]">
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-white text-center md:text-left">
          <h1 className="text-3xl font-extrabold mb-4 text-green-400 drop-shadow-lg">Rooms Available</h1>
          <div className="text-gray-300 space-y-3 text-sm md:text-base">
            <p><span className="font-semibold text-blue-300">3 Sharing Room:</span> 200 sq.ft – ₹8,000/month</p>
            <p><span className="font-semibold text-purple-300">4 Sharing Room:</span> 250 sq.ft – ₹6,500/month</p>
            <p><span className="font-semibold text-red-400">Single Room:</span> 150 sq.ft – ₹12,000/month</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[38vh] md:h-full overflow-x-auto flex space-x-2 p-2 scrollbar-hide">
          {[assets.bg4, assets.bg2, assets.bg3].map((img, idx) => (
            <img key={idx} src={img} alt={`Room Type ${idx + 1}`} className="min-w-[75%] md:min-w-[28%] h-full rounded-lg object-cover shadow-lg transition-transform duration-500 hover:scale-110" />
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className="relative bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row w-[95%] md:h-[58vh] border border-gray-500 transition-transform duration-300 hover:scale-[1.02]">
        <div className="w-full md:w-1/2 h-[38vh] md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1843230436234!2d81.76479027500115!3d17.006503083817183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a412a3f0fead%3A0xd98bbbf2597a3f89!2sRajahmundry%20Lalacheruvu%20Rd%2C%20Mangalavaripeta%2C%20Rajamahendravaram%2C%20Andhra%20Pradesh%20533101!5e1!3m2!1sen!2sin!4v1743098135756!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hostel Location"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-white text-center md:text-left">
          <h1 className="text-3xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg">Location</h1>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">Find our hostel in a prime location, ensuring accessibility and convenience for all residents.</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
