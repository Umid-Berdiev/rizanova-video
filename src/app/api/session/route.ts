import endpoints from '@/src/utils/api/endpoints'
import { withAxios } from '@/src/utils/api/request'
import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { defaultSession, SessionData, sessionOptions } from './lib'

export async function getSession() {
  return await getIronSession<SessionData>(cookies(), sessionOptions)
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    const locale = session.locale
    const data = await request.json()
    let _res = await withAxios(locale)({
      url: endpoints.auth.loginWithPhone,
      method: 'POST',
      data
    })

    console.log({ _res })

    if (_res.data?.status === 'success') {
      session.sms_id = _res.data.id
      session.phone = data.username
      await session.save()
    }

    return NextResponse.json(_res.data)
  } catch (error: any) {
    const _error = error.response?.data?.message || error.message
    console.log('error in catch of login api: ', error)
    console.log('error message in catch of login api: ', _error)

    return NextResponse.json(null, {
      status: error.response?.status || 500,
      statusText: _error
    })
  }
}

export async function GET(request: NextRequest, res: NextResponse) {
  try {
    const session = await getSession()
    const action = new URL(request.url).searchParams.get('action')

    if (action === 'logout') {
      session.destroy()
      return NextResponse.json({ success: true })
    }

    if (session.isLoggedIn !== true) {
      return NextResponse.json(defaultSession)
    }

    return NextResponse.json(session)
  } catch (error) {
    throw error
  }
}
