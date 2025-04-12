import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navi from './componets/Navi';
import Header from './componets/Header';
import Dashboard from './pages/Dashbord';
import Home from './pages/Home';
import AddMember from './componets/AddMember';
import Staff from './componets/Staff';

const App = () => {
  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-member" element={<AddMember />} />
                <Route path="/staff" element={<Staff/>} />

              </Route>
              
            </Routes>
          </BrowserRouter>
    </>
    
  );
};

export default App;
