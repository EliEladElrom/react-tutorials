/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import './App.scss'

// import BasicLineChart from './components/BasicLineChart/BasicLineChart'
// import BasicAreaChart from './components/BasicAreaChart/BasicAreaChart'
// import BasicBarChart from './components/BasicBarChart/BasicBarChart'
// import BasicPieChart from './components/BasicPieChart/BasicPieChart'
import BasicScatterChart from './components/BasicScatterChart/BasicScatterChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*
         <BasicLineChart top={10} right={50} bottom={50} left={50} width={800} height={400} fill="yellow" />
         <BasicAreaChart top={10} right={50} bottom={50} left={50} width={1000} height={400} fill="tomato" />
         <BasicBarChart top={10} right={50} bottom={50} left={50} width={900} height={400} fill="tomato" />
         <BasicPieChart width={400} height={400} top={10} right={10} bottom={10} left={10} />
         <BasicScatterChart width={800} height={400} top={10} right={50} bottom={50} left={50} fill="tomato" />
        */}
        <BasicScatterChart width={800} height={400} top={10} right={50} bottom={50} left={50} fill="tomato" />
      </header>
    </div>
  )
}

export default App
