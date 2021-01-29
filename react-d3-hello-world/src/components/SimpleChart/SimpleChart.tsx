/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleChart/SimpleChart.tsx
*/

import React, { RefObject } from 'react'
import './SimpleChart.scss'
import * as d3 from 'd3'

export default class Component extends React.PureComponent<ISimpleChartProps, ISimpleChartState> {
  ref: RefObject<HTMLDivElement>

  data: number[]

  constructor(props: ISimpleChartProps) {
    super(props)
    this.state = {
      // TODO
    }
    this.ref = React.createRef()
    this.data = [100, 200, 300, 400, 500]
  }

  componentDidMount() {
    this.drawChart()
  }

  drawChart() {
    const size = 500
    const svg = d3.select(this.ref.current).append('svg').attr('width', size).attr('height', size)

    const rectWidth = 95
    svg
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 5 + i * (rectWidth + 5))
      .attr('y', (d) => size - d)
      .attr('width', rectWidth)
      .attr('height', (d) => d)
      .attr('fill', 'tomato')
  }

  render() {
    return <div className="SimpleChart" ref={this.ref} />
  }
}

interface ISimpleChartProps {
  // TODO
}

interface ISimpleChartState {
  // TODO
}
