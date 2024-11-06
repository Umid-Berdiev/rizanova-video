import { getSession } from '@/src/app/api/session/route'
import { withAxios } from '@/src/utils/api/request'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const session = await getSession()
  let body = await request.json()
  const locale = session.locale

  try {
    if (session.isLoggedIn) {
      const params = {
        headers: {
          Authorization: `Bearer ${body.token}`,
          'Content-Type': 'application/json'
        }
      }

      let r = await withAxios(locale)('api/user/me', params)

      if (r.data.success) {
        session.user = r.data.data
        await session.save()

        return Response.json(session.user)
      }
    }

    return Response.json({ success: false })
  } catch (error) {
    throw error
  }
}
