import React, { useState } from 'react';

const Reservations = () => {
  const [reservations, setReservations] = useState([
    { id: 1, supplier: 'Supplier A', sku: 'SKU123', qty: 100, type: 'VMI', status: 'Active', dateRange: '2023-11-01 to 2023-12-01' },
    { id: 2, supplier: 'Supplier B', sku: 'SKU456', qty: 200, type: 'Consignment', status: 'Pending', dateRange: '2023-11-15 to 2023-12-15' }
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Reservations</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Supplier</th>
            <th className="py-2">SKU</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Type</th>
            <th className="py-2">Status</th>
            <th className="py-2">Date Range</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td className="py-2">{reservation.supplier}</td>
              <td className="py-2">{reservation.sku}</td>
              <td className="py-2">{reservation.qty}</td>
              <td className="py-2">{reservation.type}</td>
              <td className="py-2">{reservation.status}</td>
              <td className="py-2">{reservation.dateRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;