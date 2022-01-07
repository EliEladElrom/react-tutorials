/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import './App.scss'
import NetworkWidget from './widgets/NetworkWidget/NetworkWidget'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NetworkWidget />
      </header>
    </div>
  )
}

export default App
