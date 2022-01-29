const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: "Andrei" },
    { id: 2, name: "Sergei" },
    { id: 3, name: "Anna" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Misha" },
  ],
  messages: [
    {id: 1, message: "Lorem ipsum dolor sit amet."},
    {id: 2, message: "Lorem ipsum, dolor sit amet consectetur adipisicing."},
    {id: 3, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
  ],
  newMessageIext: 'xcdefrgt'
}

export const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
      case UPDATE_NEW_MESSAGE:
        return {
          ...state, 
          newMessageIext: action.text
        }
      case SEND_MESSAGE:
        return {
          ...state, 
          messages: [
            ...state.messages, 
            {
            id: state.messages.length + 1,
            message: state.newMessageIext,
            }
          ],
          newMessageIext: '',
        }
      default:
        return state
    }
}

export const updateMessagetActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    text
    }
}

export const addMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}
