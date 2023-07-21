import './Accordion.scss'
import { useState } from 'react'

export const Accordion = ({
  title,
  subtitle, 
  content, 
}) => {
  const [isActive, setIsActive] = useState(true)

  return (
    <section className="accordion">
      <header className="accordion__header" onClick={() => setIsActive(prevState => !prevState)}>
        <h2 className="accordion__title">{title}</h2>
        <button className={`accordion__button ${isActive && 'accordion__button--active'}`}>
          <svg viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.978 11.9411L17.2143 8.59013L22.4877 3.12988C23.5883 1.97317 22.7998 -8.75197e-09 21.2227 -7.76878e-08L10.9882 -5.25054e-07L1.77218 -9.27897e-07C0.195114 -9.96833e-07 -0.59342 1.97317 0.52367 3.12988L9.03326 11.9411C10.3803 13.353 12.6145 13.353 13.978 11.9411Z" fill="#292D32"/>
          </svg>
        </button>
        <p className="accordion__subtitle">{subtitle}</p>
      </header>
      {isActive && (
        <div className="accordion__content">
          {content}
        </div>
      )}
    </section>
  )
}
