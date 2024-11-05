import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { locales } from '../i18n/request'
import { localePrefix } from './navigation'

type CustomMiddleware = (req: NextRequest) => Promise<NextRequest>
const customMiddleware: CustomMiddleware = async req => {
  console.log('Custom middleware executed before next-intl')

  // put default locale to the beginning of the path if it's not there
  const path = req.nextUrl.pathname
  const pathArr = path.split('/')

  console.log({ pathArr })

  if (!locales.includes(pathArr[1])) {
    pathArr.splice(1, 0, 'ru')
    req.nextUrl.pathname = pathArr.join('/')
  }

  return req
}

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'ru',
  localePrefix
})

export default async function middleware(
  req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> {
  await customMiddleware(req)

  return intlMiddleware(req)
}

export const config = {
  matcher: ['/', '/(en|ru|uz)/:path*']
}
