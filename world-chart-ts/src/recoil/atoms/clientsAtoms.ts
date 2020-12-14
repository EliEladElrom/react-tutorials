/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/atoms/clientsAtoms.ts
*/

import { atom } from 'recoil'
import { initClientsObject } from '../../model'

export const clientsState = atom({
  key: 'clientsState',
  default: initClientsObject(),
})
