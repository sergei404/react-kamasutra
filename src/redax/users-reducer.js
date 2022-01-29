const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
//const FOLLOW = "FOLLOW";

let initialState = {
  users: []
  // users: [
  //   {
  //     id: 1,
  //     image: 'https://www.pngplay.com/wp-content/uploads/11/Fallout-Transparent-File.png',
  //     name: 'Dnitry K',
  //     about: 'Lorem iamet consectetur adipisicing elit.',
  //     location: {
  //       country: 'Belarus',
  //       city: 'Minsk',
  //     },
  //     follow: true
  //   },
  //   {
  //     id: 2,
  //     image: 'https://www.pngplay.com/wp-content/uploads/11/Fallout-Transparent-File.png',
  //     name: 'Svetlana D',
  //     about: 'Consectetur adipisicing lorem iamet elit.',
  //     location: {
  //       country: 'Belarus',
  //       city: 'Minsk',
  //     },
  //     follow: true
  //   },
  //   {
  //     id: 3,
  //     image: 'https://www.pngplay.com/wp-content/uploads/11/Fallout-Transparent-File.png',
  //     name: 'Sergei S',
  //     about: 'Adipisicing elit.',
  //     location: {
  //       country: 'Ukraine',
  //       city: 'Kiev',
  //     },
  //     follow: false
  //   },
  //   {
  //     id: 4,
  //     image: 'https://www.pngplay.com/wp-content/uploads/11/Fallout-Transparent-File.png',
  //     name: 'Andrei T',
  //     about: 'Lorem iamet consectetur adipisicing elit.',
  //     location: {
  //       country: 'Unaited State',
  //       city: 'Philadelphia',
  //     },
  //     follow: false
  //   },
  // ],
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
          //users: [...state.users,...action.users]
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

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  };
};
