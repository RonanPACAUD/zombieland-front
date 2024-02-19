import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  attractionsList: [],
  selected: {
    attraction_id: 0,
    name: '',
    description: '',
    category_id: 0,
  },
};

const attractionSlice = createSlice({
  name: 'attraction',
  initialState,
  reducers: {
    updateAttractionList: (state, action) => {
      return {
        ...state,
        attractionsList: action.payload,
      };
    },

    updateSelectedAttraction: (state, action) => {
      return {
        ...state,
        selected: {
          ...state.selected,
          attraction_id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          hotelValue: action.payload.hotel,
          category_id: action.payload.category_id
        },
      };
    }
  },
});

export const { updateAttractionList, updateSelectedAttraction } = attractionSlice.actions;

export default attractionSlice.reducer;
