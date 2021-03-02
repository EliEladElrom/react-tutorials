/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/selectors/lineDataSelectors.ts
*/

import { selector } from 'recoil'
import * as d3 from 'd3'

export const getLineData = selector({
  key: 'getLineData',
  get: () => {
    return getData()
  },
})
const getData = () =>
  new Promise((resolve) =>
    d3
      .dsv(',', '/Data/line.csv', (d) => {
        const res = d as { date: string; data: string }
        const value = parseFloat(res.data as string)
        const { date } = res
        return {
          date,
          value,
        }
      })
      .then((data) => {
        resolve(data)
      })
  )
