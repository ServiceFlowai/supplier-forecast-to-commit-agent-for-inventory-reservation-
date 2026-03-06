import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Manual Follow-up Time</h2>
          <p className="text-2xl">12h</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">OTIF Improvement</h2>
          <p className="text-2xl">+10%</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Active Reservations</h2>
          <p className="text-2xl">25</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Pending PR/PO Confirmations</h2>
          <p className="text-2xl">8</p>
        </div>
      </div>
      <div className="mt-6">
        <Link to="/prs/new" className="text-blue-500 hover:underline">Create New PR</Link>
      </div>
    </div>
  );
};

export default Dashboard;