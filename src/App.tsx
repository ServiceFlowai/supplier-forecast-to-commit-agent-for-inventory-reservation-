import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PRBuilder from './pages/PRBuilder';
import './styles/tailwind.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prs/new" element={<PRBuilder />} />
        <Route path="/prs/:id" element={<PRBuilder />} />
      </Routes>
    </div>
  );
}

export default App;