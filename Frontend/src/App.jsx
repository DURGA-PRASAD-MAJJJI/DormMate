import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navi from "./Components/Navi";
import Page1 from "./Components/Page1"; 
import PopUp from "./Components/PopUp";
import Room from "./Components/Room";
import Profile from "./pages/Profile";

const App = () => {
    return (
        <div>
            <Navi />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/layout" element={<Layout />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/popup" element={<PopUp/>}/>
                <Route path='/Profile' element={<Profile />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/room/:id" element={<Room/>}/>
            </Routes>
        </div>
    );
};

export default App;
