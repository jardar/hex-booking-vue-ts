export type Room = {
  _id: string
  name: string
  description: string
  imageUrl: string
  imageUrlList: string[]
  areaInfo: string
  bedInfo: string
  maxPeople: number
  price: number
  status: number
  facilityInfo: RoomItem[]
  amenityInfo: RoomItem[]
  createdAt?: string
  updatedAt?: string
}

export type RoomItem = {
  title: string
  isProvide: boolean
}
