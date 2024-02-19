import { changeMessageValue } from './connexionSlice';

const connexionMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  if (action.type === 'POST_CONNEXION_DATA_TO_API') {
    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: state.connexion.settings.emailValue,
        password: state.connexion.settings.passwordValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        store.dispatch(changeMessageValue(data.message));
      });
  }

  next(action);
};

export default connexionMiddleware;
