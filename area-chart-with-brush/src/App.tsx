/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import './App.scss'

import ChartWidget from './widgets/ChartWidget/ChartWidget'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChartWidget />
      </header>
    </div>
  )
}

export default App
