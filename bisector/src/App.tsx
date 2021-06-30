/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import './App.scss'
// import LineChartBisectorWidget from './widgets/LineChartBisectorWidget/LineChartBisectorWidget'
import LineChartDateBisectorWidget from './widgets/LineChartDateBisectorWidget/LineChartDateBisectorWidget'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LineChartBisectorWidget /> */}
        <LineChartDateBisectorWidget />
      </header>
    </div>
  )
}

export default App
