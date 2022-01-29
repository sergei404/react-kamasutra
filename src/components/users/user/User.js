import s from "./user.module.css";
import avatar from '../../../assets/images/avatar.png'

export default function User({user, updateFollow}) {

  // const onChangeFollow = () => {
  //   updateFollow(user.id)
  // }
  
  return (
    <li className={s.item}>
      <div className={s.wrap}>
        <div className={s.avatar}>
        <img src={user.photos.small || avatar} alt="avatar"/>
      </div>
      <button onClick={() => updateFollow(user.id)} className={s.follow}>{user.followed ? 'follow' : 'Unfollow'}</button>
      </div>
      <div className={s.about}>
        <p>
          <span className={s.name}>{user.name || ''}</span>
          <span>{user.about || ''}</span>
        </p>
        <p>
          <span className={s.city}>{user.status}</span>
          <span>{user.luniqueUrlName}</span>
        </p>
      </div>
    </li>
  );
}