export interface contactObject {
  name: string
  email: string
  message: string
}

export const initContact = (): contactObject => ({
  name: '',
  email: '',
  message: '',
})
