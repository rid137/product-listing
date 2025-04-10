"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Search, X } from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"
import { categories } from "@/lib/data"

interface SearchFiltersProps {
  initialSearch?: string
  initialCategory?: string
  initialMinPrice?: number
  initialMaxPrice?: number
}

export default function SearchFilters({
  initialSearch = "",
  initialCategory = "",
  initialMinPrice = 0,
  initialMaxPrice = 1000,
}: SearchFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()

  const [search, setSearch] = useState(initialSearch)
  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState<[number, number]>([initialMinPrice || 0, initialMaxPrice || 1000])

  const debouncedSearch = useDebounce(search, 500)
  const debouncedPriceRange = useDebounce(priceRange, 500)

  useEffect(() => {
    const params = new URLSearchParams()

    if (debouncedSearch) params.set("search", debouncedSearch)
    if (category) params.set("category", category)
    if (debouncedPriceRange[0] > 0) params.set("minPrice", debouncedPriceRange[0].toString())
    if (debouncedPriceRange[1] < 1000) params.set("maxPrice", debouncedPriceRange[1].toString())

    const queryString = params.toString()
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`)
  }, [debouncedSearch, category, debouncedPriceRange, router, pathname])

  const resetFilters = () => {
    setSearch("")
    setCategory("")
    setPriceRange([0, 1000])
    router.push(pathname)
  }

  const hasActiveFilters = search || category || priceRange[0] > 0 || priceRange[1] < 1000

  return (
    <div className="space-y-6 p-6 border rounded-lg">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div>
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(category === cat ? "" : cat)}
              className="justify-start"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <h3 className="font-medium">Price Range</h3>
          <span className="text-sm text-gray-500">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          defaultValue={priceRange}
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="my-6"
        />
      </div>

      {hasActiveFilters && (
        <Button variant="outline" size="sm" onClick={resetFilters} className="w-full">
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  )
}
