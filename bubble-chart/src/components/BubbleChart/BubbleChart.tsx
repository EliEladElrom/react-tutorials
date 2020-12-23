/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/BubbleChart/BubbleChart.tsx
*/

import React from 'react'
import * as d3 from 'd3'
import { Simulation, SimulationNodeDatum } from 'd3-force' // yarn add d3-force @types/d3-force
// @ts-ignore
import uuid from 'react-uuid'
import * as R from 'ramda' // yarn add ramda @types/ramda
import './BubbleChart.scss'

class BubbleChart extends React.Component<IBubbleChartProps, IBubbleChartState> {
  public setBubblesDrawingData: { v: number }[]

  // @ts-ignore
  private simulation: Simulation<SimulationNodeDatum, undefined> | undefined

  constructor(props: IBubbleChartProps) {
    super(props)
    this.state = {
      data: [],
    }

    this.setBubblesDrawingData = R.map((v) => ({
      v: props.bubblesData[v as number].size,
    }))(R.range(0, props.bubblesData.length))

    this.radiusScale = this.radiusScale.bind(this)
    this.simulatePositions = this.simulatePositions.bind(this)
    this.renderBubbles = this.renderBubbles.bind(this)
  }

  componentDidMount() {
    this.animateBubbles()
  }

  animateBubbles = () => {
    if (this.props.bubblesData.length > 0) {
      this.simulatePositions(this.setBubblesDrawingData)
    }
  }

  radiusScale = (value: d3.NumberValue) => {
    const fx = d3.scaleSqrt().range([1, 50]).domain([this.props.minValue, this.props.maxValue])
    return fx(value)
  }

  simulatePositions = (data: { v: number }[]) => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data as SimulationNodeDatum[])
      .velocityDecay(0.05)
      .force('x', d3.forceX().strength(0.2))
      .force('y', d3.forceY().strength(0.2))
      .force(
        'collide',
        d3.forceCollide((d: SimulationNodeDatum) => {
          return this.radiusScale((d as { v: number }).v) + 2
        })
      )
      .on('tick', () => {
        this.setState({ data })
      })
  }

  renderBubbles = (data: []) => {
    return data.map((item: { v: number; x: number; y: number }, index) => {
      const { props } = this
      const fontSize = this.radiusScale(item.v) / 3
      return (
        <g key={`g-${uuid()}`} transform={`translate(${props.width / 2 + item.x}, ${props.height / 2 + item.y})`}>
          <circle r={this.radiusScale(item.v)} fill={props.bubblesData[index].fillColor} stroke="white" strokeWidth="2" />
          <text dy="6" fill={this.props.textFillColor} textAnchor="middle" fontSize={`${fontSize}px`} fontWeight="normal">
            {props.bubblesData[index].name}
          </text>
        </g>
      )
    })
  }

  render() {
    return (
      <div>
        <div
          aria-hidden="true"
          id="chart"
          style={{ background: this.props.backgroundColor, cursor: 'pointer' }}
          onClick={() => {
            this.animateBubbles()
          }}
        >
          <svg width={this.props.width} height={this.props.height}>
            {this.renderBubbles(this.state.data as [])}
          </svg>
        </div>
      </div>
    )
  }
}

interface IBubbleChartProps {
  bubblesData: dataObject[]
  width: number
  height: number
  backgroundColor: string
  textFillColor: string
  minValue: number
  maxValue: number
}

interface IBubbleChartState {
  data: { v: number }[]
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface dataObject {
  id: number
  name: string
  size: number
  fillColor: string
}

export default BubbleChart
