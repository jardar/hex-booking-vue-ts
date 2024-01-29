import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Address } from '@/types/user'

type RegisterData = {
  name: string
  email: string
  phone: string
  birthday: string
  password: string
  address: {
    zipcode?: number
    detail: string
    county: string
    city: string
  }
}

export const useRegisterStore = defineStore('registerStore', () => {
  const registerData = ref<RegisterData>({
    name: '',
    email: '',
    phone: '',
    birthday: '',
    password: '',
    address: {
      zipcode: 0,
      detail: '',
      county: '',
      city: ''
    }
  })

  const registerPhaseOne = (email: string, password: string) => {
    registerData.value.email = email
    registerData.value.password = password
  }
  const registerPhaseTwo = (name: string, phone: string, birthday: string, address: Address) => {
    registerData.value.name = name
    registerData.value.phone = phone
    registerData.value.birthday = birthday
    registerData.value.address = address
  }
  const clear = () => {
    registerData.value = {
      name: '',
      email: '',
      phone: '',
      birthday: '',
      password: '',
      address: {
        zipcode: 0,
        detail: '',
        county: '',
        city: ''
      }
    }
  }

  return {
    registerData,
    registerPhaseOne,
    registerPhaseTwo,
    clear
  }
})
