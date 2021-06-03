/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/WordCloudWidget/WordCloudWidget.tsx

Created with;
$ npx generate-react-cli component WordCloudWidget --type=d3Widget

*/

import React, { useEffect, useRef, useState } from 'react'
import './WordCloudWidget.scss'
import * as d3 from 'd3'
import { Types } from './types'
import useWindowDimensions from '../../hooks/WindowDimensions'

import WordCloud from '../../components/WordCloud/WordCloud'
import ChartHelper from '../../components/WordCloud/WordCloudHelper'

const WordCloudWidget = () => {
  const [data, setData] = useState<Types.Data[]>([{}])

  const [propertiesNames] = useState(['value', 'text'])

  const { width, height } = useWindowDimensions()

  const dimensions = useRef() as { current: Types.Dimensions }
  dimensions.current = ChartHelper.getDimensions(width * 0.9, height * 0.9, 30, 50, 10, 50)

  // resize
  useEffect(() => {
    ;(dimensions as unknown as { current: Types.Dimensions }).current = ChartHelper.getDimensions(width * 0.9, height * 0.9, 30, 50, 10, 50)
    // console.log(dimensions.current)
  }, [width, height, dimensions])

  const loadData = () => {
    d3.dsv(',', '/data/data.csv', (d) => {
      return d as unknown as Types.Data[]
    }).then((d) => {
      setData(d as unknown as Types.Data[])
    })
  }

  useEffect(() => {
    if (data.length <= 1) loadData()
  })

  return (
    <>
      {data.length > 1 ? (
        <>
          <h3>Word Cloud</h3>
          <WordCloud dimensions={dimensions.current} data={data} propertiesNames={propertiesNames} />
        </>
      ) : (
        <>Loading</>
      )}
    </>
  )
}
export default WordCloudWidget
