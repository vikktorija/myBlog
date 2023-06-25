export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: post
  });

export const deletePost = (postId) => ({
  type: 'DELETE_POST',
  payload: postId,
});