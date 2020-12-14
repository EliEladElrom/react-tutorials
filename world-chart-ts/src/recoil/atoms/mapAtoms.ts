/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/atoms/clientsAtoms.ts
*/

import { atom } from 'recoil'
import { initMapObject } from '../../model'

export const mapState = atom({
  key: 'mapState',
  default: initMapObject(),
})
