import { changeInputValue, resetInscriptionState } from './inscriptionSlice';

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
        store.dispatch(changeInputValue({ message: data.message }));
        store.dispatch({ type: 'POST_CONNEXION_DATA_TO_API_FROM_INSCRIPTION' });
      });
  }

  if (action.type === 'CREATE_NEW_USER_TO_API') {
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
      .then((response) => {
        if  (response.status === 200) {
          store.dispatch(resetInscriptionState());
        }
        return response.json()})
      .then((data) => {
        store.dispatch(changeInputValue({ message: data.message }));
      });
  }

  next(action);
};

export default inscriptionMiddleware;
