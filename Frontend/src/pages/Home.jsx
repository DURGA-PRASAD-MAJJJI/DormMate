import React from 'react';
import Landingpage from '../Components/Landingpage';
import Facilities from '../Components/Facilities';
import L1 from '../Components/L1';
import Canteen from '../Components/Canteen';

const Home = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Landingpage />
      <Facilities />
      <L1 />
      <Canteen />
    </div>
  );
};

export default Home;
