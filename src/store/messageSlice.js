import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    settings: {
        subjectValue: '',
        contentValue: '',
        sender_id: 1,
        receiver_id: 2,
        message: '',
    }
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        changeSubjectValue: (state, action) => {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    subjectValue: action.payload,
                    message: '',
                }
            }
        },

        changeContentValue: (state, action) => {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    contentValue: action.payload,
                    message: '',
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
    changeSubjectValue,
    changeContentValue,
    changeMessageValue,
} = messageSlice.actions;

export default messageSlice.reducer;