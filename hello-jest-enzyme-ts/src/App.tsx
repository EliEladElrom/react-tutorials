// src/App.tsx

import React from 'react'
import './App.scss'
import Calculator from './components/Calculator/Calculator'

function App() {
  return (
    <div className="App">
      <Calculator componentTitle="Online CalculatorJS" version="0.01-beta" />
    </div>
  )
}

export default App
