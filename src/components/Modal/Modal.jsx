import Connexion from '../Connexion/Connexion';
import './Modal.scss';

import closeButton from '../../assets/icon/close.png';

export default function Modal() {
  return (
    <div className='modal'>
      <div className='modal__container'>
        <button className='modal__container__close-button'><img src={closeButton} /></button>
        <Connexion />
      </div>

    </div>
  );
}
