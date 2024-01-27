/**
 * use for useStorage (store user's info into localStorage)
 * @description User type
 */
export type UserStorageInfo = {
  username: string
  email: string
  token: string
}

export interface CheckRes {
  status: boolean
  token?: string
  message?: string
}
export interface SignUpReq {
  name: string
  email: string
  password: string
  phone: string
  birthday: string
  address: Address
}
export interface SignUpRes {
  status: boolean
  token: string
  result: User
  message?: string
}

export interface LoginReq {
  email: string
  password: string
}
export interface LoginRes {
  status: boolean
  token: string
  result: User
  message?: string
}

interface Address {
  zipcode?: number
  detail: string
  county: string
  city: string
}

interface User {
  id: number
  name: string
  email: string
  phone: string
  birthday: string
  address: Address
  created_at: string
  updated_at: string
}
