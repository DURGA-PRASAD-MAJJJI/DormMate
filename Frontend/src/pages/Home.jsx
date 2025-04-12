import React from 'react';
import Below from '../Components/Below';
import Landingpage from '../Components/Landingpage';
import Facilities from '../Components/Facilities';
import L1 from '../Components/L1';
import PopUp from '../Components/PopUp';
import Canteen from '../Components/Canteen';

const Home = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-black text-white">
      <Landingpage />
      <Facilities />
      <L1 />
      <PopUp />
      <Canteen />
      <Below />
    </div>
  );
};

export default Home;
