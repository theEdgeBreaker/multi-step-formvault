import React from "react";

const Step3 = ({ handleSubmit, handleBack }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Confirm Submission</h2>
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          No, I don’t want to submit
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Yes, I want to submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
