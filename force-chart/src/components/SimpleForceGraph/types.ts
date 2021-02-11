/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/SimpleForceGraph/types.ts
*/

export namespace Types {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export type node = {
    name: string
    group: number
    radiusSize: number
    fillColor: string
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export type link = {
    source: string
    target: string
    value: string
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export type dataObject = {
    nodes: node[]
    links: link[]
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export type point = {
    x: number
    y: number
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export type datum = {
    x: number
    y: number
    fx: number | null
    fy: number | null
  }
}
