/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BasicScatterChart/types.ts
*/

import { Feature, Geometry } from 'geojson'

export namespace Types {
  export type ClientData = {
    id: number
    latitude: number
    longitude: number
    name: string
    logo: string
    description: string
    address: string
    city: string
    state: string
    country: string
    website: string
  }

  export type MapObject = {
    mapFeatures: Array<Feature<Geometry | null>>
  }
}
