import { configureStore } from "@reduxjs/toolkit";

import attractionReducers from './attractionSlice';
import attractionMiddleware from "./attractionMiddleware";
import priceReducers from "./priceSlice";
import priceMiddleware from "./priceMiddleware";
import bookingReducers from './bookingSlice';
import bookingMiddleware from "./bookingMiddleware";

const store = configureStore({
  reducer: {
    attraction: attractionReducers,
    price: priceReducers,
    booking: bookingReducers,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(attractionMiddleware, priceMiddleware, bookingMiddleware),
});

export default store;