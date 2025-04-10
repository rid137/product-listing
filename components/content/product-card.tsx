"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    })
  }

  return (
    <div className="group border rounded-lg overflow-hidden hover:shadow-md hover:scale-95 transition-transform duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="w-full h-64 relative">
          <Image
            src={product.images[0] || "/placeholder.png"}
            alt={product.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium text-lg truncate">{product.title}</h3>
          <p className="text-gray-500 text-sm">{product.category}</p>
        </Link>

        <div className="flex items-center justify-between mt-4">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
