import './Header.scss'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = ({isHome}) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__content container__box">
        {!isHome && (
          <button className='header__back' onClick={() => navigate(-1)}>
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.577923 7.90062L2.40712 9.72984L5.38769 12.7104C6.0191 13.3325 7.09619 12.8868 7.09619 11.9954L7.09619 6.2107L7.09619 1.00167C7.09619 0.110283 6.0191 -0.33541 5.38769 0.295988L0.577924 5.10576C-0.192754 5.86715 -0.192754 7.12995 0.577923 7.90062Z" fill="#292D32"/>
            </svg>
            <span>Back</span>
          </button>
        )}
        <Link to='/' className='header__link'>
          <h1 className="header__title">Xpress Online</h1>
        </Link>
        <form onSubmit={handleFormSubmit} className='header__form'>
          <input type='text' value={searchValue} onChange={handleInputChange} placeholder='Search for tools' className='header__search'></input>
        </form>
        <nav className='header__nav nav'>
          <ul className='nav__list'>
            <li className='nav__element'>
              <Link to='/favorites' className='nav__link'>Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
