import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectUrl = request.nextUrl.clone() // clona url atual

  redirectUrl.pathname = '/auth/sign-in' // muda o path para apontar para raiz
    ; (await cookies()).delete('token')

  return NextResponse.redirect(redirectUrl) // manda o cliente pra raiz
}
