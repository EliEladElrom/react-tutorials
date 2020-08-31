// src/api/login/login.ts

import { members } from '../../model'

export const isValidLogin = (loginInfo: members): boolean =>
  loginInfo.username === 'admin' && loginInfo.password === 'admin'
