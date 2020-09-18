// src/recoil/atoms/booksAtoms.ts

import { atom } from 'recoil'

export const currentBookIDState = atom({
  key: 'currentBookID',
  default: '',
})
