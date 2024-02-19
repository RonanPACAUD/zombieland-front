import './AdminAttraction.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showAdminAttractionModal } from '../../../store/modalSlice';

export default function AdminAttraction() {
  const dispatch = useDispatch();

  const attractionsList = useSelector(
    (state) => state.attraction.attractionsList
  );

  useEffect(() => {
    dispatch({ type: 'GET_ALL_ATTRACTIONS' });
  }, [attractionsList]);

  return (
    <div className="admin-attraction">
      <h2>Attractions</h2>
      <div className="admin-attraction__null-message">
        {attractionsList.length === 0 && <h3>Aucun message</h3>}
      </div>
      <div className="admin-attraction__list-container">
        {attractionsList &&
          attractionsList.map((attraction) => (
            <div
              key={attraction.id}
              className="admin-attraction__list-container__item"
            >
              <div className="admin-attraction__list-container__item__left-container">
                <div className="admin-attraction__list-container__item__left-container__name">
                  {attraction.name}
                </div>
                <div className="admin-attraction__list-container__item__left-container__description">
                  {attraction.description}
                </div>
                <div className="admin-attraction__list-container__item__left-container__category">
                  <span>Catégorie: </span>
                  {attraction.category.name}
                </div>
              </div>
              <div className="admin-attraction__list-container__item__middle-container">
                <div className="admin-attraction__list-container__item__middle-container__pictures">
                  {attraction.pictures.map((picture) => (
                    <div key={picture.id}>{picture.pictures_url}</div>
                  ))}
                </div>
              </div>
              <div className="admin-attraction__list-container__item__right-container">
                <div className="admin-attraction__list-container__item__right-container__buttons">
                  <button
                    className=""
                    value={attraction.id}
                    onClick={(e) => {
                      dispatch({
                        type: 'GET_ONE_ATTRACTION',
                        payload: e.target.value,
                      });
                      dispatch(showAdminAttractionModal());
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    className=""
                    value={attraction.id}
                    onClick={(e) => {
                      // dispatch({ type: 'DELETE_MESSAGE', payload: e.target.value});
                    }}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
