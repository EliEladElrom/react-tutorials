/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/ChartWidget/types.ts
*/

export namespace Types {
  export type Data = {
    date?: string
    value?: number
  }
  export type Dimensions = {
    width: number
    height: number
    margin: {
      left: number
      right: number
      top: number
      bottom: number
    }
    boundedWidth: number
    boundedHeight: number
  }
}