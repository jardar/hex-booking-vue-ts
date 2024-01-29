// entity

export interface User {
  id: number
  name: string
  email: string
  phone: string
  birthday: string
  address: Address
  created_at: string
  updated_at: string
}

export interface Address {
  zipcode?: number
  detail: string
  county: string
  city: string
}
