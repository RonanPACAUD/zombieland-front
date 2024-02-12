import './Header.scss';

import logo from '../../assets/logo/ZombieLand.png'

export default function Header() {

  return (
    <header className='header'>
        <div className='header__container'>
            <img src={ logo } alt='Logo' className='header__container-logo'/>
            <nav className='header__container-nav-link'>
                <ul>
                    <li>Attractions</li>
                    <li>Réservations</li>
                    <li>Contact</li>
                    <li>Connexion/Inscritpion</li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
