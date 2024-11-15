import React from "react";

const Summary = ({ formData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Summary</h2>
      <p>
        <strong>Name:</strong> {formData.firstName} {formData.lastName}
      </p>
      <p>
        <strong>Mobile Number:</strong> {formData.mobileNumber}
      </p>
      <p>
        <strong>Email:</strong> {formData.emailAddress}
      </p>
      <p>
        <strong>Address:</strong> {formData.address}
      </p>
      <p>
        <strong>Message:</strong> {formData.message}
      </p>
    </div>
  );
};

export default Summary;
