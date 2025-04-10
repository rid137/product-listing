import type { Product, Review } from "@/types";
import { products, reviews } from "./data";

interface GetProductsParams {
  page?: number
  category?: string
  minPrice?: number
  maxPrice?: number
  search?: string
};

export async function getProducts({ page = 1, category, minPrice, maxPrice, search }: GetProductsParams) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const pageSize = 8

  let filteredProducts = [...products]

  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
  }

  if (minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price >= minPrice)
  }

  if (maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice)
  }

  if (search) {
    const searchLower = search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower),
    )
  }

  const totalProducts = filteredProducts.length
  const totalPages = Math.ceil(totalProducts / pageSize)
  const startIndex = (page - 1) * pageSize
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + pageSize)

  return {
    products: paginatedProducts,
    totalPages,
    totalProducts,
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const product = products.find((p) => p.id === id)
  return product || null
}

export async function getProductReviews(productId: string): Promise<Review[]> {
  await new Promise((resolve) => setTimeout(resolve, 400))

  return reviews.filter((review) => review.productId === productId)
}

export async function searchProducts(query: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))

  if (!query) return []

  const queryLower = query.toLowerCase()
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(queryLower) || product.description.toLowerCase().includes(queryLower),
  )
}
