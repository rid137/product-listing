import { getProductReviews } from "@/lib/api"
import { Star } from "lucide-react"

interface ReviewSectionProps {
  productId: string
}

export default async function ReviewSection({ productId }: ReviewSectionProps) {
  const reviews = await getProductReviews(productId)

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p>No reviews yet for this product.</p>
      </div>
    )
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="text-3xl font-bold">{averageRating.toFixed(1)}</div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 ${
                star <= Math.round(averageRating) ? "fill-primary" : "fill-muted stroke-muted-foreground"
              }`}
            />
          ))}
        </div>
        <div className="text-gray-500">
          {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium">{review.userName}</div>
                <div className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating ? "fill-primary" : "fill-muted stroke-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
