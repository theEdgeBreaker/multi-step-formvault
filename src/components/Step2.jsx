const Step2 = ({ formData, handleChange, handleNext, handleBack }) => {
  return (
    <div>
      <h2>Message</h2>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter your message here"
      ></textarea>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next Step</button>
    </div>
  );
};

export default Step2;
