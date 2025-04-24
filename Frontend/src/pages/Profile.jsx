import React from 'react';
import { assets } from '../assets/assets';

const Profile = () => {
  const user = {
    name: "John Doe",
    phone: "+91 9876543210",
    age: 22,
    profession: "Student",
    floor: 2,
    room: 204,
    joined: "Jan 12, 2024",
    status: "Active",
    image: assets.logo,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-400 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl backdrop-blur-xl bg-white/80 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row gap-10 transition-all">
        
        {/* Left Section - Profile Picture & Basic Info */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left">
          <img
            src={user.image}
            alt="Profile"
            className="w-44 h-44 rounded-2xl border-4 border-primary object-cover shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.profession}</p>
          <span className="mt-2 inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
            {user.status} Member
          </span>
        </div>

        {/* Right Section - Detailed Info */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Profile Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">

            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-medium">{user.phone}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-medium">{user.age}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Floor</p>
              <p className="font-medium">Floor {user.floor}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Room</p>
              <p className="font-medium">Room {user.room}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Joined</p>
              <p className="font-medium">{user.joined}</p>
            </div>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-primary  text-white font-semibold rounded-lg shadow-md transition-all duration-200 ease-in-out">
              Edit Profile
            </button>
            <button className="px-6 py-3 border border-primary text-primary hover:bg-green-50 font-semibold rounded-lg transition-all duration-200 ease-in-out">
              Message Admin
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
