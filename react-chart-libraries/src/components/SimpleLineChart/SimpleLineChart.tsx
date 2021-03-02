/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleLineChart/SimpleLineChart.tsx
*/

import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis } from 'recharts'
import { Types } from './types'

const CustomizedAxisTick = (props: { x: number; y: number; payload: { value: string } }) => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <text fontSize={12} x={0} y={0} dy={16} textAnchor="end" fill="black" transform="rotate(-35)">
        {props.payload.value}
      </text>
    </g>
  )
}

const CustomizedYAxisTick = (props: { x: number; y: number; payload: { value: string } }) => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <text fontSize="12px" x={0} y={0} dy={0} textAnchor="end" fill="black">
        {props.payload.value}
      </text>
    </g>
  )
}

const EmptyDot = () => {
  return <></>
}

const SimpleLineChart = (props: ISimpleLineChartProps) => {
  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          height={60}
          dataKey="date"
          // @ts-ignore
          tick={<CustomizedAxisTick />}
        />
        <YAxis
          // @ts-ignore
          tick={<CustomizedYAxisTick />}
        />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={<EmptyDot />} />
      </LineChart>
    </>
  )
}

interface ISimpleLineChartProps {
  data: Types.Data[]
}

export default SimpleLineChart
