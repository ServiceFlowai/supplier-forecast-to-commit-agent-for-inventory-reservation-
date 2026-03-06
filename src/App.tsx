import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PRBuilder from './pages/PRBuilder';
import Reservations from './pages/Reservations';
import SLAMonitoring from './pages/SLAMonitoring';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prs/new" element={<PRBuilder />} />
        <Route path="/prs/:id" element={<PRBuilder />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/monitoring/sla" element={<SLAMonitoring />} />
      </Routes>
    </div>
  );
};

export default App;