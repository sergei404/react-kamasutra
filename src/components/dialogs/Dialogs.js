import DialogsItem from './dialog-item/DialogsItem';
import './dialogs.css'
import Message from './message/Message';
// import {updateMessagetActionCreator, addMessageActionCreator} from '../../redax/dialogs-reducer'

export default function Dialogs({dialogsPage: {dialogs, messages, newMessageIext}, addMessage, messageChange}) {
  const addMessageText = () => {
    addMessage()
  }

  const onMessageChange = (evt) => {
    let message = evt.target.value
    messageChange(message)
  }

  return (
    <section className='dialogs'>
      <div className="dialog-names">
        <ul>
        {dialogs.map((dialog) => <DialogsItem key={dialog.id} data={dialog}/> )}
        </ul>
      </div>
      <div className="messages">
        <ul>
          {messages.map((message) => <Message key={message.id} text={message.message}/>)}
        </ul>
        <div className="new-message">
          <label>
            <textarea name="description" placeholder='Enter your message...' onChange={onMessageChange} value={newMessageIext}/>
          </label>
          <button onClick={addMessageText}>Add Message</button>
        </div>
      </div>
    </section>
  );
}