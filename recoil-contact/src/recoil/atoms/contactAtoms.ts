import { atom } from 'recoil'
import { initContact } from '../../model'

export const contactState = atom({
  key: 'ContactState',
  default: initContact(),
})
