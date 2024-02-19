import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../Footer/Footer';
import Greeting from '../Greeting/Greeting';
import Header from '../Header/Header';
import Attractions from '../Attractions/Attractions';
import Bookings from '../Bookings/Bookings';
import Admin from '../AdminComponents/Admin/Admin';
import Contact from '../Contact/Contact';
import Modal from '../Modal/Modal';

import AdminBookings from '../AdminComponents/AdminBooking/AdminBooking';
import AdminMessage from '../AdminComponents/AdminMessage/AdminMessage';
import AdminAttraction from '../AdminComponents/AdminAttraction/AdminAttraction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_PRICES_FROM_API' });
  }, []);

  const mainModalIsOpen = useSelector((state) => state.modal.mainModalIsOpen);

  return (
    <div className="app">
      <Header />
      {mainModalIsOpen && <Modal />}

      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />}>
          {/* Gerer les nested Route    */}
        </Route>

        <Route path="/admin-booking" element={<AdminBookings />} />
        <Route path="/admin-message" element={<AdminMessage />} />
        <Route path="/admin-attraction" element={<AdminAttraction />} />
        <Route path="/admin-category" element={<AdminMessage />} />
        <Route path="/admin-tag" element={<AdminMessage />} />
        <Route path="/admin-price" element={<AdminMessage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
