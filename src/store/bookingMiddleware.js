import {
  changeMessageValue,
  resetBookingState,
  updateBookingsList,
  updateSelectedBooking,
} from './bookingSlice';

const bookingMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  if (action.type === 'GET_ALL_BOOKINGS') {
    fetch('http://localhost:3000/booking')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateBookingsList(data));
      });
  }

  if (action.type === 'GET_ONE_BOOKING') {
    fetch(`http://localhost:3000/booking/${action.payload}`)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateSelectedBooking(data));
      });
  }

  if (action.type === 'POST_NEW_BOOKING_TO_API') {
    fetch('http://localhost:3000/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start_date: state.booking.settings.startDateValue,
        duration: state.booking.settings.durationValue,
        nb_people: state.booking.settings.ticketValue,
        hotel: state.booking.settings.hotelValue,
        total: state.booking.settings.totalValue,
        user_id: state.booking.settings.user_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(changeMessageValue(data.message));
        store.dispatch(resetBookingState());
      });
  }

  if (action.type === 'MODIFY_BOOKING_TO_API') {
    fetch(`http://localhost:3000/booking/${action.payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        start_date: action.payload.start_date,
        duration: action.payload.duration,
        nb_people: action.payload.nb_people,
        hotel: action.payload.hotelValue,
        total: action.payload.total,
        closed: action.payload.closed,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(updateSelectedBooking(data));
      });
  }

  if (action.type === 'DELETE_BOOKING') {
    fetch(`http://localhost:3000/booking/${action.payload}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        store.dispatch({ type: 'GET_ALL_BOOKINGS' });
      });
  }

  next(action);
};

export default bookingMiddleware;
