/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Brush/BrushHelper.tsx

Implement - pass metric:
const helper = new BrushChartHelper(props.propertiesNames)

*/

import * as d3 from 'd3'
import { Types } from '../../widgets/ChartWidget/types'

export default class BrushChartHelper {

  private readonly metric: string[]

  constructor(metric: string[]) {
    this.metric = metric
  }

  static dateParser = d3.timeParse('%Y-%m-%d')

  // @ts-ignore
  public xAccessor = (d: Types.Data) => BrushChartHelper.dateParser(d[this.metric[0]] as string)

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
    const helper = new BrushChartHelper(metric)
    return {
      xScale: d3
        .scaleTime()
        .domain(d3.extent(data, helper.xAccessor) as [Date, Date])
        .range([0, width]),
      yScale: d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d) => {
            return +(d.value as number)
          }),
        ] as number[])
        .range([height, 0])
        .nice(),
    }
  }
}
