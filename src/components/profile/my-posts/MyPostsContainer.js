//import AddPost from "./add-post/AddPost";
//import s from "./my-posts.module.css";
import MyPosts from "./MyPosts";
//import Post from "./post/Post";
import {updatePostTexttActionCreator, addPostActionCreator} from '../../../redax/profile-reducer'
import StoreContext from "../../../StoreContext";


// export default function MyPostsContainer({posts, dispatch, newPostText}) {
export default function MyPostsContainer() {

  // const addPostText = () => {
  //   //props.addPost()
  //   dispatch(addPostActionCreator())
  // }

  // const onPostChange = (text) => {
  //   // let text = refElem.current.value
  //   // props.updatePostText(text)
  //   dispatch(updatePostTexttActionCreator(text))
  // }
  
  return (
    <StoreContext.Consumer>
      {(value) => {
        let state = value.getState().profilePage

        const addPostText = () => {
          //props.addPost()
          value.dispatch(addPostActionCreator())
        }
      
        const onPostChange = (text) => {
          // let text = refElem.current.value
          // props.updatePostText(text)
          value.dispatch(updatePostTexttActionCreator(text))
        }

        return <MyPosts updatePostText={onPostChange} addPost={addPostText} posts={state.posts} newPostText={state.newPostText}/>
        }
      }
    </StoreContext.Consumer>
    // <MyPosts updatePostText={onPostChange} addPost={addPostText} posts={posts} newPostText={newPostText}/>
  );
}
