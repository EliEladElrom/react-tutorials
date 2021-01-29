/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/PulsatingCircle/PulsatingCircleD3.tsx
*/

import React, { useEffect } from 'react'
import * as d3 from 'd3'

const PulsatingCircleD3 = () /* props */ => {
  useEffect(() => {
    drawPulsatingCircle()
  })
  const drawPulsatingCircle = () => {
    (function repeat() {
      d3.selectAll('.circle')
        .transition()
        .duration(300)
        .attr('stroke-width', 0)
        .attr('stroke-opacity', 0)
        .transition()
        .duration(300)
        .attr('stroke-width', 0)
        .attr('stroke-opacity', 0.5)
        .transition()
        .duration(1000)
        .attr('stroke-width', 25)
        .attr('stroke-opacity', 0)
        .ease(d3.easeSin)
        .on('end', repeat)
    })()
  }

  return (
    <>
      <svg>
        <circle className="circle" cx="50" cy="50" stroke="orange" fill="orange" r="8" />
      </svg>
    </>
  )
}
export default PulsatingCircleD3
