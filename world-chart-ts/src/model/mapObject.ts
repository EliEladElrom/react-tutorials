/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/model/mapObject.ts
*/

import { Feature, Geometry } from 'geojson'

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface mapObject {
  mapFeatures: Array<Feature<Geometry | null>>
}

export const initMapObject = (): mapObject => ({
  mapFeatures: Array<Feature<null>>(),
})

export const setMapObject = (data: Array<Feature<Geometry | null>>): mapObject => ({
  mapFeatures: data,
})
