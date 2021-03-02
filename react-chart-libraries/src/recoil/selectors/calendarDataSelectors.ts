/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/selectors/calendarDataSelectors.ts
*/

import { selector } from 'recoil'

export const getCalendarData = selector({
  key: 'getCalendarData',
  get: () => {
    return getData()
  },
})
const getData = () =>
  new Promise((resolve) =>
    fetch(`${process.env.PUBLIC_URL}/data/calendar.json`).then((response) => {
      if (response.status !== 200) {
        // eslint-disable-next-line no-console
        console.log(`Houston, we have a problem! ${response.status}`)
        return
      }
      response.json().then((data) => {
        resolve(data)
      })
    })
  )
