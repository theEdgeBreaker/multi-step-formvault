const Step1 = ({ formData, handleChange, handleNext }) => {
  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="tel"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        placeholder="Mobile Number"
      />
      <input
        type="email"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="Email Address"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <button onClick={handleNext}>Next Step</button>
    </div>
  );
};

export default Step1;
