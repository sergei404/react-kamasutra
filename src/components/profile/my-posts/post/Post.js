import s from "./post.module.css";

export default function Post({post: {message, like}}) {
  return (
    <li className={s.item}>
      <div className={s.avatar}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTXpumXnDy_QxnmScXlocdr1Wwjj6hucIbw&usqp=CAU" alt="avatar" />
      </div>
      <p className={s.text}>{message}</p>
      <div className={s.like}>
        <span className={s.btn}>like</span>
        <span className={s['like-count']}>{like}</span>
      </div>
    </li>
  );
}
