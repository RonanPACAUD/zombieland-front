import { changeMessageValue, updateMessagesList } from './messageSlice';

const messageMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  if (action.type === 'GET_ALL_MESSAGES') {
    fetch('http://localhost:3000/message')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateMessagesList(data));
      });
  }

  if (action.type === 'POST_NEW_MESSAGE_TO_API') {
    fetch('http://localhost:3000/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: state.message.settings.subjectValue,
        content: state.message.settings.contentValue,
        sender_id: state.message.settings.sender_id,
        receiver_id: state.message.settings.receiver_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(changeMessageValue(data.message));
      });
  }

  if (action.type === 'MODIFY_MESSAGE_TO_API') {
    console.log('middelware')

    fetch(`http://localhost:3000/message/${action.payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        closed: action.payload.closed,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // store.dispatch(updateSelectedBooking(data));
      });
  }

  if (action.type === 'DELETE_MESSAGE') {
    fetch(`http://localhost:3000/message/${action.payload}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        store.dispatch({ type: 'GET_ALL_MESSAGES' });
      });
  }

  next(action);
};

export default messageMiddleware;
