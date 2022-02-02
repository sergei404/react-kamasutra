import { Component } from "react";
import axios from "axios";
// import User from "./user/User";
// import s from "./users.module.css";
import Users from "./Users";

class UsersApiComponent extends Component {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      });
  }

  onPageChange = (index) => {
    this.props.updateCurrentPage(index)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${index}&count=${this.props.pageSize}`)
      .then((res) => this.props.setUsers(res.data.items));
  }
  

  render() {
    return <Users totalUserCount={this.props.totalUserCount}
                  pageSize={this.props.pageSize} 
                  currentPage={this.props.currentPage} 
                  users={this.props.users}
                  updateFollow={this.props.updateFollow} onPageChange={this.onPageChange}/>
    // let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

    // const usersList = this.props.users.map((user) => (
    //   <User key={user.id} user={user} updateFollow={this.props.updateFollow} />
    // ));
    

    // return (
    //   <section className={s.users}>
    //     <div className={s.pogination}>
    //       {new Array(pageCount).fill(``).map((elem, index) => elem = <span key={index} onClick={() => this.onPageChange((index + 1))} className={this.props.currentPage === index+1 ? s.active : ''}>{index + 1}</span>)}
    //     </div>
    //     <ul>{usersList}</ul>
    //     <div className={s["show-more"]}>
    //       <button className={s.btn}>Show more</button>
    //     </div>
    //   </section>
    // );
  }
}

export default UsersApiComponent;
