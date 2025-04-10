import ProductCard from "./product-card"
import type { Product } from "@/types"

interface ProductCardContainerProps {
  products: Product[]
}

export default function ProductCardContainer({ products }: ProductCardContainerProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium">No products found</h2>
        <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
