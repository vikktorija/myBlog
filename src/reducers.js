const initialState  = {
    posts: [],
  };
  
  export const postReducer = (state = initialState , action) => {
    switch (action.type) {
      case 'ADD_POST':
        return {
          ...state,
          posts: [...state.posts, action.payload]
        };
      case 'SET_POSTS':
        return {
          ...state,
          posts: action.payload
        };
      default:
        return state;
    }    
  };