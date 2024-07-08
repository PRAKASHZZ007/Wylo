// src/components/createPost/CreatePost.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './CreatePost.css';

const CreatePost = ({ onPostCreated, editingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      const newPost = editingPost
        ? { ...editingPost, title, content }
        : { id: uuidv4(), title, content };
      onPostCreated(newPost);
      setMessage('Post saved successfully!');
      setTitle('');
      setContent('');
      navigate('/');
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-button">
        {editingPost ? 'Save Post' : 'Create Post'}
      </button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default CreatePost;