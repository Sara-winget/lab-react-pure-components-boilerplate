import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PureComp from './Components/PureComp'
import NormComp from './Components/simpComp'
function App() {
  

  return (
    <>
    <NormComp/>
      <PureComp/>
    </>
  )
}

export default App
