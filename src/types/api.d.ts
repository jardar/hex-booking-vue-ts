import type { Address, User } from './user'
import type { Room } from './room'

interface APIError extends Error {}

interface Reply<T> {
  ok: boolean
  msg: string
  data: T | null
}
//
type RoomsRes = {
  status: boolean
  result: Room[] | Room
  message?: string
}
// type RoomRes = {
//   status: boolean
//   result: Room
//   message?: string
// }
//
interface EmailRes {
  status: boolean
  // result: {
  //   isEmailExists: boolean
  // }
  message?: string
}

interface CheckRes {
  status: boolean
  token?: string
  message?: string
}
interface SignUpReq {
  name: string
  email: string
  password: string
  phone: string
  birthday: string
  address: Address
}
interface SignUpRes {
  status: boolean
  token: string
  result: User
  message?: string
}

interface LoginReq {
  email: string
  password: string
}
interface LoginRes {
  status: boolean
  token: string
  result: User
  message?: string
}

// User response
interface UserRes {
  status: boolean
  token: string
  result: User
  message?: string
}
