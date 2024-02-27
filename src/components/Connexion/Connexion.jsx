import './Connexion.scss';

import { useDispatch, useSelector } from 'react-redux';
import underline from '../../assets/underline/dual-underline.png';
import { showInscriptionModal, toogleMainModal } from '../../store/modalSlice';
import {
  changeEmailValue,
  changePasswordValue,
} from '../../store/connexionSlice';

export default function Connexion() {
  const dispatch = useDispatch();

  const emailValue = useSelector(
    (state) => state.connexion.settings.emailValue
  );
  const passwordValue = useSelector(
    (state) => state.connexion.settings.passwordValue
  );
  const connexionMessage = useSelector(
    (state) => state.connexion.settings.message
  );

  return (
    <div className="connexion">
      <h1>Connexion</h1>
      <img src={underline} alt="underline" className="connexion__underline" />
      <form
        className="connexion__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'POST_CONNEXION_DATA_TO_API' });
        }}
      >
        <h3>Email</h3>
        <input
          type="email"
          className="connexion__form__input-email"
          maxLength="255"
          value={emailValue}
          onChange={(e) => {
            dispatch(changeEmailValue(e.target.value));
          }}
        />
        <h3>Mot de passe</h3>
        <input
          type="password"
          className="connexion__form__input-email"
          maxLength="30"
          value={passwordValue}
          onChange={(e) => {
            dispatch(changePasswordValue(e.target.value));
          }}
        />
        <div className="connexion__form__message">{connexionMessage}</div>
        <div className="connexion__form__button-container">
          <button
            type="submit"
            className="connexion__form__button-container__submit-button btn"
          >
            Se connecter
          </button>
        </div>
      </form>
      <div className="connexion__inscription-link">
        Pas encore de compte ?
        <button
          className="connexion__inscription-link__button"
          onClick={() => {
            dispatch(showInscriptionModal());
          }}
        >
          Je m'inscris
        </button>
      </div>
    </div>
  );
}
