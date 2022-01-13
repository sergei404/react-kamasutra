//import s from './profile.module.css'
//import MyPosts from './my-posts/MyPosts';
import ProfileInfo from './profile-info/ProfileInfo';
import MyPostsContainer from './my-posts/MyPostsContainer';

// export default function Profile({posts, dispatch, newPostText}) {
export default function Profile() {
  return (
    <section>
      <ProfileInfo/>
      {/* <MyPostsContainer posts={posts} dispatch={dispatch} newPostText={newPostText}/> */}
      <MyPostsContainer/>
    </section>
  );
}
