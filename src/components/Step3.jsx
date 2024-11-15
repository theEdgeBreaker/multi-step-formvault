const Step3 = ({ handleSubmit, handleBack }) => {
  return (
    <div>
      <h2>Confirm Submission</h2>
      <button onClick={handleBack}>No, I don’t want to submit</button>
      <button onClick={handleSubmit}>Yes, I want to submit</button>
    </div>
  );
};

export default Step3;
