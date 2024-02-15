import './Header.scss';

import logo from '../../assets/logo/ZombieLand.png'
import { NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <header className='header'>
        <div className='header__container'>
            <NavLink to="/">
                <img src={ logo } alt='Logo' className='header__container__logo'/>
            </NavLink>
            <nav className='header__container__nav-link'>
                    <NavLink to="/">
                        Accueil
                    </NavLink>
                    <NavLink to="/attractions">
                        Attractions
                    </NavLink>
                    <NavLink to="/bookings">
                        Réservations
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    <NavLink to="/log">
                        Connexion/Inscritpion
                    </NavLink>
                
            </nav>
        </div>
    </header>
  );
}
