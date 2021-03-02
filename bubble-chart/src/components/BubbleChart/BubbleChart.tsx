/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/BubbleChart/BubbleChart.tsx
*/

import React from 'react'
import * as d3 from 'd3'
import { Simulation, SimulationNodeDatum } from 'd3-force'
import './BubbleChart.scss'
import { Button } from '@material-ui/core'
import { Types } from './types'

const uuid = require('react-uuid')

class BubbleChart extends React.Component<IBubbleChartProps, IBubbleChartState> {
  public forceData: Types.ForceData[]

  private simulation: Simulation<SimulationNodeDatum, undefined> | undefined

  constructor(props: IBubbleChartProps) {
    super(props)
    this.state = {
      data: [],
    }
    this.forceData = this.setForceData(props)
  }

  componentDidMount() {
    this.animateBubbles()
  }

  componentDidUpdate(prevProps: IBubbleChartProps, prevState: IBubbleChartState) {
    if (JSON.stringify(prevProps.bubblesData) !== JSON.stringify(this.props.bubblesData)) {
      this.forceData = this.setForceData(this.props)
      this.animateBubbles()
    }
  }

  setForceData = ( props: IBubbleChartProps ) => {
    const d = []
    for (let i= 0; i < props.bubblesData.length; i++) {
      d.push({ 'size': props.bubblesData[i].size })
    }
    return d
  }

  animateBubbles = () => {
    if (this.props.bubblesData.length > 0) {
      this.simulatePositions(this.forceData)
    }
  }

  radiusScale = (value: d3.NumberValue) => {
    const fx = d3.scaleSqrt().range([1, 50]).domain([this.props.minValue, this.props.maxValue])
    return fx(value)
  }

  simulatePositions = (data: Types.ForceData[]) => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data as SimulationNodeDatum[])
      .velocityDecay(0.05)
      .force('x', d3.forceX().strength(0.2))
      .force('y', d3.forceY().strength(0.2))
      .force(
        'collide',
        d3.forceCollide((d: SimulationNodeDatum) => {
          return this.radiusScale((d as Types.ForceData).size) + 2
        })
      )
      .on('tick', () => {
        this.setState({ data })
      })
  }

  renderBubbles = (data: []) => {
    return data.map((item: { v: number; x: number; y: number }, index) => {
      const { props } = this
      const fontSize = this.radiusScale((item as unknown as Types.ForceData).size) / 4
      const content = props.bubblesData.length > index ? props.bubblesData[index].name : ''
      const strokeColor = props.bubblesData.length > index ? 'darkgrey' : this.props.backgroundColor
      return (
        <g key={`g-${uuid()}`} transform={`translate(${props.width / 2 + item.x - 70}, ${props.height / 2 + item.y})`}>
          <circle
            style={{ cursor: 'pointer' }}
            onClick={() => {
              this.props.selectedCircle(content)
            }}
            id="circleSvg"
            r={this.radiusScale((item as unknown as Types.ForceData).size)}
            fill={props.bubblesData[index].fillColor}
            stroke={strokeColor}
            strokeWidth="2"
          />
          <text
            onClick={() => {
              this.props.selectedCircle(content)
            }}
            dy="6"
            className="bubbleText"
            fill={this.props.textFillColor}
            textAnchor="middle"
            fontSize={`${fontSize}px`}
            fontWeight="normal"
          >
            {content}
          </text>
        </g>
      )
    })
  }

  render() {
    return (
      <div>
        <Button
          className="buttonFixed"
          variant="contained"
          color="default"
          onClick={() => {
            this.animateBubbles()
          }}
        >
          Animate
        </Button>

        <div aria-hidden="true" id="chart" style={{ background: this.props.backgroundColor, cursor: 'pointer' }}>
          <svg width={this.props.width} height={this.props.height}>
            {this.renderBubbles(this.state.data as [])}
          </svg>
        </div>
      </div>
    )
  }
}

interface IBubbleChartProps {
  bubblesData: Types.Data[]
  width: number
  height: number
  backgroundColor: string
  textFillColor: string
  minValue: number
  maxValue: number
  selectedCircle: (content: string) => void
}

interface IBubbleChartState {
  data: Types.ForceData[]
}

export default BubbleChart
