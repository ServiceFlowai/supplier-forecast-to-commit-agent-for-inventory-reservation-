import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ForecastShare from './pages/ForecastShare';
import SupplierCommitments from './pages/SupplierCommitments';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forecast-share" element={<ForecastShare />} />
      <Route path="/suppliers/:id/commitments" element={<SupplierCommitments />} />
    </Routes>
  );
}

export default App;