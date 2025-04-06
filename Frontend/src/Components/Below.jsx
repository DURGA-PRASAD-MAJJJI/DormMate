import React from 'react';
import { assets } from '../assets/assets';

const Below = () => {
    return (
        <div className="w-full md:mx-10 text-gray-700">
            <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-10 my-10 mt-28 text-xs sm:text-sm">
                <div>
                    <img className="mb-4 w-32" src={assets.logo} alt="Logo" />
                    <p className="w-full md:w-3/4 leading-5 text-gray-500">DormMate ensures efficient and timely access to essential PG and hostel services, reducing wait times and providing flexibility in managing requests. Automated reminders and easy rescheduling make living in a hostel or PG more convenient and hassle-free for students and working professionals alike.</p>
                </div>
                <div>
                    <p className="text-lg font-semibold mb-4 text-gray-800">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        <li className="hover:text-gray-900 cursor-pointer">Home</li>
                        <li className="hover:text-gray-900 cursor-pointer">About</li>
                        <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
                        <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold mb-4 text-gray-800">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        <li>Tel: (000) 000-0000</li>
                        <li>Email: dormmate@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="text-center border-t border-[#f7931e] pt-5 text-xs text-gray-500">
                <p>© 2025 DormMate - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Below;
