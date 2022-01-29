import { Component } from "react";
import axios from "axios";
import User from "./user/User";
import s from "./users.module.css";

class Users extends Component {
  // eslint-disable-next-line no-useless-constructor
  // constructor(props) {
  //   super(props);
  //   //if (!this.props.users.length) {
  //   // axios
  //   //   .get("https://social-network.samuraijs.com/api/1.0/users")
  //   //   .then((res) => this.props.setUsers(res.data.items));
  //   //}
  // }

  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => this.props.setUsers(res.data.items));
  }
  // getUsers = () => {
  //   if (!this.props.users.length) {
  //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
  //     .then(res => this.props.setUsers(res.data.items))
  //   }
  // }

  render() {
    const usersList = this.props.users.map((user) => (
      <User key={user.id} user={user} updateFollow={this.props.updateFollow} />
    ));

    return (
      <section className={s.users}>
        <ul>{usersList}</ul>
        <div className={s["show-more"]}>
          <button className={s.btn}>Show more</button>
        </div>
      </section>
    );
  }
}

export default Users;
