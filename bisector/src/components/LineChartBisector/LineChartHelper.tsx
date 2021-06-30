/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/LineChartHelper/LineChartHelper.tsx
*/

import * as d3 from 'd3'
import { Types } from '../../widgets/LineChartBisectorWidget/types'

export default class LineChartHelper {
  private readonly metric: string[]

  constructor(metric: string[]) {
    this.metric = metric
  }

  // @ts-ignore
  public xAccessor = (d: Types.Data) => d[this.metric[0]]

  // @ts-ignore
  public yAccessor = (d: Types.Data) => d[this.metric[1]]

  static getDimensions = (width: number, height: number, left: number, right: number, top: number, bottom: number) => {
    const dimensions = {
      width,
      height,
      margin: {
        left,
        right,
        top,
        bottom,
      },
      boundedWidth: 0,
      boundedHeight: 0,
    }
    dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

    return dimensions
  }

  static getScales = (data: Types.Data[], width: number, height: number, metric: string[]) => {
    const helper = new LineChartHelper(metric)
    return {
      xScale: d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d) => {
            return Math.max(...data.map(helper.xAccessor), 0)
          }),
        ] as [number, number])
        .range([height, 0]),
      yScale: d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d) => {
            return Math.max(...data.map(helper.yAccessor), 0)
          }),
        ] as [number, number])
        .range([height, 0]),
    }
  }
}
