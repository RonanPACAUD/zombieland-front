import { useSelector } from 'react-redux';
import './AdminAttractionModal.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function AdminAttractionModal() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_ALL_CATEGORIES' });
  }, []);

  const selectedAttractionValue = useSelector(
    (state) => state.attraction.selected
  );

  // console.log(selectedAttractionValue.attraction_id)
  const categoriesList = useSelector((state) => state.category.categoriesList);

  return (
    <div className="admin-attraction-modal">
      <h2>Modifier Attraction</h2>
      <form className="admin-attraction-modal__form">
        <div className="admin-attraction-modal__form__name">
          <h3>Objet</h3>
          <input
            type="text"
            value={selectedAttractionValue.name}
            onChange={(e) => {
              console.log(selectedAttractionValue.attraction_id);
              dispatch({
                type: 'MODIFY_ATTRACTION_TO_API',
                payload: {
                  id: selectedAttractionValue.attraction_id,
                  name: e.target.value,
                },
              });
            }}
          />
        </div>
        <div className="admin-attraction-modal__form__description">
          <h3>Contenu</h3>
          <textarea
            type="text"
            value={selectedAttractionValue.description}
            onChange={(e) => {
              console.log(selectedAttractionValue.attraction_id);
              dispatch({
                type: 'MODIFY_ATTRACTION_TO_API',
                payload: {
                  id: selectedAttractionValue.attraction_id,
                  description: e.target.value,
                },
              });
            }}
          ></textarea>
        </div>
        <div className="admin-attraction-modal__form__category">
          <h3>Category</h3>
          <select
            onChange={(e) => {
              console.log(selectedAttractionValue.attraction_id);
              dispatch({
                type: 'MODIFY_ATTRACTION_TO_API',
                payload: {
                  id: selectedAttractionValue.attraction_id,
                  category_id: e.target.value,
                },
              });
            }}
          >
            {categoriesList.map((category) => (
              <option
                key={category.id}
                value={category.id}
                {...(selectedAttractionValue.category_id === category.id
                  ? { selected: 'selected' }
                  : {})}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
