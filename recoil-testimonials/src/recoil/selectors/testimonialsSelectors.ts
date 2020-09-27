// src/recoil/selectors/testimonialsSelectors.ts

import { selector } from 'recoil'
import { getTestimonals } from '../../api/testimonals/api'

export const getTestimonialsPosts = selector({
  key: 'GetTestimonialsPosts',
  get: async () => {
    const response = await getTestimonals()
    return response
  },
})
