import './ToolForm.scss'
import { formGroups } from '../../products'
import { FormGroup } from '../FormGroup/FormGroup'
import { useState } from 'react'

export const ToolForm = ({title}) => {
  const [price, setPrice] = useState(1)
  const formGroupElements = formGroups.map(group => <FormGroup group={group} key={group.id} setPrice={setPrice} />)

  return (
    <form className="tool-form">
      <h3 className='tool-form__title'>{title}: {price}$ per piece</h3>
      {formGroupElements}
      <div className='form-group'>
        <h4 className='form-group__title'>Additional Requirements or Specifications</h4>
        <textarea className='tool-form__textarea'></textarea>
        <button className='tool-form__btn'>Submit</button>
      </div>
    </form>
  )
}