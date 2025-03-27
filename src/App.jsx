import React from 'react'

import Coffees from './Pages/Coffees'
import ContextAPI from './Context/ContextAPI'


const App = () => {
  return (
   <>
    <ContextAPI>
      <Coffees/>
    </ContextAPI>
   
   </>
  )
}

export default App