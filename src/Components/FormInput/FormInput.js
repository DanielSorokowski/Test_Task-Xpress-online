import { useState } from 'react';
import './FormInput.scss'

export const FormInput = ({element, setPrice}) => {
  const [value, setValue] = useState(1)
  const {title} = element;

  return (
    <div className='form-input'>
      <label>{title}</label>
      <input 
        type="number" 
        className='form-input__input'
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
          setPrice(prev => Math.floor(Number(prev) + Number(value)))
        }}
      ></input>
      <span className='form-input__sugested'>{`(1 - 10)`}</span>
    </div>
  )
}