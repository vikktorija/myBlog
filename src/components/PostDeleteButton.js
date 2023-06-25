import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions';

const PostDeleteButton = ({ postId }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deletePost(postId));
  };

  return (
    <div className='delete-btn'>
        <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default PostDeleteButton;