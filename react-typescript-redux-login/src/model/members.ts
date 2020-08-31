// src/model/members.ts

export interface members {
  username: string
  password: string
}

export const initMember = (): members => ({
  username: '',
  password: '',
})
