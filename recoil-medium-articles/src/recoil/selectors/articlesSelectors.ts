// src/recoil/selectors/articlesSelectors.ts

import { selector } from 'recoil'
import axios from 'axios'

export const getArticlesFromMediumByUser = selector({
  key: 'getArticlesFromMediumByUser',
  get: async ({ get }) => {
    try {
      let URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@elad.ny`
      const res = await axios({
        url: URL,
        method: 'get',
      })
      console.log(
        'articlesSelectors.ts :: getUserBlogPosts :: results: ' + JSON.stringify(res.data.items)
      )
      return res.data.items
    } catch (err) {
      console.log('articlesSelectors.ts :: getUserBlogPosts :: ERRORS')
      console.warn(err)
      return `Error: ` + err
    }
  },
})
