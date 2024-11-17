import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Summary = ({ formData }) => {
  useEffect(() => {
    // Save the submitted formData to localStorage when the component loads
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = [...savedPosts, formData];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  }, [formData]);

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
      <Link
        to="/all-posts"
        className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-center"
      >
        View All Posts
      </Link>
    </div>
  );
};

export default Summary;
