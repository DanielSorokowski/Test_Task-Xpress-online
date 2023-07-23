import './Card.scss'
import { useContext, useState } from 'react';
import { Context } from '../../App';
import { CardModal } from '../CardModal/CardModal';

export const Card = ({
  type, 
  isFav, 
  handleSelect,
  selectedCard
}) => {
  const {title, image, id} = type;
  const { setFav, fav } = useContext(Context);
  const [isModal, setIsModal] = useState(false);

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
   <>
    <div className={`card ${selectedCard === id && 'card--selected'}`}>
      <div className='card__top'>
        <img src={image} alt="" className='card__image'/>
        {isFav && (
          <>
            <button className={`card__fav ${isFavorite && 'card__fav--active'}`} onClick={isFavorite ? removeFromFav : addToFav}>
              <svg viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7065 0C32.1055 0 27.9874 2.23696 25.42 5.66866C22.8526 2.23696 18.7345 0 14.1335 0C6.32958 0 0 6.355 0 14.2098C0 17.2348 0.48298 20.0311 1.32184 22.6239C5.3382 35.3339 17.7177 42.9345 23.844 45.0189C24.7082 45.324 26.1318 45.324 26.996 45.0189C33.1223 42.9345 45.5018 35.3339 49.5182 22.6239C50.357 20.0311 50.84 17.2348 50.84 14.2098C50.84 6.355 44.5104 0 36.7065 0Z" fill="currentColor"/>
              </svg>
            </button>
            <button onClick={() => setIsModal(true)} className='card__modal'>
            <svg width="369" height="316" viewBox="0 0 369 316" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M354.517 105.342C311.975 38.4905 249.728 0 184.165 0C151.384 0 119.523 9.57658 90.425 27.4406C61.3269 45.4887 35.1755 71.8243 13.8124 105.342C-4.60412 134.256 -4.60412 181.218 13.8124 210.132C56.3545 277.168 118.602 315.475 184.165 315.475C216.946 315.475 248.807 305.898 277.905 288.034C307.003 269.986 333.154 243.65 354.517 210.132C372.934 181.403 372.934 134.256 354.517 105.342ZM184.165 232.232C142.912 232.232 109.762 198.898 109.762 157.829C109.762 116.761 142.912 83.4267 184.165 83.4267C225.418 83.4267 258.568 116.761 258.568 157.829C258.568 198.898 225.418 232.232 184.165 232.232Z" fill="currentColor"/>
              <path d="M184.135 105.175C155.222 105.175 131.649 128.748 131.649 157.846C131.649 186.76 155.222 210.333 184.135 210.333C213.049 210.333 236.807 186.76 236.807 157.846C236.807 128.932 213.049 105.175 184.135 105.175Z" fill="currentColor"/>
            </svg>

            </button>
          </>
        )}
      </div>
      <div className='card__bottom'>
        <h3 className='card__title'>{title}</h3>
        <button className='card__btn '  onClick={() => handleSelect(id)}>Define Tool</button>
      </div>
    </div>
    {isModal && <CardModal image={image} handleClose={setIsModal}/>}
   </>
  )
}