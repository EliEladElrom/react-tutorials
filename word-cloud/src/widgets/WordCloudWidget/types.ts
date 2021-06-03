/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/WordCloudWidget/types.ts

Created with;
$ npx generate-react-cli component WordCloudWidget --type=d3Widget

*/

export namespace Types {
  export type Data = {
    value?: number
    text?: string
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
