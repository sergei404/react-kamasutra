//import s from './profile.module.css'
import MyPosts from './my-posts/MyPosts';
import ProfileInfo from './profile-info/ProfileInfo';

export default function Profile({posts, dispatch, newPostText}) {
  return (
    <section>
      <ProfileInfo/>
      <MyPosts posts={posts} dispatch={dispatch} newPostText={newPostText}/>
    </section>
  );
}
