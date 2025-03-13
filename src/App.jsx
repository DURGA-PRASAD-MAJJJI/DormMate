import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Navi from "./Components/Navi";

const App = () => {
    return (
        <div>
            <Navi />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/layout" element={<Layout />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        
    );
};

export default App;
