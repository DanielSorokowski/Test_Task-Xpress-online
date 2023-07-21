import './ToolForm.scss'
import { formGroups } from '../../products'
import { FormGroup } from '../FormGroup/FormGroup'

export const ToolForm = ({title}) => {
  const formGroupElements = formGroups.map(group => <FormGroup group={group} key={group.id}/>)

  return (
    <form className="tool-form">
      <h3 className='tool-form__title'>{title}:</h3>
      {formGroupElements}
      <div className='form-group'>
        <h4 className='form-group__title'>Additional Requirements or Specifications</h4>
        <textarea className='tool-form__textarea'></textarea>
        <button className='tool-form__btn'>Submit</button>
      </div>
    </form>
  )
}