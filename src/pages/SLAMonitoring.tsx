import React, { useState } from 'react';

const SLAMonitoring = () => {
  const [slaData, setSlaData] = useState([
    { supplier: 'Supplier A', responseTime: '24h', slaCompliance: '95%', unconfirmedPRs: '5%' },
    { supplier: 'Supplier B', responseTime: '48h', slaCompliance: '90%', unconfirmedPRs: '10%' }
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">SLA Monitoring</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Supplier</th>
            <th className="py-2">Response Time</th>
            <th className="py-2">SLA Compliance</th>
            <th className="py-2">Unconfirmed PRs</th>
          </tr>
        </thead>
        <tbody>
          {slaData.map((data, index) => (
            <tr key={index}>
              <td className="py-2">{data.supplier}</td>
              <td className="py-2">{data.responseTime}</td>
              <td className="py-2">{data.slaCompliance}</td>
              <td className="py-2">{data.unconfirmedPRs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SLAMonitoring;