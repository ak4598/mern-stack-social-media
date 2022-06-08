import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_POST,
  FETCH_BY_SEARCH,
  LIKE,
  COMMENT,
  START_LOADING,
  END_LOADING,
} from "../constant/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_POST:
      return { ...state, post: action.payload.post };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numOfPages: action.payload.numOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          // return all the other posts normally
          // change the post that just received a comment
          if (post._id === action.payload._id) return action.payload;
          return post;
        }),
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      // action.payload is updated post, post is newly created post
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
