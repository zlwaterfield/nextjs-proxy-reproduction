import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const { pathname } = request.nextUrl;
        console.log(pathname)
        const apiUrl = `https://api.sampleapis.com/${pathname.replace("/api/proxy/", "")}`;
        console.log(apiUrl)

        const apiResponse = await fetch(apiUrl, {
            method: request.method,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        const data = await apiResponse.json();
        const response = NextResponse.json(data)
        response.headers.set('Access-Control-Allow-Origin', '*'); // Adjust this to your specific needs
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return response;
    } catch (error) {
        return new Response("Error", { status: 500 });
    }
  }
