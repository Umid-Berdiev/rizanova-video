export interface User {
  token: string
  username: string
  email: null | string
  image: null | string
  full_name: string
  id: string
  balance: string
  created_at: string
  theme: string
  lang: 'ru' | 'en' | 'uz'
  tariffs: any[]
  status: number
  cards: any[]
  profiles: UserProfile[]
}

export interface UserProfile {
  id: number
  user_id: number
  full_name: string
  country_id: null | number
  lang: null | string
  theme: null | string
  image: null | string
  image_convert: null | string
  type: 1 | 2
  is_main: 1 | 0
}
