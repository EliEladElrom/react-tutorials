/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleReactVizChart/SimpleReactVizChart.tsx
*/

import React from 'react'
import '../../../node_modules/react-vis/dist/style.css'
import { XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines } from 'react-vis'

const SimpleReactVizChart = () => {
  return (
    <>
      <div className="App">

        <XYPlot height={300} width={300}>
          <LineSeries
            data={[
              { x: 0, y: 8 },
              { x: 1, y: 5 },
              { x: 2, y: 4 },
              { x: 3, y: 9 },
              { x: 4, y: 1 },
              { x: 5, y: 7 },
              { x: 6, y: 6 },
              { x: 7, y: 3 },
              { x: 8, y: 2 },
              { x: 9, y: 0 },
            ]}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
        </XYPlot>

      </div>
    </>
  )
}

export default SimpleReactVizChart
