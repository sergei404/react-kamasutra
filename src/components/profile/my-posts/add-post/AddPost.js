import { useRef } from "react";
import s from "./add-post.module.css";
import {updatePostTexttActionCreator, addPostActionCreator} from '../../../../redax/profile-reducer'


export default function AddPost(props) {
  const refElem = useRef(null)

  const addPostText = () => {
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    let text = refElem.current.value
    props.dispatch(updatePostTexttActionCreator(text))
  }

  return (
    <div className={s["new-post"]}>
      <label>
        <textarea name="description" id="description" onChange={onPostChange} ref={refElem} value={props.newPostText}/>
      </label>
      <button onClick={addPostText}>Add Post</button>
    </div>
  );
}
