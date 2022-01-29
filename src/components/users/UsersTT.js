import axios from "axios";
import User from "./user/User";
import s from "./users.module.css";

export default function Users(props) {
  function getUsers() {
    if (!props.users.length) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => props.setUsers(res.data.items))
    }
  }

  const usersList = props.users.map((user) => (
    <User key={user.id} user={user} updateFollow={props.updateFollow} />
  ));
  return (
    <section className={s.users}>
      <ul>{usersList}</ul>
      <div className={s["show-more"]}>
        <button onClick={getUsers} className={s.btn}>Show more</button>
      </div>
    </section>
  );
}
