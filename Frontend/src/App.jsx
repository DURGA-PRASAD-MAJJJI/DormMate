import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navi from "./Components/Navi";
import Floor from "./Components/Floor";
import PopUp from "./Components/PopUp";
import Room from "./Components/Room";
import Profile from "./pages/Profile";
import Canteen from "./Components/Canteen";

const App = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navi />
            <div className="pt-[100px] px-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/layout" element={<Layout />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/popup" element={<PopUp />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/canteen" element={<Canteen />} />
                    <Route path="/floor/:floorId" element={<FloorWrapper />} />
                    <Route path="/room/:roomId" element={<Room />} />
                </Routes>
            </div>
        </div>
    );
};

const FloorWrapper = () => {
    const { floorId } = useParams();
    const startRoom = (parseInt(floorId) - 1) * 9 + 1;
    return <Floor floor={floorId} startRoom={startRoom} />;
};

export default App;
