import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // check for cookie
  const payloadToke = request.cookies.get('payload-token')
  if (!payloadToke) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  // prevent / if needed
  //   if (request.nextUrl.pathname === '/') {
  //     return NextResponse.redirect(new URL('/home', request.url))
  //   }

  // check things based on cookie, like admin/user
  // ...

  // let payload handle /api routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // let server components handle token verification
  return NextResponse.next()
}

// this code dictates which routes the middleware will run on
export const config = {
  matcher: ['/', '/create-todo', '/todos/:path*', '/api/:path*'],
}
