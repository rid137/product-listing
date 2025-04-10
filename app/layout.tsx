import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/content/header";
import Footer from "@/components/content/footer";
import { CartProvider } from "@/context/cart-context";
import { ThemeProvider } from "@/components/content/theme-provider";

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
  generator: 'v0.dev'
};