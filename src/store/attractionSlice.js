import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    attractionsList: []
}

const attractionSlice = createSlice({
    name: "attraction",
    initialState,
    reducers: {
        updateAttractionList: (state, action) => {
            return {
                ...state,
                attractionsList: action.payload
            }
        }
    }
})

export const { updateAttractionList } = attractionSlice.actions;

export default attractionSlice.reducer;