import './RoutingList.scss'
import { Link } from 'react-router-dom'
import logo from '../../img/WM_Mp_4c_C.png';

export const RoutingList = ({ location }) => {

  const locationFilter = location.split('/').filter(element => element.length)
  const locationElements = locationFilter.map((element, index) => {
    let link = '';
    
    for (let i = 0; i < index + 1; i++) {
      link += `/${locationFilter[i]}`;
    }

    return (
      <div className='routing-list__element' key={element}>
        <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.12365 4.93071L4.40519 3.21223L1.60507 0.412102C1.01188 -0.172348 0 0.246363 0 1.08378V6.51832V11.412C0 12.2494 1.01188 12.6681 1.60507 12.075L6.12365 7.55637C6.84767 6.84107 6.84767 5.65473 6.12365 4.93071Z" fill="#292D32"/>
        </svg>
        <Link to={link} className='routing-list__link'>{element.replace(/-/g, " ")} </Link>
      </div>
    )
  })

  
  return (
    <section className='routing-list container__box'>
      <nav className="routing-list__nav">
        <Link to='/'>
          <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0L0 9.375H3.125V21.875H9.375V15.625H15.625V21.875H21.875V9.28125L25 9.375L12.5 0Z" fill="#4B8232"/>
          </svg>
        </Link>
        {locationElements}
      </nav>
      <img src={logo} alt="Example" className='routing-list__image'/>
    </section>
  )
}
