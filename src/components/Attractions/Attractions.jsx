import './Attractions.scss';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import attractionPicture from '../../assets/attraction-assets/Firefly creepy orageux parc attraction abandonné montagne russe brouillard brume grisaille 37698.jpg';
import underline from '../../assets/underline/dual-underline.png';

import { changeFilterValue } from '../../store/attractionSlice';

import Attraction from '../Attraction/Attraction'

export default function Attractions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_ALL_ATTRACTIONS' });
    dispatch({ type: 'GET_ALL_CATEGORIES' });
  }, []);
  
  const attractionsList = useSelector(
    (state) => state.attraction.attractionsList
  );
  const categoriesList = useSelector((state) => state.category.categoriesList);

  const filterValue = useSelector((state) => state.attraction.filter);


  console.log(filterValue);
  console.log(attractionsList.length)

  return (
    <div className="attractions">
      <img
        src={attractionPicture}
        alt="Rollercoaster"
        className="attractions__picture main-picture"
      />
      <div className="attractions__main-title main-title">
        <h1>Nos Attractions</h1>
        <img
          src={underline}
          alt="underline"
          className="attractions__main-title__underline underline"
        />
        <p>
          ZombieLand propose une gamme d'attractions et de manèges à couper le
          souffle qui plairont aux amateurs de sensations fortes.
        </p>
      </div>
      <div className="attractions__filter-bar">
        <form
          onChange={(e) => {
            e.preventDefault();
            dispatch({ type: 'GET_FILTER_ATTRACTIONS' });
          }}
        >
          <div className="attractions__filter-bar__tag-search">
            Rechercher par tag:
            <input
              type="search"
              value={filterValue.tag_search}
              onChange={(e) =>
                dispatch(changeFilterValue({ tag_search: e.target.value }))
              }
            />
          </div>
          <div className="attractions__filter-bar__category-filter">
            Filtrer par catégorie:
            <select
              value={filterValue.category_id}
              onChange={(e) => {
                dispatch(
                  changeFilterValue({
                    category_id: parseInt(e.target.value),
                  })
                );
              }}
            >
              <option value={null}>---</option>
              {categoriesList.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="attractions__list">
        {
          attractionsList.map((attraction) => (
            <Attraction
              key={attraction.id}
              name={attraction.name}
              description={attraction.description}
              category={attraction.category}
              pictures={attraction.pictures}
              tags={attraction.tags}
            />
          ))}
          {attractionsList.length === 0 && <h2 className='attractions__null-message'>Aucune attraction trouvée</h2>}
      </div>
    </div>
  );
}
