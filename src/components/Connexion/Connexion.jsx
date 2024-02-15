import './Connexion.scss';

import underline from '../../assets/underline/dual-underline.png';

export default function Connexion() {
  return (
    <div className='connexion'>
      <h1>Connexion</h1>
      <img src={ underline } alt='underline' className='connexion__underline' />
      <form className='connexion__form'>
        <h3>Email</h3>
        <input type='email' className='connexion__form__input-email'/>
        <h3>Mot de passe</h3>
        <input type='password' className='connexion__form__input-email'/>
        <div className='connexion__form__button-container'>
            <button type='submit' className='connexion__form__button-container__submit-button btn'>Se connecter</button>
        </div>
      </form>
      <div className='connexion__inscription-link'>
        Pas encore de compte ? 
        <button className='connexion__inscription-link__button'>Je m'inscris</button>
      </div>
    </div>
  );
}
