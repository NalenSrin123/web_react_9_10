import React from 'react'

import Coffees from './Pages/Coffees'
import ContextAPI from './Context/ContextAPI'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import CoffeeDetail from './Pages/CoffeeDetail'
import Header from './Components/Header'
import Contact from './Pages/Contact'


const App = () => {
  return (
   <>
    <BrowserRouter>
    <Header/>
    <ContextAPI>
    <Routes>
      <Route path='/' element={<Coffees/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/coffees/:id' element={<CoffeeDetail/>}/>
    </Routes>
    </ContextAPI>
    </BrowserRouter>
   
   </>
  )
}

export default App