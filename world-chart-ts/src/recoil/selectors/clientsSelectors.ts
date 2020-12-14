/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/model/clientsSelectors.ts
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

export const getData = async () =>
  new Promise((resolve) =>
    d3
      .dsv(',', '/data/client-list.csv', function results(d) {
        return {
          id: d.id,
          name: d.name,
          logo: d.logo,
          description: d.description,
          address: d.address,
          city: d.city,
          state: d.state,
          country: d.country,
          actual_coordinates: d.actual_coordinates?.split(','),
          coordinates: d.coordinates?.split(','),
          website: d.website,
        }
      })
      .then(function results(data) {
        // console.log(retValue);
        resolve((data as unknown) as clientsObject[])
      })
  )
