import { NextRequest, NextResponse } from "next/server"

const CANONICAL_ORIGIN = "https://creatorcalculators.com"
const CANONICAL_HOST = "creatorcalculators.com"

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const requestOrigin = url.origin
  const requestHost = url.hostname
  const forwardedProto = req.headers.get("x-forwarded-proto")
  const requestProto = (forwardedProto || url.protocol.replace(":", "")).toLowerCase()

  // Never redirect when we're already on the canonical origin.
  if (requestOrigin !== CANONICAL_ORIGIN) {
    const needsRedirect =
      requestHost !== CANONICAL_HOST ||
      requestProto !== "https" ||
      requestHost.startsWith("www.")

    if (needsRedirect) {
      const redirectUrl = new URL(`${url.pathname}${url.search}`, CANONICAL_ORIGIN)
      // Avoid repeated redirects if the target is already exactly this URL.
      if (redirectUrl.href !== url.href) {
        return NextResponse.redirect(redirectUrl, 308)
      }
    }
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

