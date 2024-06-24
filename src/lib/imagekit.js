import ImageKit from "imagekit"

const imagekit = new ImageKit({
	urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT,
	publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
	privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

export default imagekit
