import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Notifications from './pages/Notifications';
import Templates from './pages/Templates';
import './styles/tailwind.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings/users" element={<Users />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings/templates" element={<Templates />} />
      </Routes>
    </div>
  );
}

export default App;