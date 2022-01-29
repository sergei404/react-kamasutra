import axios from "axios";
import User from "./user/User";
import s from "./users.module.css";

export default function Users(props) {
  function getUsers() {
    if (!props.users.length) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => props.setUsers(res.data.items))
  }
  // if (!props.users.length) {
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users')
  //   //.then(res => console.log(res.data.items))
  //   .then(res => props.setUsers(res.data.items))

    // props.setUsers([
    //   {
    //     id: 1,
    //     image:
    //       "https://www.pngplay.com/wp-content/uploads/11/Fallout-Transparent-File.png",
    //     name: "Dnitry K",
    //     about: "Lorem iamet consectetur adipisicing elit.",
    //     location: {
    //       country: "Belarus",
    //       city: "Minsk",
    //     },
    //     follow: true,
    //   },
    //   {
    //     id: 2,
    //     image:
    //       "https://www.pngplay.com/wp-content/uploads/11/Fallout-Transparent-File.png",
    //     name: "Svetlana D",
    //     about: "Consectetur adipisicing lorem iamet elit.",
    //     location: {
    //       country: "Belarus",
    //       city: "Minsk",
    //     },
    //     follow: true,
    //   },
    //   {
    //     id: 3,
    //     image:
    //       "https://www.pngplay.com/wp-content/uploads/11/Fallout-Transparent-File.png",
    //     name: "Sergei S",
    //     about: "Adipisicing elit.",
    //     location: {
    //       country: "Ukraine",
    //       city: "Kiev",
    //     },
    //     follow: false,
    //   },
    //   {
    //     id: 4,
    //     image:
    //       "https://www.pngplay.com/wp-content/uploads/11/Fallout-Transparent-File.png",
    //     name: "Andrei T",
    //     about: "Lorem iamet consectetur adipisicing elit.",
    //     location: {
    //       country: "Unaited State",
    //       city: "Philadelphia",
    //     },
    //     follow: false,
    //   },
    // ]);
  }

  const usersList = props.users.map((user) => (
    <User key={user.id} user={user} updateFollow={props.updateFollow} />
  ));
  return (
    <section className={s.users}>
      <ul>{usersList}</ul>
      <div className={s["show-more"]}>
        <button onClick={() => getUsers()} className={s.btn}>Show more</button>
      </div>
    </section>
  );
}
