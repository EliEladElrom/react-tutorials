/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React from 'react'
import './App.scss'
import PulsatingCircleD3 from './components/PulsatingCircle/PulsatingCircleD3'
// import CircleWithD3Events from './components/CircleWithEvents/CircleWithD3Events'
// import CircleWithEvents from './components/CircleWithEvents/CircleWithEvents'
// import PulsatingCircleD3 from './components/PulsatingCircle/PulsatingCircleD3'
// import HelloJSXData from './components/HelloJSXData/HelloJSXData'
// import HelloD3Data from './components/HelloD3Data/HelloD3Data'
// import JSXCanvas from './components/JSXCanvas/JSXCanvas'
// import HelloSVG from './components/HelloSVG/HelloSVG'
// import SimpleChart from './components/SimpleChart/SimpleChart'
// import PulsatingCircle from './components/PulsatingCircle/PulsatingCircle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PulsatingCircleD3 />

        {/*
        <HelloSVG />
        <JSXCanvas />
        <SimpleChart />
        <HelloJSXData data={['one', 'two', 'three', 'four']} />
        <HelloD3Data data={['one', 'two', 'three', 'four']} />
        <SimpleChart />

        <svg width={400} height={400} viewBox="0 0 800 450">
          <g>
            <PulsatingCircle cy={100} cx={100} />
          </g>
        </svg>

        <CircleWithEvents />
        <CircleWithD3Events />

        <PulsatingCircleD3 />

        */}
      </header>
    </div>
  )
}

export default App
