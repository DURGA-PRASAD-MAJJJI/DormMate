import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashbord';
import Staff from './pages/Staff';
import MembersPage from './pages/MembersPage';
import Menu from './pages/Menu'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="staff" element={<Staff />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
