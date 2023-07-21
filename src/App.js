import './index.scss'
import React from 'react';
import { Header } from "./Components/Header/Header"
import { RoutingList } from './Components/RoutingList/RoutingList'

import { HomePage } from './Pages/HomePage/HomePage';
import { ProductsPage } from './Pages/ProductsPage/ProductsPage';
import { Routes, Route, useLocation} from 'react-router-dom';
import { ToolPage } from './Pages/ToolPage/ToolPage';
import { FavoritePage } from './Pages/FavoritePage/FavoritePage';

import { createContext, useEffect, useState } from 'react';

export const Context = createContext({
  fav: [],
  setFav: () => {}
});


const App = () => {
  let location = useLocation();
  const savedFav = JSON.parse(localStorage.getItem('fav')) || []
  const [fav, setFav] = useState(savedFav);

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav));
  }, [fav]);

  return (
    <Context.Provider value={{ fav, setFav }}>
      <div className='container'>
        <Header isHome={location.pathname === '/'} />
        <RoutingList location={location.pathname}/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/new-special-tool" element={<ProductsPage />} />
            <Route path="/new-special-tool/tool" element={<ToolPage />} />
          </Routes>
        </main> 
      </div>
    </Context.Provider>
  )
}

export default App