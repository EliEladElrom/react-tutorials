/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/LineChartWidget/LineChartDateBisectorWidget.tsx
*/

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { Types } from './types'
import useWindowDimensions from '../../hooks/WindowDimensions'

import LineChartDateBisectorHelper from '../../components/LineChartDateBisector/LineChartDateBisectorHelper'
import LineChartDateBisector from '../../components/LineChartDateBisector/LineChartDateBisector'

const LineChartDateBisectorWidget = () => {
  const [data, setData] = useState<Types.Data[]>([{ date: '', y: 0 }])

  const { width, height } = useWindowDimensions()

  const dimensions = useRef() as { current: Types.Dimensions }
  dimensions.current = LineChartDateBisectorHelper.getDimensions(width * 0.9, height * 0.9, 30, 50, 10, 20)

  // resize
  useEffect(() => {
    ((dimensions as unknown) as { current: Types.Dimensions }).current = LineChartDateBisectorHelper.getDimensions(width * 0.9, height * 0.9, 30, 50, 10, 20)
    // console.log(dimensions.current)
  }, [width, height])

  const loadData = () => {
    d3.dsv(',', '/data/line.csv', (d) => {
      return (d as unknown) as Types.Data[]
    }).then((d) => {
      setData((d as unknown) as Types.Data[])
    })
  }

  useEffect(() => {
    if (data.length <= 1) loadData()
  })

  return <>
    {data.length > 1
      ?
      <LineChartDateBisector
        dimensions={dimensions.current}
        data={data}
        propertiesNames={['date', 'y']}
      />
      :
      <>Loading</>}
    </>
}
export default LineChartDateBisectorWidget
