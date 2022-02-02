const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_ISFETCHING = "TOGGLE_ISFETCHING"


let initialState = {
  users: [],
  pageSize: 15,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: true
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNFOLLOW:
      return {
        ...state, 
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: !user.followed}
          }
          return user
        })
      }
      case SET_USERS:
        return {
          ...state, 
          users: [...action.users]
        }
      case SET_CURRENT_PAGE:
        return {
          ...state, 
          currentPage: action.currentPage
        }
      case SET_TOTAL_USERS_COUNT:
        return {
          ...state, 
          totalUserCount: action.totalUserCount
        }
      case TOGGLE_ISFETCHING:
        console.log(action.fetching);
        return {
          ...state, 
          isFetching: action.fetching
        }
    default:
      return state;
  }
};

// export const followAC = (userId) => {
//   return {
//     type: FOLLOW,
//     userId,
//   };
// };

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
};

export const setTotalUsersCountAC = (totalUserCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUserCount
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  };
};

export const toggleIsFetchingAC = (fetching) => {
  return {
    type: SET_USERS,
    fetching
  };
};
