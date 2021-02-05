/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/atoms/historicalPriceAtoms.ts
*/

import { atom } from 'recoil'
import { initHistoricalPrice } from '../../model'

export const historicalPriceState = atom({
  key: 'historicalPriceState',
  default: initHistoricalPrice(),
})
