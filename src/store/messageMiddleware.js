import { changeMessageValue } from "./messageSlice";


const messageMiddleware = (store) => (next) => (action) => {
    const state = store.getState();

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
                receiver_id: state.message.settings.receiver_id
              }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                store.dispatch(changeMessageValue(data.message));
            })
    }

    next(action);
}

export default messageMiddleware;