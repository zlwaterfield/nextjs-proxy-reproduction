import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    console.log('middleware', request.url)
    return NextResponse.next()
}
 