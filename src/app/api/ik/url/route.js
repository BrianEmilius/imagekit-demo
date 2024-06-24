import imagekit from "@/lib/imagekit"
import { NextResponse } from "next/server"

export async function GET(request) {
	const params = request.nextUrl.searchParams

	const url = imagekit.url({
		path: params.get("src"),
		signed: true,
		expire: 300,
		transformation: [{
			n: "watermark"
		}]
	})

	return NextResponse.json({url})
}