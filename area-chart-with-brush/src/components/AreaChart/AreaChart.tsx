/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/AreaChart/AreaChart.tsx

Created with;
$ npx generate-react-cli component AreaChart --type=d3WidgetComponent

*/

import React, { useEffect, useCallback, useState } from 'react'
import './AreaChart.scss'
import * as d3 from 'd3'
import { Types } from '../../widgets/ChartWidget/types'
import AreaChartHelper from './AreaChartHelper'

const AreaChart = ( props : IAreaChartProps ) => {

  const [loaded, setLoaded] = useState(false)

  const [prevHeight, setPrevHeight] = useState(props.dimensions.height)
  const [prevWidth, setPrevWidth] = useState(props.dimensions.width)

  const memoizedDrawCallback = useCallback(() => {
    // d3.select('#div').selectAll('*').remove()
  }, [])

  const memoizedUpdateCallback = useCallback(() => {
    const scales = AreaChartHelper.getScales(props.data, props.dimensions.boundedWidth, props.dimensions.boundedHeight, props.propertiesNames)
    const bounds = d3.select('#bounds')
    const helper = new AreaChartHelper(props.propertiesNames)

    // Chart

    // draw chart
    const linesGenerator = d3
      .area()
      // @ts-ignore
      .x((d) => scales.xScale(helper.xAccessor(d)))
      // @ts-ignore
      .y0(scales.yScale(0))
      .y1((d) => {
        // @ts-ignore
        return scales.yScale((d as Types.Data).value)
      })

    d3.select('#path')
      .attr('fill', props.fill)
      .attr('stroke', props.stroke)
      // @ts-ignore
      .attr('d', linesGenerator(props.data))

    // Peripherals

    // yAxis
    const yAxisGenerator = d3.axisLeft(scales.yScale)
    bounds
      .select('#y-axis')
      // @ts-ignore
      .call(yAxisGenerator)

    // xAxis
    const xAxisGenerator = d3.axisBottom(scales.xScale)
    bounds
      .select('#x-axis')
      // @ts-ignore
      .call(xAxisGenerator)
      .style('transform', `translateY(${props.dimensions.boundedHeight}px)`)

  }, [props.data, props.dimensions.boundedHeight, props.dimensions.boundedWidth, props.fill, props.propertiesNames, props.stroke])

  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
      memoizedDrawCallback()
      memoizedUpdateCallback()
    } else {
      memoizedUpdateCallback()
    }
  }, [loaded, memoizedDrawCallback, memoizedUpdateCallback])

  useEffect(() => {
    const isNewHeight = prevHeight !== props.dimensions.height
    const isNewWidth = prevWidth !== props.dimensions.width
    if (isNewHeight || isNewWidth) {
      setPrevWidth(props.dimensions.height)
      setPrevHeight(props.dimensions.width)
      memoizedDrawCallback()
      memoizedUpdateCallback()
    }
  }, [memoizedDrawCallback, memoizedUpdateCallback, prevHeight, prevWidth, props.dimensions.height, props.dimensions.width])

  return (
    <div id="div">
      <svg id="wrapper" width={props.dimensions.width} height={props.dimensions.height}>
        <g
          id="bounds"
          style={{ transform: `translate(${props.dimensions.margin.left}px, ${props.dimensions.margin.top}px)` }}
        >
          <path id="path" />
          <g id="x-axis" />
          <g id="y-axis" />
        </g>
      </svg>
    </div>
  )
}

interface IAreaChartProps {
  dimensions: Types.Dimensions
  data: Types.Data[]
  propertiesNames: string[]
  fill: string
  stroke: string
}

export default AreaChart
