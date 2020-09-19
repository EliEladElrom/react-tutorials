// src/recoil/selectors/booksSelectors.ts

import { selector} from 'recoil'
import { contactState } from '../atoms/contactAtoms'
import axios from 'axios'

export const sendEmail = selector({
  key: 'searchSelector',
  get: async ({ get }) => {
    const payload = get(contactState)
    try {
      let urlWithString =
        `http://localhost:8081/contact_us?email=` +
        payload.email +
        `&customerName=` +
        payload.name +
        `&message=` +
        payload.message
      const res = await axios({
        url: urlWithString,
        method: 'get',
      })
      const status = `${res.data.status}`
      console.log('API :: sendEmail :: results: ' + JSON.stringify(status))
      return res?.data?.status
    } catch (err) {
      console.warn(err)
      return `Error: ` + err
    }
  },
})
