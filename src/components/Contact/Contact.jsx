import './Contact.scss';

import contactPicture from '../../assets/contact-assets/dead-encounter-retouche_05.png';
import underline from '../../assets/underline/dual-underline.png';
import { useDispatch } from 'react-redux';
import { changeContentValue, changeSubjectValue } from '../../store/messageSlice';
import { useSelector } from 'react-redux';

export default function Contact() {

    const dispatch = useDispatch();

    const subjectValue = useSelector((state) => state.message.settings.subjectValue);
    const contentValue = useSelector((state) => state.message.settings.contentValue);
    const contactMessage = useSelector((state) => state.message.settings.message);

  
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
        <h2>Nous Contacter</h2>
        <form 
            className='contact__form-section__form'
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: 'POST_NEW_MESSAGE_TO_API' })
            }}
        >
            <input 
                type='text' 
                className='contact__form-section__form__subject' 
                placeholder='Objet'
                value={subjectValue}
                onChange={(e) => {
                    dispatch(changeSubjectValue(e.target.value))
                }}    
            />
            <textarea 
                className='contact__form-section__form__content' 
                placeholder="Des questions, vos impressions, c'est ici."
                value={contentValue}
                onChange={(e) => {
                    dispatch(changeContentValue(e.target.value))
                }}
            >
            </textarea>
            <div className='contact__form-section__form__message'>
                {contactMessage}
            </div>
            <button 
                type='submit' 
                className='contact__form-section__form__submit-button btn'
            >
                Envoyer
            </button>
        </form>
      </div>
      
    </div>
  );
}
