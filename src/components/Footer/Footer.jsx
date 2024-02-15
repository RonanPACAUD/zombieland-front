import './Footer.scss';

import logo from '../../assets/logo/ZombieLand.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
            <img src={ logo } alt='Logo' className='footer__container__logo'/>
        </div>
    </footer>
  );
}
