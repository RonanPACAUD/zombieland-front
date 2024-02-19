import { changeMessageValue } from './inscriptionSlice';

const inscriptionMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  if (action.type === 'POST_NEW_USER_TO_API') {
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: state.inscription.settings.firstNameValue,
        last_name: state.inscription.settings.lastNameValue,
        email: state.inscription.settings.emailValue,
        address: state.inscription.settings.addressValue,
        city: state.inscription.settings.cityValue,
        country: state.inscription.settings.countryValue,
        password: state.inscription.settings.passwordValue,
        confirm_password: state.inscription.settings.confirmPasswordValue,
        role: state.inscription.settings.role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(changeMessageValue(data.message));
      });
  }

  next(action);
};

export default inscriptionMiddleware;
