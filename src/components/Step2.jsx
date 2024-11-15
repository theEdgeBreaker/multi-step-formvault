import React from "react";

const Step2 = ({ formData, handleChange, handleNext, handleBack }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Message</h2>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter your message here"
        className="w-full border rounded-lg p-2 h-24"
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
