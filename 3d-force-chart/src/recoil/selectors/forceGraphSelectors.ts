/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/recoil/selectors/forceGraphSelectors.ts
*/

import { selector } from 'recoil'
import { Types } from '../../components/Simple3DForceGraph/types'

export const getPowerChartData = selector({
  key: 'GetPowerChartData',
  get: () => {
    return getDataFromAPI()
  },
})
const getDataFromAPI = () =>
  new Promise((resolve) =>
    fetch('/data/power_network.json').then((response) => {
      if (response.status !== 200) {
        // eslint-disable-next-line no-console
        console.log(`Houston, we have a problem! ${response.status}`)
      }
      response.json().then((data) => {
        const d = data.results[0] as Types.DataObject
        resolve(d)
      })
    })
  )
