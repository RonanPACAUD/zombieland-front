import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoriesList: []
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        updateCategoryList: (state, action) => {
            return {
              ...state,
              categoriesList: action.payload,
            };
          },
    }
})

export const { updateCategoryList } = categorySlice.actions;

export default categorySlice.reducer;