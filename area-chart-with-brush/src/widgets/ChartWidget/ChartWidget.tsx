/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/ChartWidget/ChartWidget.tsx

Created with;
$ npx generate-react-cli component ChartWidget --type=d3Widget

*/

import React, { useEffect, useRef, useState } from 'react'
import './ChartWidget.scss'
import * as d3 from 'd3'
import { Types } from './types'
import useWindowDimensions from '../../hooks/WindowDimensions'

// TODO EE: Update Chart, ChartHelper to actual component name & helper
import AreaChart from '../../components/AreaChart/AreaChart'
import ChartHelper from '../../components/AreaChart/AreaChartHelper'
// @ts-ignore
import Brush from '../../components/Brush/Brush'

const ChartWidget = () => {

  const [data, setData] = useState<Types.Data[]>([{ date: '', value: 0 }])
  const [brushedData, setBrushedData] = useState<Types.Data[]>([{ date: '', value: 0 }])

  const [propertiesNames] = useState(['date', 'value'])

  const { width, height } = useWindowDimensions()

  const dimensions = useRef() as { current: Types.Dimensions }
  dimensions.current = ChartHelper.getDimensions(width * 0.9, height * 0.5, 50, 50, 10, 50)

  // resize
  useEffect(() => {
    (dimensions as unknown as { current: Types.Dimensions }).current = ChartHelper.getDimensions(width * 0.9, height * 0.5, 50, 50, 10, 50)
    // console.log(dimensions.current)
  }, [width, height, dimensions])

  const loadData = () => {
    d3.dsv(',', '/data/area.csv', (d) => {
      return (d as unknown) as Types.Data[]
    }).then((d) => {
      setData((d as unknown) as Types.Data[])
    })
  }

  useEffect(() => {
    if (data.length <= 1)
      loadData()
  })

  const onBrushUpdateData = (values: Date[]) => {
    // console.log(`${values[0].toDateString()  }, ${  values[1].toDateString()}`)
    let newData
    // eslint-disable-next-line prefer-const
    newData = []
    for (let i = 0; i < data.length; i++) {
      // const check = data[i].date as unknown as Date
      const check = d3.timeParse('%Y-%m-%d')(data[i].date as unknown as string)
      // @ts-ignore
      if (check >= values[0] && check <= values[1]) {
        newData.push(data[i])
      }
    }
    // eslint-disable-next-line no-console
    if (newData.length > 1 && newData[0].date !== brushedData[0].date) {
      // console.log(`newData: ${  newData.length}`)
      setBrushedData(newData)
    }
  }

  return (
    <>
      {data.length > 1 ? (
        <>
          <h3>Area Chart With Brush Tool</h3>
          <AreaChart
            dimensions={dimensions.current}
            data={brushedData}
            propertiesNames={propertiesNames}
            fill="tomato"
            stroke="rgb(47, 74, 89)"
          />
          <Brush
            dimensions={dimensions.current}
            data={data}
            onBrushUpdateData={onBrushUpdateData}
            propertiesNames={propertiesNames}
            fill="tomato"
            stroke="rgb(47, 74, 89)"
            focusHeight={100}
          />
        </>
      ) : (
        <>Loading</>
      )}
    </>
  )
}
export default ChartWidget