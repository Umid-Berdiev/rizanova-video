import endpoints from '@/src/utils/api/endpoints'
import { withAxios } from '@/src/utils/api/request'
import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '../session/route'

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    const locale = session.locale
    const data = await request.json()

    let _res = await withAxios(locale)({
      url: endpoints.auth.verify,
      method: 'POST',
      data: {
        code: data.code,
        id: session.sms_id
      }
    })

    console.log({ _res })

    if (_res.data?.status === 'success' && _res.data.user?.token) {
      if (_res.data.user?.profiles?.length > 0) {
        session.isLoggedIn = true
        session.user = _res.data.user
        await session.save()
      }
    }

    return NextResponse.json(_res.data)
  } catch (error: any) {
    const _error = error.response?.data?.message || error.message
    console.log('error in catch of verify api: ', error)
    console.log('error message in catch of verify api: ', _error)

    return NextResponse.json(null, {
      status: error.response?.status || 500,
      statusText: _error
    })
  }
}
