import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainModalIsOpen: false,
  connexionModalIsOpen: true,
  inscriptionModalIsOpen: false,
  adminBookingModal: false,
  adminAttractionModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toogleMainModal: (state) => {
      return {
        ...state,
        mainModalIsOpen: !state.mainModalIsOpen,
        connexionModalIsOpen: true,
        inscriptionModalIsOpen: false,
        adminBookingModal: false,
        adminAttractionModal: false,
      };
    },

    showInscriptionModal: (state) => {
      return {
        ...state,
        connexionModalIsOpen: false,
        inscriptionModalIsOpen: true,
        adminBookingModal: false,
        adminAttractionModal: false,
      };
    },

    showAdminBookingModal: (state) => {
      return {
        ...state,
        mainModalIsOpen: !state.mainModalIsOpen,
        connexionModalIsOpen: false,
        inscriptionModalIsOpen: false,
        adminBookingModal: true,
        adminAttractionModal: false,
      };
    },

    showAdminAttractionModal: (state) => {
      return {
        ...state,
        mainModalIsOpen: !state.mainModalIsOpen,
        connexionModalIsOpen: false,
        inscriptionModalIsOpen: false,
        adminBookingModal: false,
        adminAttractionModal: true,
      };
    },
  },
});

export const { toogleMainModal, showInscriptionModal, showAdminBookingModal, showAdminAttractionModal } =
  modalSlice.actions;

export default modalSlice.reducer;
