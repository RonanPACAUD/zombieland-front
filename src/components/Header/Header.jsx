import './Header.scss';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo/ZombieLand.png';
import { toogleMainModal } from '../../store/modalSlice';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="header__container__logo" />
        </NavLink>
        <nav className="header__container__nav-link">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/attractions">Attractions</NavLink>
          <NavLink to="/bookings">Réservations</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <button
            className="header__container__nav-link__connexion-button"
            onClick={() => {
              dispatch(toogleMainModal());
            }}
          >
            Connexion/Inscritpion
          </button>
        </nav>
      </div>
    </header>
  );
}
