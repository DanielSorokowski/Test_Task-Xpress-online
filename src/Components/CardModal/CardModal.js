import { ImageMagnifier } from '../ImageMagnifier/ImageMagnifier'
import './CardModal.scss'

export const CardModal = ({image, handleClose}) => {
  return (
    <div className="card-modal">
      <div className='card-modal__content'>
        <button onClick={() => handleClose(false)} className='card-modal__close'>
          <svg width="369" height="369" viewBox="0 0 369 369" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.1586 0L0 66.1586L33.7831 99.9417L117.302 184.869L33.7831 268.388L0 300.764L66.1586 368.33L99.9417 334.547L184.869 249.62L268.388 334.547L300.764 368.33L368.33 300.764L334.547 268.388L249.62 184.869L334.547 99.9417L368.33 66.1586L300.764 0L268.388 33.7831L184.869 117.302L99.9417 33.7831L66.1586 0Z" fill="currentColor"/>
          </svg>
        </button>
        <ImageMagnifier 
          width={"100%"}
          src={image}
        />
      </div>
    </div>
  )
}