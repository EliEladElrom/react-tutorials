/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/WordCloudHelper/WordCloudHelper.tsx

Created with;
$ npx generate-react-cli component WordCloud --type=d3WidgetComponent

Implement - pass metric:
const helper = new WordCloudHelper(props.propertiesNames)

*/

import * as d3 from 'd3'
import d3Cloud from 'd3-cloud'
import { Types } from '../../widgets/WordCloudWidget/types'

export default class WordCloudHelper {
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
    const helper = new WordCloudHelper(metric)
    return {
      layout: d3Cloud()
        .size([width, height])
        .words(
          (data.map(helper.yAccessor)).map((d) => {
            return { text: d, size: 10 + Math.random() * 90, test: 'haha' }
          })
        )
        .padding(0)
        // eslint-disable-next-line no-bitwise
        .rotate(() => (~~(Math.random() * 6) - 3) * 30)
        // @ts-ignore
        .fontSize((d) => {
          return d.size
        })
    }
  }
}