import { Link } from "react-router-dom"
import './DetailCard.scss'

export const DetailCard = ({ element }) => {
  const { image, title, text, link, active } = element

  return (
    <Link to={link} className={`detail-card ${!active && 'detail-card--disabled'}`}>
      <img src={image} className="detail-card__image"/>
      <div className="detail-card__content">
        <h2 className="detail-card__title">{title}</h2>
        <p className="detail-card__text">{text}</p>
        <div to={link} className="detail-card__link">Select</div>
      </div>
    </Link>
  )
}