/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/App.tsx
*/

import React, { useEffect } from 'react'
import './App.scss'
// import * as d3 from 'd3'
// import Histogram from './components/Histogram/Histogram'
// import { Types } from './components/Histogram/types'
import HistogramWidget from './widgets/HistogramWidget/HistogramWidget'

function App() {
  // const [data, setData] = React.useState([{ price: 0 }] as Types.Data[])
  useEffect(() => {
    /*
    if (data.length <= 1) {
      d3.dsv(',', '/data/historicalPrice.csv', (d) => {
        return {
          price: (d.open as unknown) as number,
        }
      }).then((d) => {
        setData(d)
      })
    }
    */
  })
  return (
    <div className="App">
      <header className="App-header">
        {/*
        <Histogram data={data} margin={{ top: 20, right: 45, bottom: 20, left: 50 }} width={400} height={400} />
        <Graph />
        */}
        <HistogramWidget />
      </header>
    </div>
  )
}

export default App
