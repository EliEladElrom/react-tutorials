/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx

*/

import React from 'react'
import './App.scss'

import DonutChartWidget from './widgets/DonutChartWidget/DonutChartWidget'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DonutChartWidget />
      </header>
    </div>
  )
}

export default App
