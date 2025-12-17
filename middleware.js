import { NextResponse } from 'next/server'

export function middleware(request) {
  // 1. Get the token from cookies
  const token = request.cookies.get('session_token')?.value
  const { pathname } = request.nextUrl

  // 2. Define "Public" paths (that don't need a token)
  // We allow /login, /register, and static files (images, css)
  const isPublicPath = 
    pathname === '/login' || 
    pathname === '/register' ||
    pathname.startsWith('/_next') || 
    pathname.startsWith('/static');

  // 3. LOGIC:
  
  // A. If user is logged in but tries to go to Login page -> Go to Home
  if (isPublicPath && token) {
     return NextResponse.redirect(new URL('/', request.url));
  }

  // B. If user is NOT logged in and tries to go anywhere else -> Go to Login
  if (!isPublicPath && !token) {
    // return NextResponse.redirect(new URL('/login', request.url));
  }

  // C. Otherwise, let them pass
  return NextResponse.next();
}

// Apply this to every route in the system
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}