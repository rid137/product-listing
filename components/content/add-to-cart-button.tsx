"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/types"
import { ShoppingCart, Check } from "lucide-react"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity,
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-32">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
            className="w-full p-2 border rounded-md"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <Button onClick={handleAddToCart} className="flex-1" disabled={added}>
          {added ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
