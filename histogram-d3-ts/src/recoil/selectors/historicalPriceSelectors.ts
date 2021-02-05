/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/selectors/historicalPriceSelectors.ts
*/

import { selector } from 'recoil'
import * as d3 from 'd3'

import { historicalPriceObject } from '../../model'

export const getHistoricalPriceData = selector({
  key: 'getHistoricalPriceData',
  get: async () => {
    return getData()
  },
})

const getData = () =>
  new Promise((resolve) =>
    d3
      .dsv(',', '/data/historicalPrice.csv', function results(d) {
        return {
          price: d.open,
        }
      })
      .then(function results(data) {
        resolve((data as unknown) as historicalPriceObject[])
      })
  )
