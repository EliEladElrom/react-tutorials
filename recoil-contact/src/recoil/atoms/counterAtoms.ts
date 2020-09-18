// src/recoil/atoms/counterAtoms.ts

import { atom } from 'recoil'

export const countState = atom({
  key: 'CountState',
  default: 1,
})
