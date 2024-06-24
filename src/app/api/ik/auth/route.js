import { NextResponse } from "next/server"
import imagekit from "@/lib/imagekit"

export async function GET(request) {
	const result = imagekit.getAuthenticationParameters()

	return NextResponse.json(result)
}
