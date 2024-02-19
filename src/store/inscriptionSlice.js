import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: {
    firstNameValue: '',
    lastNameValue: '',
    emailValue: '',
    addressValue: '',
    cityValue: '',
    countryValue: '',
    passwordValue: '',
    confirmPasswordValue: '',
    role: 'membre',
    message: '',
  },
};

const inscriptionSlice = createSlice({
  name: 'inscription',
  initialState,
  reducers: {
    changeFirstNameValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          firstNameValue: action.payload,
        },
      };
    },

    changeLastNameValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          lastNameValue: action.payload,
        },
      };
    },

    changeEmailValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          emailValue: action.payload,
        },
      };
    },

    changeAddressValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          addressValue: action.payload,
        },
      };
    },

    changeCityValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          cityValue: action.payload,
        },
      };
    },

    changeCountryValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          countryValue: action.payload,
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

    changeConfirmPasswordValue: (state, action) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          confirmPasswordValue: action.payload,
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

export const {
  changeFirstNameValue,
  changeLastNameValue,
  changeEmailValue,
  changeAddressValue,
  changeCityValue,
  changeCountryValue,
  changePasswordValue,
  changeConfirmPasswordValue,
  changeMessageValue,
} = inscriptionSlice.actions;

export default inscriptionSlice.reducer;
