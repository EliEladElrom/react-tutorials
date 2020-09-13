export interface users {
  email: string
  password: string
}

export const initUser = (): users => ({
  email: '',
  password: '',
})
