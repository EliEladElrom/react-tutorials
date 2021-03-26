/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/selectors/mapSelectors.ts
*/

import { selector } from 'recoil'
import { Feature, FeatureCollection, Geometry } from 'geojson'
import { feature } from 'topojson-client'
import { setMapObject } from '../../model'

export const getMapData = selector({
  key: 'GetMapData',
  get: async () => {
    return getMapDataFromFile()
  },
})

const getMapDataFromFile = () =>
  new Promise((resolve) =>
    fetch('/data/world-110m.json').then((response) => {
      if (response.status !== 200) {
        // eslint-disable-next-line no-console
        console.log(`Houston, we have a problem! ${response.status}`)
        return
      }
      response.json().then((worldData) => {
        const mapFeatures: Array<Feature<Geometry | null>> = ((feature(worldData, worldData.objects.countries) as unknown) as FeatureCollection).features
        resolve(setMapObject(mapFeatures))
      })
    })
  )
