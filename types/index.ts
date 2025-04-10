export interface Product {
  id: string
  title: string
  description: string
  price: number
  category: string
  images: string[]
  specifications?: { name: string; value: string }[]
}

export interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

export interface Review {
  id: string
  productId: string
  userName: string
  rating: number
  date: string
  comment: string
}

export interface ProductsResponse {
  products: Product[]
  totalPages: number
  totalProducts: number
}
