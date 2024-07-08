import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostsDisplay from './components/postsDisplay/PostsDisplay.js';
import CreatePost from './components/createPost/CreatePost.js';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const handlePostCreated = (newPost) => {
    if (editingPost) {
      setPosts(posts.map(post => (post.id === newPost.id ? newPost : post)));
      setEditingPost(null);
    } else {
      setPosts([...posts, newPost]);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <Router>
      <div className="App">
        <h1>WYLO Assignment</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create-post" className="nav-link">Create Post</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<PostsDisplay posts={posts} onEdit={handleEdit} onDelete={handleDelete} />}
          />
          <Route
            path="/create-post"
            element={<CreatePost onPostCreated={handlePostCreated} editingPost={editingPost} />}
          />
          <Route
            path="/edit-post"
            element={<CreatePost onPostCreated={handlePostCreated} editingPost={editingPost} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
