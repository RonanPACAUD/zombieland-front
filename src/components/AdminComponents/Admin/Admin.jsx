import './Admin.scss';

import { NavLink } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="admin-greetings">
      <h1>Espace Admin</h1>
      <div className="admin-greetings__nav-link">
        <NavLink to="/admin-booking">Réservations</NavLink>
        <NavLink to="/admin-message">Messages</NavLink>
        <NavLink to="/admin-attraction">Attractions</NavLink>
        <NavLink to="/admin-category">Catégories</NavLink>
        <NavLink to="/admin-tag">Tags</NavLink>
        <NavLink to="/admin-price">Prix</NavLink>
      </div>

      {/* <Routes >
        <Route 
          path="/admin-booking"
          element={<></>}
        />
        <Route 
          path="/admin-message"
          element={<></>}
        />
        <Route 
          path="/admin-attraction"
          element={<></>}
        />
        <Route 
          path="/admin-category"
          element={<></>}
        />
        <Route 
          path="/admin-tag"
          element={<></>}
        />
        <Route 
          path="/admin-price"
          element={<></>}
        />
      </Routes> */}
    </div>
  );
}
