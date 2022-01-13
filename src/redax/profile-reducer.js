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
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        like: 0,
      };
      state.posts.push(newPost);

      state.newPostText = "";
      return state;
    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export const updatePostTexttActionCreator = (text) => {
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
