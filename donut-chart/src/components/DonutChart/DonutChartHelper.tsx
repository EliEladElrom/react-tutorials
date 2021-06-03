/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/DonutChartHelper/DonutChartHelper.tsx

Implement - pass metric:
const helper = new DonutChartHelper(props.propertiesNames)

*/

import * as d3 from 'd3'
import { Types } from '../../widgets/DonutChartWidget/types'

export default class DonutChartHelper {

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
    return {
      color: d3
        .scaleOrdinal()
        .domain(
          (d3.extent(data, (d) => {
            return d.name
          }) as unknown) as string
        )
        .range(d3.schemeCategory10)
    }
  }
}
