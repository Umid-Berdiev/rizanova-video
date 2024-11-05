const API_URL = process.env.NEXT_PUBLIC_API_URL
import axios, { AxiosInstance } from 'axios'
import { getData, removeData } from '../storage'

let $request: AxiosInstance

// @ts-ignore
function createAxios(locale: string = 'uz') {
  const $request = axios.create({
    baseURL: API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': locale,
    },
  })

  $request.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${getData('token')}`
      return config
    },
    error => {
      return Promise.reject(error)
    },
  )

  $request.interceptors.response.use(
    response => {
      return response
    },
    error => {
      let message
      switch (error.response?.status) {
        case 500:
          message = 'Внутренняя ошибка сервера!'
          break
        case 401:
          message = error.response?.data
          if (typeof window !== 'undefined') {
            removeData('token')
            window.location.href = `/`
          }
          break
        case 400:
          message = error.response?.data
          break
        default:
          message = error.response?.data?.errors
      }

      throw error
    },
  )
  return $request
}

function withAxios(locale: string = 'uz') {
  if (!$request) {
    $request = createAxios(locale)
  } else {
    $request.defaults.headers['Accept-Language'] = locale
  }
  return $request
}

export { withAxios,createAxios }
