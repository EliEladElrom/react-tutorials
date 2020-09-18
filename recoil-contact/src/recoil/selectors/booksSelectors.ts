import { selector } from 'recoil'

import { getBooks, getBookById } from '../../api/books/api'
import { currentBookIDState } from '../atoms/booksAtoms'

export const myBooksQuery = selector({
  key: 'books',
  get: async () => {
    const response = await getBooks()
    return response
  },
})
export const currentBookQuery = selector({
  key: 'currentSong',
  get: async ({ get }) => {
    const response = await getBookById(get(currentBookIDState))
    return response
  },
})
