/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/selectors/powerChartSelectors.ts
*/

import { selector } from 'recoil'
import { Types } from '../../components/SimpleForceGraph/types'

export const getPowerChartData = selector({
  key: 'getPowerChartData',
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
        return
      }
      response.json().then((data) => {
        const d = data.results[0] as Types.dataObject
        resolve(d)
      })
    })
  )
