import AddPost from "./add-post/AddPost";
import s from "./my-posts.module.css";
import Post from "./post/Post";

export default function MyPosts({profilePage: {newPostText, posts}, addPost, updatePostText}) {
  return (
    <div className={s["my-posts"]}>
      <h2>My Posts</h2>
      <AddPost updatePostText={updatePostText} addPost={addPost} newPostText={newPostText}/>
      <div className={s.posts}>
        <ul>
          {posts.map((message) => <Post key={message.id} post={message}/> )}
        </ul>
      </div>
    </div>
  );
}
