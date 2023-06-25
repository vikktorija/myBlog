import news from './data/News'

const initialState  = {
    posts: news,
  };
  
  export const postReducer = (state = initialState , action) => {
    switch (action.type) {
      case 'ADD_POST':
        const newPost = action.payload;
        return {
          ...state,
          posts: [...state.posts, newPost]
        }
      case 'DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== newPost),
        };
      default:
        return state;
    }    
  };