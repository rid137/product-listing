"use client"

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { items } = useCart()
  const [cartItemCount, setCartItemCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  console.log("items", items)

  useEffect(() => {
    setCartItemCount(items && items?.reduce((total, item) => total + item.quantity, 0))
  }, [items])

  useEffect(() => {
    // Close mobile menu when navigating
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="border-b sticky top-0 bg-background z-10">
      <div className="container mx-auto px-4 2xl:px-32 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>

          {/* <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/?category=Electronics" className="hover:text-primary transition-colors">
              Electronics
            </Link>
            <Link href="/?category=Clothing" className="hover:text-primary transition-colors">
              Clothing
            </Link>
            <Link href="/?category=Home" className="hover:text-primary transition-colors">
              Home & Garden
            </Link>
          </nav> */}

          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="py-2 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/?category=Electronics" className="py-2 hover:text-primary transition-colors">
              Electronics
            </Link>
            <Link href="/?category=Clothing" className="py-2 hover:text-primary transition-colors">
              Clothing
            </Link>
            <Link href="/?category=Home" className="py-2 hover:text-primary transition-colors">
              Home & Garden
            </Link>
          </nav>
        </div>
      )} */}
    </header>
  )
}
