import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Summary from "./Summary";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    address: "",
    message: "",
  });

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        {step === 1 && (
          <Step1
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 3 && (
          <Step3
            handleSubmit={() => setStep(4)} // Move to the Summary
            handleBack={handleBack}
          />
        )}
        {step === 4 && <Summary formData={formData} />}
      </div>
    </div>
  );
};

export default MultiStepForm;
