import React from 'react';
import PopUp from '../Components/PopUp';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-6 md:px-12 mt-32">
      <div className="text-center text-3xl md:text-5xl font-bold pt-10 text-gray-900">
        <p>About <span className="text-primary">Us</span></p>
      </div>
      <div className="my-12 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex flex-col justify-center gap-6 text-lg text-gray-700">
          <p className="text-xl leading-relaxed">
            Welcome to <b className="text-gray-900">DormMate</b>, your home away from home! We provide a comfortable, secure, and friendly living environment designed to support students and working professionals. At DormMate, we believe that a hostel should be more than just a place to stay—it should be a community where you can thrive.
          </p>
          <p className="text-xl leading-relaxed">
            <b className="text-gray-900">DormMate</b> is dedicated to offering top-quality accommodations with modern amenities, ensuring a hassle-free living experience. From spacious rooms to a vibrant canteen, high-speed WiFi, and 24/7 security, we strive to create an atmosphere where residents feel safe, connected, and comfortable.
          </p>
          <b className="text-gray-900 text-3xl">Our Vision</b>
          <p className="text-xl leading-relaxed">
            At <b className="text-gray-900">DormMate</b>, our vision is to redefine hostel living by providing an inclusive and welcoming space for students and professionals. We aim to foster a sense of belonging and convenience, making sure every resident enjoys a perfect balance of privacy, comfort, and community engagement.
          </p>
        </div>
        <div>
          <img className="w-full max-w-xs sm:max-w-sm md:max-w-[520px] h-[520px] rounded-3xl shadow-xl object-cover" src={assets.c} alt="About Us"/>
        </div>
      </div>
      <div><PopUp/></div>
    </div>
  );
};

export default About;
