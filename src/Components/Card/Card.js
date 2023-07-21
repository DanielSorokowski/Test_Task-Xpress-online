import './Card.scss'
import { useContext } from 'react';
import { Context } from '../../App';

export const Card = ({
  type, 
  isFav, 
  handleSelect,
  selectedCard
}) => {
  const {title, image, id} = type;
  const { setFav, fav } = useContext(Context);

  const addToFav = () => {
    setFav(prevFav => [
      ...prevFav,
      {
        id,
        title,
        image
      }
    ])
  }

  const removeFromFav = () => {
    setFav(prevFav => prevFav.filter(fav => fav.id !== id))
  }

  const isFavorite = fav.find(f => f.id === id);

  return (
    <div className={`card ${selectedCard === id && 'card--selected'}`}>
      <div className='card__top'>
        <img src={image} alt="" className='card__image'/>
        {isFav && (
          <button className={`card__fav ${isFavorite && 'card__fav--active'}`} onClick={isFavorite ? removeFromFav : addToFav}>
            <svg viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7065 0C32.1055 0 27.9874 2.23696 25.42 5.66866C22.8526 2.23696 18.7345 0 14.1335 0C6.32958 0 0 6.355 0 14.2098C0 17.2348 0.48298 20.0311 1.32184 22.6239C5.3382 35.3339 17.7177 42.9345 23.844 45.0189C24.7082 45.324 26.1318 45.324 26.996 45.0189C33.1223 42.9345 45.5018 35.3339 49.5182 22.6239C50.357 20.0311 50.84 17.2348 50.84 14.2098C50.84 6.355 44.5104 0 36.7065 0Z" fill="currentColor"/>
            </svg>
         </button>
        )}
      </div>
      <div className='card__bottom'>
        <h3 className='card__title'>{title}</h3>
        <button className='card__btn '  onClick={() => handleSelect(id)}>Select</button>
      </div>
    </div>
  )
}