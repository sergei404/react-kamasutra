import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'


let store = {

  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Andrei" },
        { id: 2, name: "Sergei" },
        { id: 3, name: "Anna" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Misha" },
      ],
      messages: [
        {id: 1, message: "Lorem ipsum dolor sit amet."},
        {id: 2, message: "Lorem ipsum, dolor sit amet consectetur adipisicing."},
        {id: 3, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      ],
      newMessageIext: 'xcdefrgt'
    },
    profilePage: {
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
        like: 12 
      },
    ],}
    
    
  },

  _subscribe() {
    console.log("no subscribers (observers)");
  },

  getState() {
      return this._state;
  },
  
  subscribe(observer) {
    this._subscribe = observer;
  },

  // addPostsValue() {
  //   if (!this._state.newPostText) {
  //     return
  //   }
  //   let newPost = {
  //     id: this._state.posts.length + 1,
  //     message: this._state.newPostText,
  //     like: 0,
  //   }
  //   this._state.posts.push(newPost);
    
  //   this._subscribe(this._state);
    
  //   this._state.newPostText = "";
  // },

  // changeNewPostText(text) {
  //   this._state.newPostText = text;
    
  //   this._subscribe(this._state);
  // },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._subscribe(this._state);
    // switch(action.type) {
    //   case ADD_POST:
    //     if (!this._state.profilePage.newPostText) {
    //       return
    //     }
    //     let newPost = {
    //       id: this._state.profilePage.posts.length + 1,
    //       message: this._state.profilePage.newPostText,
    //       like: 0,
    //     }
    //     this._state.profilePage.posts.push(newPost);
        
    //     this._subscribe(this._state);
        
    //     this._state.profilePage.newPostText = "";
    //     break;
    //   case CHANGE_NEW_POST_TEXT:
    //     this._state.profilePage.newPostText = action.text;
    //     this._subscribe(this._state);
    //     break;
    //   case UPDATE_NEW_MESSAGE:

    //     this._state.dialogsPage.newMessageIext = action.text;
    //     this._subscribe(this._state);
    //     break;
    //   case SEND_MESSAGE:
    //     if (!this._state.dialogsPage.newMessageIext) {
    //       return
    //     }
    //     let newMessage = {
    //       id: this._state.dialogsPage.messages.length + 1,
    //       message: this._state.dialogsPage.newMessageIext,
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
        
    //     this._subscribe(this._state);
        
    //     this._state.dialogsPage.newMessageIext = "";
    //     break;
    //   default:
    //     console.log('error');
    //     break
    // }
  }
};

// export const updatePostTexttActionCreator = (text) => {
//   return {
//     type: CHANGE_NEW_POST_TEXT,
//     text
//     }
// }

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST
//   }
// }


// export const updateMessagetActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_MESSAGE,
//     text
//     }
// }

// export const addMessageActionCreator = () => {
//   return {
//     type: SEND_MESSAGE
//   }
// }


export default store;


