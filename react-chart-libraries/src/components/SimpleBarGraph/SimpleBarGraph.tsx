/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleBarGraph/SimpleBarGraph.tsx
*/

import React from 'react'
import { letterFrequency } from '@visx/mock-data'
import { Group } from '@visx/group'
import { Bar } from '@visx/shape'
import { scaleLinear, scaleBand } from '@visx/scale'

const uuid = require('react-uuid')

// We'll use some mock data from `@visx/mock-data` for this.
const data = letterFrequency

// Define the graph dimensions and margins
const width = 500
const height = 500
const margin = { top: 20, bottom: 20, left: 20, right: 20 }

// Then we'll create some bounds
const xMax = width - margin.left - margin.right
const yMax = height - margin.top - margin.bottom

// We'll make some helpers to get at the data we want
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const x = (d: { letter: any }) => d.letter
const y = (d: { frequency: React.Key }) => +d.frequency * 100

// And then scale the graph by our data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(x),
  padding: 0.4,
})
const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(y))],
})

// Compose together the scale and accessor functions to get point functions
// @ts-ignore
const compose = (scale, accessor) => (d) => scale(accessor(d))
const xPoint = compose(xScale, x)
const yPoint = compose(yScale, y)

// Finally we'll embed it all in an SVG
function SimpleBarGraph() {
  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d)
        return (
          <Group key={`bar-${uuid()}`}>
            <Bar x={xPoint(d)} y={yMax - barHeight} height={barHeight} width={xScale.bandwidth()} fill="grey" />
          </Group>
        )
      })}
    </svg>
  )
}

export default SimpleBarGraph
