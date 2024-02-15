import './Contact.scss';

import contactPicture from '../../assets/contact-assets/dead-encounter-retouche_05.png';
import underline from '../../assets/underline/dual-underline.png';

export default function Contact() {
  return (
    <div className='contact'>
      <img src={ contactPicture } alt='Zombie' className='contact__picture'/>
      <div className='contact__main-title'>
        <h1>Contactez-nous</h1>
        <img src={ underline } alt='underline' className='contact__main-title__underline' /> 
        <p>
            Des Questions? Contactez-nous pour des informations ou simplement pour partager vos impressions. Ensemble, survivons à ce monde nouveau.
        </p>
      </div>
      <div className='contact__form-section'>
        <h2>Formulaire de contact</h2>
        <form className='contact__form-section__form'>
            <input type='text' className='contact__form-section__form__subject' placeholder='Sujet'/>
            <textarea className='contact__form-section__form__content' placeholder="Vos questions, vos impressions, c'est ici."></textarea>
            <button type='submit' className='contact__form-section__form__submit-button'>Envoyer</button>
        </form>
      </div>
      
    </div>
  );
}
