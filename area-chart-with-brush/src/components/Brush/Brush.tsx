/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Brush/Brush.tsx

Created with;
$ npx generate-react-cli component Brush --type=d3WidgetComponent

*/

import React, { useEffect, useCallback, useState, useRef } from 'react'
import './Brush.scss'
import * as d3 from 'd3'
import { BrushBehavior } from 'd3-brush'
import { Types } from '../../widgets/ChartWidget/types'
import AreaChartHelper from '../AreaChart/AreaChartHelper'

const Brush = ( props : IBrushProps ) => {

  const [loaded, setLoaded] = useState(false)

  const [prevHeight, setPrevHeight] = useState(props.dimensions.height)
  const [prevWidth, setPrevWidth] = useState(props.dimensions.width)

  const brush = useRef() as { current: BrushBehavior<unknown> }

  const memoizedDrawCallback = useCallback(() => {
    const scales = AreaChartHelper.getScales(props.data, props.dimensions.boundedWidth, props.focusHeight, props.propertiesNames)
    const helper = new AreaChartHelper(props.propertiesNames)

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

    d3.select('#brush-path')
      .attr('fill', props.fill)
      .attr('stroke', props.stroke)
      // @ts-ignore
      .attr('d', linesGenerator(props.data))

    brush.current = d3
      .brushX()
      .extent([
        [0, 0.5],
        [props.dimensions.width - props.dimensions.margin.right - props.dimensions.margin.left, props.focusHeight],
      ])
      .on('brush', brushed)
      .on('end', brushEnded)

    const lastDate = scales.xScale.domain()[1]
    const lastLocationToX = scales.xScale(lastDate)
    const defaultSelection = [lastLocationToX - 100, lastLocationToX]

    const gBrush = d3
      .select('#group-brush')
      // @ts-ignore
      .call(brush.current)
      // @ts-ignore
      .call(brush.current.move, defaultSelection)

    // brush handlers
    function brushed(event: { selection: number[] }) {
      if (event.selection) {
        const value = [scales.xScale.invert(event.selection[0]), scales.xScale.invert(event.selection[1])]
        props.onBrushUpdateData(value)
      }
    }
    function brushEnded(event: { selection: [] }) {
      if (!event.selection) {
        // @ts-ignore
        gBrush.call(brush.current.move, defaultSelection)
      }
    }

    // Peripherals

    // eslint-disable-next-line max-len
    const xAxis = (
      g: { attr: (arg0: string, arg1: string) => { (): never; new (): never; call: { (arg0: d3.Axis<d3.AxisDomain>): never; new (): never } } },
      x: d3.AxisScale<d3.AxisDomain>,
      xAxisHeight: number
    ) =>
      g.attr('transform', `translate(0,${xAxisHeight})`).call(
        d3
          .axisBottom(x)
          .ticks(props.dimensions.width / 80)
          .tickSizeOuter(0)
      )

    d3
      .select('#x-axis-brush')
      // @ts-ignore
      .call(xAxis, scales.xScale, props.focusHeight)

  }, [props])

  const memoizedUpdateCallback = useCallback(() => {
    d3.selectAll('#x-axis-brush').selectAll('*').remove()
    d3.selectAll('#brush-path').selectAll('*').remove()
  }, [])

  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
      memoizedDrawCallback()
    }
  }, [loaded, memoizedDrawCallback])

  useEffect(() => {
    const isNewHeight = prevHeight !== props.dimensions.height
    const isNewWidth = prevWidth !== props.dimensions.width
    if (isNewHeight || isNewWidth) {
      setPrevWidth(props.dimensions.height)
      setPrevHeight(props.dimensions.width)
      memoizedUpdateCallback()
      memoizedDrawCallback()
    }
  }, [memoizedDrawCallback, memoizedUpdateCallback, prevHeight, prevWidth, props.dimensions.height, props.dimensions.width])

  return (
    <div id="div">
      <svg
        id="brush-wrapper"
        width={props.dimensions.width}
        height={props.dimensions.height}
        style={{ display: 'block' }}
      >
        <g
          id="brush-bounds"
          style={{ transform: `translate(${props.dimensions.margin.left}px, ${props.dimensions.margin.top}px)` }}
        >
          <path id="brush-path" />
          <g id="x-axis-brush" />
          <g id="group-brush" />
        </g>
      </svg>
    </div>
  )
}

interface IBrushProps {
  dimensions: Types.Dimensions
  data: Types.Data[]
  propertiesNames: string[]
  onBrushUpdateData: (value: Date[]) => void
  fill: string
  stroke: string
  focusHeight: number
}

export default Brush
