"use client"

import { IKImage } from "imagekitio-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [url, setUrl] = useState(null)

  useEffect(function() {
    fetch("/api/ik/url?src=" + "/default-image.jpg")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUrl(data.url)
      })
  }, [])

  return (
    <>
      <IKImage src={url} />
    </>
  )
}
