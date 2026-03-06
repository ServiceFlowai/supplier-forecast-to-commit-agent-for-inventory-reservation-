import React from 'react';
import { useParams } from 'react-router-dom';

const SupplierCommitments = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Supplier Commitments for {id}</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Forecasts</h2>
        {/* Forecasts UI */}
      </div>
      <div className="bg-white p-4 rounded shadow mt-4">
        <h2 className="text-lg font-semibold">Proposed Reservations</h2>
        {/* Proposed Reservations UI */}
      </div>
      <div className="bg-white p-4 rounded shadow mt-4">
        <h2 className="text-lg font-semibold">Commitments</h2>
        {/* Commitments UI */}
      </div>
      <div className="bg-white p-4 rounded shadow mt-4">
        <h2 className="text-lg font-semibold">Negotiation Chat</h2>
        {/* Negotiation Chat UI */}
      </div>
    </div>
  );
};

export default SupplierCommitments;