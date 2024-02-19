import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceList: [],
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    updatePriceList: (state, action) => {
      return {
        ...state,
        priceList: action.payload,
      };
    },
  },
});

export const { updatePriceList } = priceSlice.actions;

export default priceSlice.reducer;
