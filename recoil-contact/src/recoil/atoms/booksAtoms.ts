import { atom } from 'recoil'

export const currentBookIDState = atom({
  key: 'currentBookID',
  default: '',
})

export const booksState = atom({
  key: 'bookList',
  default: [],
})
