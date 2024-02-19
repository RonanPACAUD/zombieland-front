import './Attractions.scss';

import { useSelector } from 'react-redux';
import attractionPicture from '../../assets/attraction-assets/Firefly creepy orageux parc attraction abandonné montagne russe brouillard brume grisaille 37698.jpg';
import underline from '../../assets/underline/dual-underline.png';

import Attraction from '../Attraction/Attraction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


// function importAll(r) {
//   let images = {};
//   r.keys().map(item => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('./images', false, '/\.png/'));



export default function Attractions() {
  const dispatch = useDispatch();


  const attractionsList = useSelector(
    (state) => state.attraction.attractionsList
  );

  useEffect(() => {
    dispatch({ type: 'GET_ALL_ATTRACTIONS' });
  }, []);

  return (
    <div className="attractions">
      <img
        src={attractionPicture}
        alt="Rollercoaster"
        className="attractions__picture"
      />
      <div className="attractions__main-title">
        <h1>Nos Attractions</h1>
        <img
          src={underline}
          alt="underline"
          className="attractions__main-title__underline"
        />
        <p>
          ZombieLand propose une gamme d'attractions et de manèges à couper le
          souffle qui plairont aux amateurs de sensations fortes.
        </p>
      </div>
      <div className="attractions__list">
        {attractionsList.map((attraction) => (
          <Attraction
            key={attraction.id}
            name={attraction.name}
            description={attraction.description}
            category={attraction.category}
            pictures={attraction.pictures}
          />
        ))}
      </div>
    </div>
  );
}
