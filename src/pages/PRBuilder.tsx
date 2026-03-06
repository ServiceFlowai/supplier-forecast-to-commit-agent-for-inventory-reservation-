import React, { useState } from 'react';

const PRBuilder = () => {
  const [prLines, setPrLines] = useState([
    { id: 1, item: 'SKU123', qty: 100, unitPrice: 10, deliveryDate: '2023-12-01' },
    { id: 2, item: 'SKU456', qty: 200, unitPrice: 15, deliveryDate: '2023-12-05' }
  ]);

  const handleSaveDraft = () => {
    console.log('Draft saved');
  };

  const handleSubmit = () => {
    console.log('Submitted to ERP');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">PR/PO Builder</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Item</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Unit Price</th>
            <th className="py-2">Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {prLines.map(line => (
            <tr key={line.id}>
              <td className="py-2">{line.item}</td>
              <td className="py-2">{line.qty}</td>
              <td className="py-2">{line.unitPrice}</td>
              <td className="py-2">{line.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSaveDraft} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Save Draft</button>
      <button onClick={handleSubmit} className="mt-4 ml-2 bg-green-500 text-white py-2 px-4 rounded">Submit to ERP</button>
    </div>
  );
};

export default PRBuilder;