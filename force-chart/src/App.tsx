/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import './App.scss'
import NetworksWidget from './widgets/NetworksWidget/NetworksWidget'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NetworksWidget />
      </header>
    </div>
  )
}

export default App
