import { Suspense } from "react"
import { notFound } from "next/navigation"
import { getProductById } from "@/lib/api"
import type { Metadata } from "next"
import AddToCartButton from "@/components/content/add-to-cart-button"
import ProductGallery from "@/components/content/product-gallery"
import ReviewSection from "@/components/content/review-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.title}`,
    description: product.description,
    openGraph: {
      images: [{ url: product.images[0], width: 800, height: 600 }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 2xl:px-32 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Suspense fallback={<div className="aspect-square bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ProductGallery images={product.images} title={product.title} />
        </Suspense>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-500">{product.category}</p>
          </div>

          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

          <p className="text-gray-700">{product.description}</p>

          <div className="pt-4">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="p-4">
            <div className="prose max-w-none">
              <p>{product.description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
                nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specs" className="p-4">
            <div className="grid grid-cols-2 gap-4">
              {product.specifications?.map((spec, index) => (
                <div key={index} className="border-b pb-2">
                  <span className="font-semibold">{spec.name}:</span> {spec.value}
                </div>
              )) || <p>No specifications available for this product.</p>}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-4">
            <Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse rounded-md"></div>}>
              <ReviewSection productId={params.id} />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
