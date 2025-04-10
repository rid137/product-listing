"use client"

import { useCart } from "@/hooks/use-cart"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function CartClientPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <CartSkeleton />
  }

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 2xl:px-32 py-16 text-center">
        <h1 className="text-3xl font-bold mb-8">Cart</h1>
        <div className="max-w-md mx-auto p-8 border rounded-lg">
          <p className="mb-6">Your cart is empty</p>
          <Link href="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 2xl:px-32 py-8">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex border rounded-lg p-4 gap-4">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image src={item.image || "/placeholder.png"} alt={item.title} fill className="object-cover" />
              </div>

              <div className="flex-grow">
                <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                  {item.title}
                </Link>
                <div className="text-gray-500 text-sm">${item.price.toFixed(2)}</div>

                <div className="flex items-center mt-2">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                    className="border rounded p-1 mr-4"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-6 h-fit space-y-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between py-2 font-bold border-t pt-4">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <Button className="w-full mt-4">Proceed to Checkout</Button>

          <button onClick={clearCart} className="text-sm text-gray-500 hover:text-gray-700 mt-4 w-full text-center">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

function CartSkeleton() {
  return (
    <div className="container mx-auto px-4 2xl:px-32 py-8">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>
      <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
    </div>
  )
}
