import Connexion from '../Connexion/Connexion';
import './Modal.scss';

import closeButton from '../../assets/icon/close.png';
import { toogleMainModal } from '../../store/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import Inscription from '../Inscription/Inscription';
import AdminBookingModal from '../AdminComponents/AdminBookingModal/AdminBookingModal';
import AdminAttractionModal from '../AdminComponents/AdminAttractionModal/AdminAttractionModal';

export default function Modal() {
  const dispatch = useDispatch();

  const connexionModalIsOpen = useSelector(
    (state) => state.modal.connexionModalIsOpen
  );
  const inscriptionModalIsOpen = useSelector(
    (state) => state.modal.inscriptionModalIsOpen
  );
  const adminBookingModal = useSelector(
    (state) => state.modal.adminBookingModal
  );
  const adminAttractionModal = useSelector(
    (state) => state.modal.adminAttractionModal
  );

  return (
    <div
      className="modal"
      onClick={() => {
        dispatch(toogleMainModal());
      }}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__container__close-button"
          onClick={() => {
            dispatch(toogleMainModal());
          }}
        >
          <img src={closeButton} alt="Close button" />
        </button>
        {connexionModalIsOpen && <Connexion />}
        {inscriptionModalIsOpen && <Inscription />}
        {adminBookingModal && <AdminBookingModal />}
        {adminAttractionModal && <AdminAttractionModal />}
      </div>
    </div>
  );
}
