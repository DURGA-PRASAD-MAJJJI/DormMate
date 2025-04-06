import React from 'react'
// import Header from '../Components/Header'
import Below from '../Components/Below'
import Menu from '../Components/Menu'
// import Lay from '../Components/Lay'
import Landingpage from '../Components/Landingpage'
import Facilities from '../Components/Facilities'
import L1 from '../Components/L1'
import PopUp from '../Components/PopUp'
import Canteen from '../Components/Canteen'

const Home = () => {
  return (
    <div>
      <Landingpage/>
      <Facilities/>
      <L1/>
      {/* <Menu/> */}
      <PopUp/>
      {/* <Page1/> */}
      <Canteen/>
      <Below />
    </div>
  )
}

export default Home