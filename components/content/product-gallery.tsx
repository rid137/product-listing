"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  title: string
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-lg overflow-hidden border">
        <Image
          src={images[selectedImage] || "/placeholder.png"}
          alt={title}
          fill
          // width={1000}
          // height={1000}
          className="object-cover"
          // sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative w-20 h-20 flex-shrink-0 border rounded-md overflow-hidden ${
              selectedImage === index ? "ring-2 ring-primary" : ""
            }`}
          >
            <Image
              src={image || "/placeholder.png"}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
