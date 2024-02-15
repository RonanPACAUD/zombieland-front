import { configureStore } from "@reduxjs/toolkit";

import attractionReducers from './attractionSlice';
import attractionMiddleware from "./attractionMiddleware";
import priceReducers from "./priceSlice";
import priceMiddleware from "./priceMiddleware";
import bookingReducers from './bookingSlice';
import bookingMiddleware from "./bookingMiddleware";
import messageReducers from './messageSlice';
import messageMiddleware from "./messageMiddleware";

const store = configureStore({
  reducer: {
    attraction: attractionReducers,
    price: priceReducers,
    booking: bookingReducers,
    message: messageReducers,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(attractionMiddleware, priceMiddleware, bookingMiddleware, messageMiddleware),
});

export default store;