import { User } from '@/src/utils/interfaces'
import { SessionOptions } from 'iron-session'

export interface SessionData {
  user: User | null
  isLoggedIn: boolean
  token?: string | null
  locale?: string
  sms_id?: string
  phone?: string
}

export const defaultSession: SessionData = {
  user: {
    username: '',
    email: null,
    image: null,
    full_name: '',
    id: '',
    balance: '0.00',
    theme: 'theme-white',
    lang: 'ru',
    tariffs: [],
    status: 10,
    cards: [],
    profiles: []
  },
  isLoggedIn: false,
  token: '',
  locale: 'ru',
  sms_id: '',
  phone: ''
}

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: process.env.SECRET_COOKIE_NAME as string,
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    secure: false
  }
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
