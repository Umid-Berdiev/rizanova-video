import { getSession } from '@/src/app/api/session/route'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const session = await getSession()
  let body = await request.json()
  try {
    session.locale = body.locale
    await session.save()
    return Response.json({ success: true })
  } catch (error: any) {
    throw error
  }
}

export async function GET(request: NextRequest) {
  const session = await getSession()

  try {
    return NextResponse.json(session.locale)
  } catch (error: any) {
    console.log('errors -> ', error)
    throw error
  }
}
