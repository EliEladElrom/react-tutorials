/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BasicLineChart/BasicLineChart.tsx
*/

import React, { useEffect } from 'react'
import './BasicLineChart.scss'
import * as d3 from 'd3'
import { Types } from './types'

const BasicLineChart = (props: IBasicLineChartProps) => {
  useEffect(() => {
    draw()
  })

  const draw = () => {
    const width = props.width - props.left - props.right
    const height = props.height - props.top - props.bottom

    const svg = d3
      .select('.basicLineChart')
      .append('svg')
      .attr('width', width + props.left + props.right)
      .attr('height', height + props.top + props.bottom)
      .append('g')
      .attr('transform', `translate(${props.left},${props.top})`)

    d3.dsv(',', '/Data/line.csv', (d) => {
      const res = (d as unknown) as Types.Data
      const date = d3.timeParse('%Y-%m-%d')(res.date)
      return {
        date,
        value: res.value,
      }
    }).then((data) => {
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
            return Math.max(...data.map((dt) => ((dt as unknown) as Types.Data).value), 0)
          }),
        ] as number[])
        .range([height, 0])
      svg.append('g').call(d3.axisLeft(y))

      // Add the line
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', props.fill)
        .attr('stroke-width', 1.6)
        .attr(
          'd',
          // @ts-ignore
          d3
            .line()
            .x((d) => {
              return x(((d as unknown) as { date: number }).date)
            })
            .y((d) => {
              return y(((d as unknown) as Types.Data).value)
            })
        )
    })
  }

  return <div className="basicLineChart" />
}

interface IBasicLineChartProps {
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
  fill: string
}

export default BasicLineChart
