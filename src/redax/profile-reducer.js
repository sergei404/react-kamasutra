const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

let initialState = {
  newPostText: "it",
  posts: [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, totam.",
      like: 5,
    },
    {
      id: 2,
      message: "Lorem iamet consectetur adipisicing elit.",
      like: 12,
    },
  ],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts, 
          {
            id: state.posts.length + 1,
            message: state.newPostText,
            like: 0,
          }
        ],
        newPostText: ""
      }
    case CHANGE_NEW_POST_TEXT:
      return {
        ...state, 
        newPostText: action.text
      }
    default:
      return state;
  }
};

export const updatePostTextActionCreator = (text) => {
  return {
    type: CHANGE_NEW_POST_TEXT,
    text,
  };
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
