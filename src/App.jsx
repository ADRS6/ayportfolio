import React, { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1 className='text-2xl bg-amber-200 p-4'>Hello Aadarsh Yadav ! Welcome in the personal portfolio website development journey </h1>
    </>
  )
}

export default App
