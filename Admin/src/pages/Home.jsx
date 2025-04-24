import React from 'react'
import Navi from '../componets/Navi'
import Header from '../componets/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </header>
      <Navi/>
            <main className="pt-16 min-h-screen"> {/* pt-16 matches header height */}
        <Outlet /> {/* This will render your Dashboard component */}
      </main>
    </div>
  )
}

export default Home
