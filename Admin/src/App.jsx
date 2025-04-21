import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashbord';
import Staff from './pages/Staff';
import MembersPage from './pages/MembersPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="staff" element={<Staff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
