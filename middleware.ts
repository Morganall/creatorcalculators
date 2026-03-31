import { NextRequest, NextResponse } from "next/server"

const CANONICAL_ORIGIN = "https://creatorcalculators.com"
const CANONICAL_HOST = "creatorcalculators.com"

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const host = req.headers.get("host") || ""
  const proto = req.headers.get("x-forwarded-proto") || url.protocol.replace(":", "")

  const needsRedirect = host !== CANONICAL_HOST || proto !== "https"

  if (needsRedirect) {
    const redirectUrl = new URL(`${url.pathname}${url.search}`, CANONICAL_ORIGIN)
    return NextResponse.redirect(redirectUrl, 308)
  }

  const requestHeaders = new Headers(req.headers)
  requestHeaders.set("x-canonical-path", url.pathname || "/")

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}

