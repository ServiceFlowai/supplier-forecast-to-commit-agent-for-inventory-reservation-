import React from 'react';

const Integrations: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Integrations</h1>
      <p>Configure and monitor your system integrations here.</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Connector Health</h2>
        <ul>
          <li>ERP Connector: <span className="text-green-500">Healthy</span></li>
          <li>APS/IBP Connector: <span className="text-yellow-500">Warning</span></li>
          <li>SRM/Supplier Portal: <span className="text-red-500">Error</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Integrations;