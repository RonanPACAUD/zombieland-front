import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Footer from '../Footer/Footer';
import Greeting from '../Greeting/Greeting';
import Header from '../Header/Header';
import Attractions from '../Attractions/Attractions';
import Bookings from '../Bookings/Bookings';

import './App.scss';
import Contact from '../Contact/Contact';
import Modal from '../Modal/Modal';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_ATTRACTIONS_FROM_API' });
    dispatch({ type: 'GET_PRICES_FROM_API' });
  }, [])

  return (
    <div className='app'>
      <Header />
      <Modal />
      <Routes >
        <Route 
          path="/"
          element={<Greeting />}
        />
        <Route 
          path="/attractions"
          element={<Attractions />}
        />
        <Route 
          path="/bookings"
          element={<Bookings />}
        />
        <Route 
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      
     
      <Footer />
    </div>

  );
}

export default App;
