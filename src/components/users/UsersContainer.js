import {
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC
} from "../../redax/users-reducer";
import { connect } from "react-redux";
import { Component } from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../preloader/Preloader";
//import UsersApiComponent from './UsersApiComponent';

class UsersApiComponent extends Component {

  componentDidMount() {
    //this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChange = (index) => {
    this.props.updateCurrentPage(index);
    //this.props.toggleIsFetching(false);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${index}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items)
        //this.props.toggleIsFetching(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? 
          <Preloader/> : null}
          <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          updateFollow={this.props.updateFollow}
          onPageChange={this.onPageChange}
        />
      </>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store);
  return {
    users: store.usersPage.users,
    pageSize: store.usersPage.pageSize,
    totalUserCount: store.usersPage.totalUserCount,
    currentPage: store.usersPage.currentPage,
    isFetching: store.usersPage.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFollow: (id) => dispatch(unfollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    updateCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
    setTotalUsersCount: (totalCount) =>
      dispatch(setTotalUsersCountAC(totalCount)),
    toggleIsFetching: (fetching) => dispatch(toggleIsFetchingAC(fetching))
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiComponent);

export default UsersContainer;
