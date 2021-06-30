/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/LineChartDateHelper/LineChartDateHelper.tsx
*/

import * as d3 from 'd3'
import { Types } from '../../widgets/LineChartDateBisectorWidget/types'

export default class LineChartDateBisectorHelper {
  private readonly metric: string[]

  constructor(metric: string[]) {
    this.metric = metric
  }

  static dateParser = d3.timeParse('%m/%d/%Y')

  // @ts-ignore
  public xAccessor = (d: Types.Data) => LineChartDateBisectorHelper.dateParser(d[this.metric[0]] as string)

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
    const helper = new LineChartDateBisectorHelper(metric)
    return {
      xScale: d3
        .scaleTime()
        .domain(d3.extent(data, helper.xAccessor) as [Date, Date])
        .range([0, width])
        .nice(),
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
