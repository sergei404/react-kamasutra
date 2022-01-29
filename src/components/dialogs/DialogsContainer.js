import { connect } from 'react-redux';
import {updateMessagetActionCreator, addMessageActionCreator} from '../../redax/dialogs-reducer'
//import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

// export default function DialogsContainer({dialogsPage: {dialogs, messages, newMessageIext}, dispatch}) {
// export default function DialogsContainer() {

//   // const addMessage = () => {
//   //   dispatch(addMessageActionCreator())
//   // }

//   // const messageChange = (message) => {
//   //   dispatch(updateMessagetActionCreator(message))
//   // }

//   return (
//     <StoreContext.Consumer>
//       {
//         (value) => {
//           let store = value.getState();

//           const addMessage = () => {
//             value.dispatch(addMessageActionCreator())
//           }
        
//           const messageChange = (message) => {
//             value.dispatch(updateMessagetActionCreator(message))
//           }

//           return <Dialogs messageChange={messageChange} addMessage={addMessage} dialogs={store.dialogsPage.dialogs} messages={store.dialogsPage.messages} newMessageIext={store.dialogsPage.newMessageIext}/>
//         }
//       }
//     </StoreContext.Consumer>)
//     // <Dialogs messageChange={messageChange} addMessage={addMessage} dialogs={dialogs} messages={messages} newMessageIext={newMessageIext}/>
//   ;
// }

const mapStateToProps = (store) => {
  return {
    dialogsPage: store.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    messageChange: (message) => dispatch(updateMessagetActionCreator(message)),
    addMessage: () => dispatch(addMessageActionCreator())
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer