/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/model/clientsObject.ts
*/

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface clientsObject {
  id: number
  latitude: number
  longitude: number
  name: string
  logo: string
  description: string
  address: string
  city: string
  state: string
  country: string
  website: string
}

export const initClientsObject = (): clientsObject => ({
  id: -1,
  latitude: 0,
  longitude: 0,
  name: '',
  logo: '',
  description: '',
  address: '',
  city: '',
  state: '',
  country: '',
  website: '',
})
