/* src/components/postItem/PostItem.js */
import React from 'react';
import PostItem from '../postItem/PostItem';
import './PostsDisplay.css';

const PostsDisplay = ({ posts, onEdit ,onDelete }) => {
  return (
    <div className="posts-display">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostsDisplay;