import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: {
    emailValue: '',
    passwordValue: '',
    message: '',
  },
};

const connexionSlice = createSlice({
  name: 'connexion',
  initialState,
  reducers: {
    changeEmailValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          emailValue: action.payload,
        },
      };
    },

    changePasswordValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          passwordValue: action.payload,
        },
      };
    },

    changeMessageValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          message: action.payload,
        },
      };
    },
  },
});

export const { changeEmailValue, changePasswordValue, changeMessageValue } =
  connexionSlice.actions;

export default connexionSlice.reducer;
