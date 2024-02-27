import { changeInputValue, resetMessageState, updateMessagesList } from './messageSlice';

const messageMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  if (action.type === 'GET_ALL_MESSAGES') {
    fetch('http://localhost:3000/message', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateMessagesList(data));
      });
  }

  if (action.type === 'POST_NEW_MESSAGE_TO_API') {
    console.log(action.payload)
    fetch('http://localhost:3000/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: state.message.settings.subjectValue,
        content: state.message.settings.contentValue,
        sender_id: action.payload,
        receiver_id: state.message.settings.receiver_id,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          store.dispatch(resetMessageState())
        }
        return response.json()})
      .then((data) => {
        store.dispatch(changeInputValue({message: data.message}));
      });
  }

  if (action.type === 'MODIFY_MESSAGE_TO_API') {
    console.log('middelware')

    fetch(`http://localhost:3000/message/${action.payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        closed: action.payload.closed,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        store.dispatch({ type: 'GET_ALL_MESSAGES'});
      });
  }

  if (action.type === 'DELETE_MESSAGE') {
    fetch(`http://localhost:3000/message/${action.payload}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
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
