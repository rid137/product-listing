import type { Metadata } from "next"
import CartClientPage from "./CartClientPage"

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "View your shopping cart",
}

export default function CartPage() {
  return <CartClientPage />
}