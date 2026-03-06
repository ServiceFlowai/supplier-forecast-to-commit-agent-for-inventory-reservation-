import React, { useState } from 'react';

const Templates = () => {
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Order Confirmation', content: 'Your order has been confirmed.' },
    { id: 2, name: 'Shipment Notification', content: 'Your shipment is on the way.' }
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Template Management</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Content</th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template) => (
            <tr key={template.id}>
              <td className="py-2">{template.name}</td>
              <td className="py-2">{template.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Templates;