import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    settings: {
        startDateValue: '',
        durationValue: 1,
        hotelValue: false,
        ticketValue: 1,
        totalValue: 0,
        user_id: 1,
        message: '',
    }
}

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        changeStartDateValue: (state, action) => {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    startDateValue: action.payload,
                    message: ''
                }
            }
        },

        changeDurationValue: (state, action) => {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    durationValue: action.payload
                }
            }
        },
        changeHotelValue: (state, action) => {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    hotelValue: action.payload
                }
            }
        },

        changeTicketValue: (state, action) => {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    ticketValue: action.payload
                }
            }
        },
 
        changeTotalValue: (state, action) => {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    totalValue: action.payload
                }
            }
        },

        changeMessageValue: (state, action) => {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    message: action.payload
                }
            }
        }
    }
})

export const { 
    changeStartDateValue, 
    changeDurationValue, 
    changeHotelValue, 
    changeTicketValue,
    changeTotalValue,
    changeMessageValue,
} = bookingSlice.actions;

export default bookingSlice.reducer;