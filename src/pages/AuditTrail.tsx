import React from 'react';

const auditData = [
  { id: 1, action: 'Forecast Sent', user: 'John Doe', timestamp: '2023-10-01 10:00:00' },
  { id: 2, action: 'PR Created', user: 'Jane Smith', timestamp: '2023-10-02 11:30:00' },
  { id: 3, action: 'Reservation Changed', user: 'John Doe', timestamp: '2023-10-03 09:15:00' },
];

const AuditTrail: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Audit Trail</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Action</th>
            <th className="py-2">User</th>
            <th className="py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {auditData.map((entry) => (
            <tr key={entry.id}>
              <td className="py-2">{entry.action}</td>
              <td className="py-2">{entry.user}</td>
              <td className="py-2">{entry.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditTrail;