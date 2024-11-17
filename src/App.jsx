import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm";
import Summary from "./components/Summary";
import AllPosts from "./components/AllPosts";

const App = () => {
  // Initialize posts from localStorage
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // Sync posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // Add a new post to the list
  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiStepForm addPost={addPost} />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/all-posts" element={<AllPosts />} />
      </Routes>
    </Router>
  );
};

export default App;
