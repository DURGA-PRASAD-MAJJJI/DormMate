import React from 'react';
import { assets } from '../assets/assets';
import PopUp from '../Components/PopUp';

const Contact = () => {
  return (
    <div className="bg-black-50 py-16 px-6 md:px-12"> {/* Added mt-32 to push content below the navbar */}
      <div className="text-center text-4xl font-bold text-gray-400">
        <p>CONTACT <span className="text-primary">US</span></p>
      </div>

      <div className="my-12 flex flex-col md:flex-row items-center gap-12">
        <img className="w-full md:max-w-[500px] lg:max-w-[600px] h-[700px] rounded-3xl shadow-lg object-cover" src={assets.landing_bg1} alt="Contact Us" />
        
        <div className="md:w-1/2 flex flex-col items-start gap-6 text-gray-400">
          <p className="font-semibold text-2xl text-gray-400">OUR HOSTEL</p>
          <p className="text-lg text-gray-600 leading-relaxed">MG Road <br /> Bengaluru, Karnataka</p>
          
          <p className="font-semibold text-2xl text-gray-400">GET IN TOUCH</p>
          <p className="text-lg text-gray-500 leading-relaxed">Tel: (123) 456-7890 <br /> Email: <a href="mailto:DormMate@gmail.com" className="text-primary font-semibold hover:underline">DormMate@gmail.com</a></p>

          <p className="font-semibold text-2xl text-gray-400">JOIN OUR COMMUNITY</p>
          <p className="text-lg text-gray-500 leading-relaxed">Looking for a vibrant and comfortable stay? Explore our hostel facilities.</p>
          <button className="px-8 py-3 text-lg font-medium border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300">Book a Room</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
