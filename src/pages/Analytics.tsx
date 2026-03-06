import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', forecast: 4000, committed: 2400, shipped: 2400, inventory: 2000 },
  { name: 'Feb', forecast: 3000, committed: 1398, shipped: 2210, inventory: 2500 },
  { name: 'Mar', forecast: 2000, committed: 9800, shipped: 2290, inventory: 3000 },
  { name: 'Apr', forecast: 2780, committed: 3908, shipped: 2000, inventory: 3500 },
  { name: 'May', forecast: 1890, committed: 4800, shipped: 2181, inventory: 4000 },
  { name: 'Jun', forecast: 2390, committed: 3800, shipped: 2500, inventory: 4500 },
  { name: 'Jul', forecast: 3490, committed: 4300, shipped: 2100, inventory: 5000 },
];

const Analytics: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="forecast" stroke="#8884d8" />
        <Line type="monotone" dataKey="committed" stroke="#82ca9d" />
        <Line type="monotone" dataKey="shipped" stroke="#ffc658" />
        <Line type="monotone" dataKey="inventory" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

export default Analytics;