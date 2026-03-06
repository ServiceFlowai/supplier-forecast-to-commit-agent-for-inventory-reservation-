import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import AuditTrail from './pages/AuditTrail';
import Integrations from './pages/Integrations';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/audit-trail" element={<AuditTrail />} />
        <Route path="/integrations" element={<Integrations />} />
      </Routes>
    </div>
  );
};

export default App;