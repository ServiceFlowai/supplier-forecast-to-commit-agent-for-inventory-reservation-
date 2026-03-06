import React, { useState } from 'react';

const PRBuilder = () => {
  const [prLines, setPrLines] = useState([
    { id: 1, sku: 'SKU123', qty: 100, price: 10.0, deliveryDate: '2023-12-01' },
    { id: 2, sku: 'SKU456', qty: 200, price: 15.0, deliveryDate: '2023-12-05' },
  ]);

  const handleSubmit = () => {
    // Simulate API call to create PR
    console.log('Submitting PR:', prLines);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">PR Builder</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">SKU</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Unit Price</th>
            <th className="py-2">Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {prLines.map(line => (
            <tr key={line.id}>
              <td className="py-2">{line.sku}</td>
              <td className="py-2">{line.qty}</td>
              <td className="py-2">{line.price}</td>
              <td className="py-2">{line.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Submit PR
      </button>
    </div>
  );
};

export default PRBuilder;