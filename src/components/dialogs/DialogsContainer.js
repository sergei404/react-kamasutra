import {updateMessagetActionCreator, addMessageActionCreator} from '../../redax/dialogs-reducer'
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

// export default function DialogsContainer({dialogsPage: {dialogs, messages, newMessageIext}, dispatch}) {
export default function DialogsContainer() {

  // const addMessage = () => {
  //   dispatch(addMessageActionCreator())
  // }

  // const messageChange = (message) => {
  //   dispatch(updateMessagetActionCreator(message))
  // }

  return (
    <StoreContext.Consumer>
      {
        (value) => {
          let store = value.getState().dialogsPage;

          const addMessage = () => {
            value.dispatch(addMessageActionCreator())
          }
        
          const messageChange = (message) => {
            value.dispatch(updateMessagetActionCreator(message))
          }

          return <Dialogs messageChange={messageChange} addMessage={addMessage} dialogs={store.dialogs} messages={store.messages} newMessageIext={store.newMessageIext}/>
        }
      }
    </StoreContext.Consumer>)
    // <Dialogs messageChange={messageChange} addMessage={addMessage} dialogs={dialogs} messages={messages} newMessageIext={newMessageIext}/>
  ;
}