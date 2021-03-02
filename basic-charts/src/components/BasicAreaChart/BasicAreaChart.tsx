/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BasicAreaChart/BasicAreaChart.tsx
*/

import React, { useEffect } from 'react'
import './BasicAreaChart.scss'
import * as d3 from 'd3'
import { Types } from './types'

const BasicAreaChart = (props: IBasicAreaChartProps) => {
  useEffect(() => {
    draw()
  })

  const draw = () => {
    const width = props.width - props.left - props.right
    const height = props.height - props.top - props.bottom

    const svg = d3
      .select('.basicAreaChart')
      .append('svg')
      .attr('width', width + props.left + props.right)
      .attr('height', height + props.top + props.bottom)
      .append('g')
      .attr('transform', `translate(${props.left},${props.top})`)

    d3.dsv(',', '/Data/area.csv', (d) => {
      const res = (d as unknown) as Types.data
      const date = d3.timeParse('%Y-%m-%d')(res.date)
      return {
        date,
        value: res.value,
      }
    }).then(function results(data) {
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, (d) => {
            return d.date
          }) as [Date, Date]
        )
        .range([0, width])

      svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x))

      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d) => {
            return +d.value
          }),
        ] as number[])
        .range([height, 0])
      svg.append('g').call(d3.axisLeft(y))

      svg
        .append('path')
        .datum(data)
        .attr('fill', props.fill)
        .attr('stroke', 'white')
        .attr('stroke-width', 1.6)
        .attr(
          'd',
          // @ts-ignore
          d3
            .area()
            .curve(d3.curveLinear)
            .x((d) => {
              return x(((d as unknown) as { date: number }).date)
            })
            .y0(y(0))
            .y1((d) => {
              return y(((d as unknown) as Types.data).value)
            })
        )
    })
  }

  return <div className="basicAreaChart" />
}

interface IBasicAreaChartProps {
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
  fill: string
}

export default BasicAreaChart
