import './Attraction.scss';


import images from '../../assets/attraction-assets/dead-encounter-1.png';

export default function Attraction({ name, description, category, pictures }) {
    
    console.log(pictures)

  return (
    <div className='attraction'>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{category.name}</p>
    </div>
  );
}


<img src={images['0.png']} />
