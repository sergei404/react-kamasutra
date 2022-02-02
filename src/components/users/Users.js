import User from "./user/User";
import s from "./users.module.css";
//import axios from "axios";

export default function Users(props) {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)

    const usersList = props.users.map((user) => (
      <User key={user.id} user={user} updateFollow={props.updateFollow} />
    ));

    // const onPageChange = (index) => {
    //   this.props.updateCurrentPage(index)
    //   axios
    //     .get(`https://social-network.samuraijs.com/api/1.0/users?page=${index}&count=${this.props.pageSize}`)
    //     .then((res) => this.props.setUsers(res.data.items));
    // }
    

    return (
      <section className={s.users}>
        <div className={s.pogination}>
          {new Array(pageCount).fill(``).map((elem, index) => elem = <span key={index} onClick={() => props.onPageChange((index + 1))} className={props.currentPage === index+1 ? s.active : ''}>{index + 1}</span>)}
        </div>
        <ul>{usersList}</ul>
        <div className={s["show-more"]}>
          <button className={s.btn}>Show more</button>
        </div>
      </section>
    );
  
}
