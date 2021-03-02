/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/selectors/clientsSelectors.ts
*/

import { selector } from 'recoil'
import * as d3 from 'd3'

import { clientsObject } from '../../model'

export const getPreviousClientListData = selector({
  key: 'getPreviousClientListData',
  get: async () => {
    return getData()
  },
})

const getData = async () =>
  new Promise((resolve) =>
    d3
      .dsv(',', '/data/client-list.csv', function results(d) {
        return d
      })
      .then(function results(data) {
        resolve((data as unknown) as clientsObject[])
      })
  )
