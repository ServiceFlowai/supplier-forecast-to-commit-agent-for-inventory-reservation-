import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setFilters } from '../store/slices/dashboardSlice';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { LucideIcon } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { filters, kpis } = useSelector((state: RootState) => state.dashboard);

  const handleFilterChange = (newFilters: any) => {
    dispatch(setFilters(newFilters));
  };

  const data = [
    { name: 'Jan', forecast: 4000, committed: 2400, shipped: 2400, inventory: 2400 },
    { name: 'Feb', forecast: 3000, committed: 1398, shipped: 2210, inventory: 2290 },
    { name: 'Mar', forecast: 2000, committed: 9800, shipped: 2290, inventory: 2000 },
    { name: 'Apr', forecast: 2780, committed: 3908, shipped: 2000, inventory: 2181 },
    { name: 'May', forecast: 1890, committed: 4800, shipped: 2181, inventory: 2500 },
    { name: 'Jun', forecast: 2390, committed: 3800, shipped: 2500, inventory: 2100 },
    { name: 'Jul', forecast: 3490, committed: 4300, shipped: 2100, inventory: 2300 },
  ];

  return (
    <div className="flex">
      <aside className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-lg font-bold">Filters</h2>
        {/* Filters UI */}
      </aside>
      <main className="w-3/4 p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-sm font-semibold">Manual Follow-up Time</h3>
              <p className="text-xl">{kpis.manualFollowUpTime} hrs</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-sm font-semibold">OTIF</h3>
              <p className="text-xl">{kpis.otif}%</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-sm font-semibold">Active Reservations</h3>
              <p className="text-xl">{kpis.activeReservations}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-sm font-semibold">Pending Confirmations</h3>
              <p className="text-xl">{kpis.pendingConfirmations}</p>
            </div>
          </div>
        </div>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="forecast" stroke="#8884d8" />
          <Line type="monotone" dataKey="committed" stroke="#82ca9d" />
          <Line type="monotone" dataKey="shipped" stroke="#ffc658" />
          <Line type="monotone" dataKey="inventory" stroke="#ff7300" />
        </LineChart>
      </main>
    </div>
  );
};

export default Dashboard;