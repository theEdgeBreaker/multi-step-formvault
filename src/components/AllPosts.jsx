import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  // Filter posts based on search query
  const filteredPosts = posts.filter(
    (post) =>
      post.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.emailAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchParams({ query });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search posts..."
        className="w-full border rounded-lg p-2 mb-4"
      />
      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredPosts.map((post, index) => (
            <li key={index} className="border rounded-lg p-4 bg-gray-100">
              <p>
                <strong>Name:</strong> {post.firstName} {post.lastName}
              </p>
              <p>
                <strong>Email:</strong> {post.emailAddress}
              </p>
              <p>
                <strong>Message:</strong> {post.message}
              </p>
            </li>
          ))}
        </ul>
      )}
      <Link
        to="/"
        className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-center"
      >
        Back to Multi-Step Form
      </Link>
    </div>
  );
};

export default AllPosts;
