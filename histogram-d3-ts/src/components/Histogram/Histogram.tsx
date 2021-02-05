/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Histogram/Histogram.tsx
*/

import React from 'react'
import './Histogram.scss'
import * as d3 from 'd3'
import Slider from '@material-ui/core/Slider'
import { Typography } from '@material-ui/core'
import { Types } from './types'

export default class Histogram extends React.PureComponent<IHistogramProps, IHistogramState> {
  constructor(props: IHistogramProps) {
    super(props)
    this.state = {
      numberOfTicks: 10,
    }
  }

  componentDidMount() {
    this.draw()
  }

  componentDidUpdate(prevProps: IHistogramProps, prevState: IHistogramState) {
    this.draw()
  }

  handleChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
    const value = newValue as number
    this.setState((prevState: IHistogramState) => {
      return {
        ...prevState,
        numberOfTicks: value,
      }
    })
  }

  draw = () => {
    const histogramChart = d3.selectAll('.histogramChart')

    d3.selectAll('.histogramChart').selectAll('g').remove()

    const xAxisGroupNode = histogramChart.append('g')
    const yAxisGroupNode = histogramChart.append('g')

    // x axis - init & scale
    const xAxis = d3.scaleLinear().domain([75, 650]).range([0, this.props.width])

    // x axis - draw
    xAxisGroupNode.attr('transform', `translate(0,${this.props.height})`).call(d3.axisBottom(xAxis))

    // y axis: init & set range
    const yAxis = d3.scaleLinear().range([this.props.height, 0])

    const histogram = d3
      .bin()
      .value((d) => {
        return ((d as unknown) as Types.Data).price
      })
      .domain([0, 750])
      .thresholds(xAxis.ticks(this.state.numberOfTicks))

    const bins = histogram(this.props.data as Array<never>)

    const yAxisMaxValues = d3.max(bins, (d) => {
      return d.length
    }) as number
    yAxis.domain([0, yAxisMaxValues])

    // draw
    yAxisGroupNode.transition().duration(750).call(d3.axisLeft(yAxis))

    // join rect with bins
    const barsNode = histogramChart.selectAll<SVGRectElement, number[]>('rect').data(bins)

    const { height } = this.props

    // Deal with the bars and as well as new ones on redraw
    barsNode
      .enter()
      .append('rect')
      .merge(barsNode) // get existing elements
      .transition() // apply changes
      .duration(750)
      .attr('xAxis', 1)
      .attr('transform', function transform(d) {
        return `translate(${xAxis((d as Types.BarsNode).x0)},${yAxis((d as Types.BarsNode).length)})`
      })
      .attr('width', function widthFunc(d) {
        return xAxis((d as Types.BarsNode).x1) - xAxis((d as Types.BarsNode).x0) - 1
      })
      .attr('height', function heightFunc(d) {
        return height - yAxis(d.length)
      })
      .style('fill', this.props.fill)

    // Lastly, If there are extra bars because of the change, remove them;
    barsNode.exit().remove()
  }

  render() {
    const { width, height, margin } = this.props
    return (
      <div className="histogram">
        <Typography id="discrete-slider" gutterBottom>
          2020 Eth Price days/price Histogram Chart
        </Typography>
        <svg height={height + margin.top + margin.bottom} width={width + margin.left + margin.right}>
          <text x={margin.left - 35} y={margin.top - 10} fontSize={10}>
            Days
          </text>
          <text x={width + margin.left + 20} y={height + margin.top + 16} fontSize={10}>
            Price
          </text>
          <g className="histogramChart" transform={`translate(${margin.left},${margin.top})`} />
        </svg>
        <div className="sliderDiv">
          <Typography id="discrete-slider" gutterBottom>
            Number of ticks:
          </Typography>
          <Slider
            defaultValue={this.state.numberOfTicks}
            getAriaValueText={(value: number) => {
              return `${value} ticks`
            }}
            valueLabelDisplay="auto"
            min={10}
            max={85}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

interface IHistogramProps {
  data: Types.Data[]
  margin: {
    top: number
    right: number
    bottom: number
    left: number
  }
  width: number
  height: number
  fill: string
}

interface IHistogramState {
  numberOfTicks: number
}
