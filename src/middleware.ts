import { getSession } from '@/src/app/api/session/route'
import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { locales } from '../i18n/request'
import { localePrefix } from './navigation'

type CustomMiddleware = (req: NextRequest) => Promise<NextRequest>
const customMiddleware: CustomMiddleware = async req => {
  const session = await getSession()
  const { isLoggedIn, user, locale: sessionLocale } = session
  const isAuthenticated = isLoggedIn && user

  console.log('session: ', session)

  if (!isAuthenticated && !req.nextUrl.pathname.includes('/auth')) {
    req.nextUrl.pathname = `/auth`
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
