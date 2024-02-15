import './Bookings.scss';

import { useSelector } from 'react-redux';

import bookingsPicture from '../../assets/booking-assets/Firefly salle de restaurant sombre brouillard brumeux familial peur lowkey 47898.jpg';
import underline from '../../assets/underline/dual-underline.png';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import dayjs from 'dayjs';
import 'dayjs/locale/fr';
dayjs.locale('fr');

import { useDispatch } from 'react-redux';

import { changeDurationValue, changeHotelValue, changeStartDateValue, changeTicketValue, changeTotalValue } from '../../store/bookingSlice';


export default function Bookings() {
    const dispatch = useDispatch();

    const priceList = useSelector((state) => state.price.priceList);

    const startDateValue = useSelector((state) => state.booking.settings.startDateValue)
    const durationValue = useSelector((state) => state.booking.settings.durationValue)
    const ticketValue = useSelector((state) => state.booking.settings.ticketValue)
    const hotelValue = useSelector((state) => state.booking.settings.hotelValue)
    const totalValue = useSelector((state) => state.booking.settings.totalValue)
    const bookingMessage = useSelector((state) => state.booking.settings.message)

    console.log()

  return (
    <div className='bookings'>
        <img src={ bookingsPicture } alt='Zombie' className='bookings__picture' />
        <div className='bookings__main-title'>
            <h1>Réservez maintenant</h1>
            <img src={ underline } alt='underline' className='bookings__main-title__underline' /> 
            <p>
            Réservez dès maintenant pour une escapade hors du commun où le danger et l'excitation vous attendent à chaque tournant.
            </p>
        </div>
        <div className='bookings__book'>
            <h2>Réservation</h2>
            <form 
                className='bookings__book__form'
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        dispatch({ type: 'POST_NEW_BOOKING_TO_API' })
                    }
                }
                >
                <div className='bookings__book__form-container'>
                    <div className='bookings__book__form__left'>
                        <h3>Date d'arrivée</h3>
                        <Calendar 
                            className='bookings__book__form__calendar'
                            minDate={new Date()} 
                            value={ startDateValue }
                            onChange={
                                (e) => {
                                    dispatch(changeStartDateValue(dayjs(e).format('YYYY-MM-DD')))
                                }
                            }
                            />
                    </div>
                    <div className='bookings__book__form__right'>
                        <div className='bookings__book__form__duration'>
                            <h3>Durée du sejour</h3>
                            <select 
                                name='select-duration' 
                                id='select-duration'
                                onChange={
                                    (e) => {
                                        dispatch(changeDurationValue(e.target.value))
                                    }
                                }
                                >
                                <option value='1'>1 jour</option>
                                <option value='2'>2 jours</option>
                                <option value='3'>3 jours</option>
                                <option value='4'>4 jours</option>
                            </select>
                        </div>
                        <div className='bookings__book__form__hotel'>
                            <h3>Hébergement</h3>
                            <fieldset>
                                <div className='select-with-hotel'>
                                    <input 
                                        type='radio' 
                                        name='select-hotel'
                                        id='select-with-hotel'
                                        defaultChecked
                                        onChange={
                                            () => {
                                                dispatch(changeHotelValue(false))
                                            }
                                        }    
                                        />
                                    <label htmlFor='without-hotel'>Sans Hébergement</label>
                                </div>
                                <div className='select-with-hotel'>
                                    <input 
                                        type='radio' 
                                        name='select-hotel' 
                                        onChange={
                                            () => {
                                                dispatch(changeHotelValue(true))
                                            }
                                        }
                                        />
                                    <label htmlFor='with-hotel'>Avec Hébergement</label>
                                </div>
                            </fieldset>
                        </div>
                        <div className='bookings__book__form__ticket'>
                            <h3>Billets</h3>
                            <div>Nombre de billets :</div>
                            <input 
                                type='number' 
                                min="1" 
                                max="50"
                                value={ticketValue}
                                className='input-ticket'
                                onChange={
                                    (e) => {
                                        dispatch(changeTicketValue(e.target.value))
                                    }
                                }    
                            />
                            personne
                        </div>
                    </div>
                </div>
                <div className='bookings__book__form__message'>
                    {bookingMessage}
                </div>
                <div className='bookings__book__form__total-submit'>
                    <div className='total'>
                        { priceList.map((price) => {
                            if (hotelValue === price.hotel && parseInt(durationValue) === price.duration) {
                                dispatch(changeTotalValue(price.price * ticketValue))
                                return (
                                    <div key={price.id}> Total: {price.price * ticketValue} €</div>
                                )
                            }
                        })}                    
                    </div>
                    <button type='submit' className='booking-form-submit-button btn' >Réserver</button>
                </div>
            </form>
        </div>
        <div className='bookings__practical-info'>
            <h2>Infos Pratiques</h2>
            <div className='bookings__practical-info__info-container'>
                <div className='bookings__practical-info__info-container__opening'>
                    <h3>Horaires d'ouverture</h3>
                    Le parc est ouvert tous les jours, du lundi au dimanche, de 9h à 18h
                </div>
                <div className='bookings__practical-info__info-container__rate'>
                    <h3>Tarifs</h3>
                    <div className='rate-container'>
                    <div className='without-hotel'>
                            { priceList.map((price) => {
                                if (!price.hotel) {
                                   return ( 
                                    <div key={price.id}>Pass {price.duration} journée : {price.price} €<br/></div>
                                    )   
                                }
                            })}
                        </div>
                        <div className='whith-hotel'>
                            Avec hotel le prix est de :<br/>
                            { priceList.map((price) => {
                                if (price.hotel) {
                                   return ( 
                                    <div key={price.id}>{price.duration} jours et {price.duration - 1} nuit : {price.price} €<br/></div>
                                    )   
                                }
                            })}
                        </div>
                    </div>
                </div>  
                <div className='bookings__practical-info__info-container__location'>
                    <h3>Emplacement</h3>
                 
                    ZombieLand Amusement Park<br/>
                    3 Chemin de la tombe<br/>
                    77 118 La Tombe <br/>
                    Seine-et Marne<br/>
                </div>
            </div>
        </div>
    </div>
  );
}
