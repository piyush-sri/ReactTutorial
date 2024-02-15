import React from 'react'
import Backgroun from './components/Backgroun'
import Foreground from './components/Foreground'


function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
     <Backgroun />
     <Foreground />
    </div>
  )
}

export default App