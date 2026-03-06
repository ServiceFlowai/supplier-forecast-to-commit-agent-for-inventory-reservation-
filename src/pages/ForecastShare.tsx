import React, { useState } from 'react';

const ForecastShare = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Supplier Forecast Sharing</h1>
      <div className="bg-white p-4 rounded shadow">
        {step === 1 && (
          <div>
            <h2 className="text-lg font-semibold">Step 1: Select Suppliers & SKUs</h2>
            {/* Supplier & SKU selection UI */}
            <button onClick={nextStep} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-lg font-semibold">Step 2: Select Forecast Horizon & Frequency</h2>
            {/* Forecast horizon & frequency UI */}
            <button onClick={prevStep} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Back</button>
            <button onClick={nextStep} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-lg font-semibold">Step 3: Edit & Annotate Forecast Lines</h2>
            {/* Editable forecast grid UI */}
            <button onClick={prevStep} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Back</button>
            <button onClick={nextStep} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-lg font-semibold">Step 4: Choose Distribution Channels</h2>
            {/* Distribution channel selection UI */}
            <button onClick={prevStep} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Back</button>
            <button onClick={nextStep} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2 className="text-lg font-semibold">Step 5: Preview & Send</h2>
            {/* Preview & send UI */}
            <button onClick={prevStep} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Back</button>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Send</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForecastShare;