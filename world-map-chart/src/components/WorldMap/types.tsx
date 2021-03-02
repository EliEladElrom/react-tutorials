/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BasicScatterChart/types.ts
*/

import { Feature, Geometry } from 'geojson'

export namespace Types {
  export type CoordinatesData = {
    id: number
    latitude: number
    longitude: number
  }

  export type MapObject = {
    mapFeatures: Array<Feature<Geometry | null>>
  }
}
