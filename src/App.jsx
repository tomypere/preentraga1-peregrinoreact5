import React from 'react'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './componentes/About'

import Cart from './componentes/Cart'


const App = () =>{


  return (
    <BrowserRouter>
      <NavBar />

      <Routes>

      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/about" element={<About />} />
      
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/category/:category" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />


      </Routes>

      </BrowserRouter>
  )
}

export default App