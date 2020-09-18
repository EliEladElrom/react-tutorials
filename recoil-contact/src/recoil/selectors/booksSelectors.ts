// src/recoil/selectors/booksSelectors.ts

import { selector } from 'recoil'

import { getBooks, getBookById } from '../../api/books/api'
import { currentBookIDState } from '../atoms/booksAtoms'

export const getAllBooks = selector({
  key: 'GetAllBooks',
  get: async () => {
    const response = await getBooks()
    return response
  },
})
export const getBookDetail = selector({
  key: 'GetBookDetail',
  get: async ({ get }) => {
    const response = await getBookById(get(currentBookIDState))
    return response
  },
})
