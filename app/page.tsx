import { Suspense } from "react"
import SearchFilters from "@/components/content/search-filters"
import { Pagination } from "@/components/content/pagination"
import { getProducts } from "@/lib/api"
import type { Metadata } from "next"
import ProductCardContainer from "@/components/content/product-card-container"

export const metadata: Metadata = {
  title: "Product Listing",
  description: "Browse our collection of high-quality products",
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined
  const minPrice = typeof searchParams.minPrice === "string" ? Number.parseFloat(searchParams.minPrice) : undefined
  const maxPrice = typeof searchParams.maxPrice === "string" ? Number.parseFloat(searchParams.maxPrice) : undefined
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined

  const { products, totalPages } = await getProducts({
    page,
    category,
    minPrice,
    maxPrice,
    search,
  })

  return (
    <main className="container mx-auto px-4 2xl:px-32 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="flex flex-col 2xl:flex-row 2xl:items-start  gap-10">
        <Suspense fallback={<div className="h-12 w-full bg-gray-100 animate-pulse rounded-md"></div>}>
          <SearchFilters
            initialSearch={search}
            initialCategory={category}
            initialMinPrice={minPrice}
            initialMaxPrice={maxPrice}
          />
        </Suspense>

        <div className="">
          <Suspense fallback={<ProductCardContainerSkeleton />}>
            <ProductCardContainer products={products} />
          </Suspense>

          <div className="mt-8">
            <Pagination currentPage={page} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </main>
  )
}

function ProductCardContainerSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-gray-100 rounded-lg overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-8 bg-gray-200 rounded w-full mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
