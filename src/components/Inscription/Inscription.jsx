import './Inscription.scss';

import { useDispatch, useSelector } from 'react-redux';
import underline from '../../assets/underline/dual-underline.png';
import {
  changeAddressValue,
  changeCityValue,
  changeConfirmPasswordValue,
  changeCountryValue,
  changeEmailValue,
  changeFirstNameValue,
  changeLastNameValue,
  changePasswordValue,
} from '../../store/inscriptionSlice';

export default function Inscription() {
  const dispatch = useDispatch();

  const firstNameValue = useSelector(
    (state) => state.inscription.settings.firstNameValue
  );
  const lastNameValue = useSelector(
    (state) => state.inscription.settings.lastNameValue
  );
  const emailValue = useSelector(
    (state) => state.inscription.settings.emailValue
  );
  const addressValue = useSelector(
    (state) => state.inscription.settings.addressValue
  );
  const cityValue = useSelector(
    (state) => state.inscription.settings.cityValue
  );
  const countryValue = useSelector(
    (state) => state.inscription.settings.countryValue
  );
  const passwordValue = useSelector(
    (state) => state.inscription.settings.passwordValue
  );
  const confirmPasswordValue = useSelector(
    (state) => state.inscription.settings.confirmPasswordValue
  );
  const inscriptionMessage = useSelector(
    (state) => state.inscription.settings.message
  );

  return (
    <div className="inscription">
      <h1>Inscription</h1>
      <img src={underline} alt="underline" className="inscription__underline" />
      <form
        className="inscription__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'POST_NEW_USER_TO_API' });
        }}
      >
        <div className="inscription__form__input-container">
          <div className="inscription__form__input-container__first-column">
            <h3>Prénom</h3>
            <input
              type="text"
              className="inscription__form__input-container__first-column__input-first-name"
              placeholder="ex: Jean-Claude"
              maxLength="64"
              value={firstNameValue}
              onChange={(e) => {
                dispatch(changeFirstNameValue(e.target.value));
              }}
            />
            <h3>Nom</h3>
            <input
              type="text"
              className="inscription__form__input-container__first-column__input-last-name"
              placeholder="ex: Dupont"
              maxLength="64"
              value={lastNameValue}
              onChange={(e) => {
                dispatch(changeLastNameValue(e.target.value));
              }}
            />
            <h3>Email</h3>
            <input
              type="email"
              className="inscription__form__input-container__first-column__input-email"
              placeholder="exemple@exemplemail.com"
              maxLength="255"
              value={emailValue}
              onChange={(e) => {
                dispatch(changeEmailValue(e.target.value));
              }}
            />
            <h3>Adresse</h3>
            <input
              type="text"
              className="inscription__form__input-container__first-column__input-address"
              placeholder="ex: 12 rue de la forêt"
              maxLength="255"
              value={addressValue}
              onChange={(e) => {
                dispatch(changeAddressValue(e.target.value));
              }}
            />
          </div>
          <div className="inscription__form__input-container__second-column">
            <h3>Ville</h3>
            <input
              type="text"
              className="inscription__form__input-container__second-column__input-city"
              placeholder="ex: Paris"
              maxLength="64"
              value={cityValue}
              onChange={(e) => {
                dispatch(changeCityValue(e.target.value));
              }}
            />
            <h3>Pays</h3>
            <input
              type="country"
              className="inscription__form__input-container__second-column__input-country"
              placeholder="ex: France"
              maxLength="64"
              value={countryValue}
              onChange={(e) => {
                dispatch(changeCountryValue(e.target.value));
              }}
            />
            <h3>Mot de passe</h3>
            <input
              type="password"
              className="inscription__form__input-container__second-column__input-email"
              placeholder="min 8, 1 nombre, 1 min, 1 Maj, 1 symbol"
              maxLength="30"
              value={passwordValue}
              onChange={(e) => {
                dispatch(changePasswordValue(e.target.value));
              }}
            />
            <h3>Confirmation mot de passe</h3>
            <input
              type="password"
              className="inscription__form__input-container__second-column__input-email"
              placeholder="Confirmation du mot de passe"
              maxLength="30"
              value={confirmPasswordValue}
              onChange={(e) => {
                dispatch(changeConfirmPasswordValue(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="inscription__form__message">{inscriptionMessage}</div>
        <div className="inscription__form__button-container">
          <button
            type="submit"
            className="inscription__form__button-container__submit-button btn"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}
