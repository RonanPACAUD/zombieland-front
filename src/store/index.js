import { configureStore } from '@reduxjs/toolkit';

import attractionReducers from './attractionSlice';
import attractionMiddleware from './attractionMiddleware';
import priceReducers from './priceSlice';
import priceMiddleware from './priceMiddleware';
import bookingReducers from './bookingSlice';
import bookingMiddleware from './bookingMiddleware';
import messageReducers from './messageSlice';
import messageMiddleware from './messageMiddleware';
import modalReducers from './modalSlice';
import inscriptionReducers from './inscriptionSlice';
import inscriptionMiddleware from './InscriptionMiddleware';
import connexionReducers from './connexionSlice';
import connexionMiddleware from './connexionMiddleware';
import categoryReducers from './categorySlice'
import categoryMiddleware from './categoryMiddleware';

const store = configureStore({
  reducer: {
    attraction: attractionReducers,
    price: priceReducers,
    booking: bookingReducers,
    message: messageReducers,
    modal: modalReducers,
    inscription: inscriptionReducers,
    connexion: connexionReducers,
    category: categoryReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      attractionMiddleware,
      priceMiddleware,
      bookingMiddleware,
      messageMiddleware,
      inscriptionMiddleware,
      connexionMiddleware,
      categoryMiddleware,
    ),
});

export default store;
