/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/model/clientsObject.ts
*/

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface clientsObject {
  id: number
  name: string
  logo: string
  description: string
  address: string
  city: string
  state: string
  country: string
  actual_coordinates: [number, number]
  coordinates: [number, number]
  website: string
}

export const initClientsObject = (): clientsObject => ({
  id: -1,
  name: '',
  logo: '',
  description: '',
  address: '',
  city: '',
  state: '',
  country: '',
  actual_coordinates: [0, 0],
  coordinates: [0, 0],
  website: '',
})
