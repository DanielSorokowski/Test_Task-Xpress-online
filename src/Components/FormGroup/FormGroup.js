import './FormGroup.scss'
import { FormInput } from '../FormInput/FormInput';

export const FormGroup = ({group}) => {
  const {title, elements} = group;

  const inputElements = elements.map(element => <FormInput element={element} key={element.id}/>)
  return (
    <div className='form-group'>
      <h4 className='form-group__title'>{title}</h4>
      <div className='form-group__list'>
        {inputElements}
      </div>
    </div>
  )
}