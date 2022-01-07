const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state, action) => {
  switch(action.type) {
      case UPDATE_NEW_MESSAGE:
        state.newMessageIext = action.text;
        return state
      case SEND_MESSAGE:
        let newMessage = {
          id: state.messages.length + 1,
          message: state.newMessageIext,
        }
        state.messages.push(newMessage);
        
        state.newMessageIext = "";
        return state
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