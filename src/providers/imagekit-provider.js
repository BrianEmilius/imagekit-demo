"use client"
import { IKContext } from "imagekitio-react"

export default function ImagekitProvider({children}) {
	async function authenticator() {
		const response = await fetch("/api/ik/auth")
		const data = await response.json()
		return data
	}

	return (
		<IKContext
			urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT}
			publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}
			authenticator={authenticator}
		>
			{children}
		</IKContext>
	)
}
