import {setUsersAC, unfollowAC} from '../../redax/users-reducer'
import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = (store) => {
  return {
    users: store.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFollow: (id) => dispatch(unfollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
