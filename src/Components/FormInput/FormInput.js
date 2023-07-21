import './FormInput.scss'

export const FormInput = ({element}) => {
  const {title} = element;

  return (
    <div className='form-input'>
      <label>{title}</label>
      <input type="text" className='form-input__input'></input>
    </div>
  )
}