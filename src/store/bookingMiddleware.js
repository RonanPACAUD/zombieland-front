import { changeMessageValue } from "./bookingSlice";

const bookingMiddleware = (store) => (next) => (action) => {
    
    if (action.type === 'POST_NEW_BOOKING_TO_API') {

        const state = store.getState();

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
                user_id: state.booking.settings.user_id
              }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                console.log(data.message);
                // store.dispatch((data));
                store.dispatch(changeMessageValue(data.message));
            })
    }

    next(action);
};

export default bookingMiddleware;