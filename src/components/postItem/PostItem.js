// src/components/createPost/CreatePost.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostItem.css';

const PostItem = ({ post, onEdit ,onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    onEdit(post);
    navigate('/edit-post');
  };

  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleEdit} className="edit-button">
        Edit
      </button>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default PostItem;