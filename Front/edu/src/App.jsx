import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import Basket from './pages/Basket';
import Wishlist from './pages/Wishlist';
import Detail from './pages/Detail';
import Header from './layouts/Header';
import MainLayout from './layouts/MainLayout';
import MainLayoutContext from './MainLayoutContext';

const App = () => {
  return (
    <BrowserRouter>
     <MainLayoutContext>
     <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
     </MainLayoutContext>

    </BrowserRouter>
  )
}

export default App