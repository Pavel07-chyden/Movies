import React from 'react'
import { Catalog } from '../pages/Catalog';
import { Detail } from '../pages/Detail';
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';


const RoutesA = () => {
   return (
      <Routes>
         <Route path='/:category/search/:keyword'element={<Catalog />}/>
         <Route path='/:category/:id'element={<Detail />}/>
         <Route path='/:category' element={<Catalog />} />
         <Route path='/' element={<Home />} />
      </Routes>
   );
}

export default RoutesA;