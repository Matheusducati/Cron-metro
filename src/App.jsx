import { useState } from 'react'
import './App.css'
import Cronometro from './Cronômetro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cronometro/>
    </>
  )
}

export default App
