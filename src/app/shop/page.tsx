"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sort, setSort] = useState("popular");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const allSizes = ["XS", "S", "M", "L", "XL", "XXL", "Free Size"];

  const filtered = useMemo(() => {
    let list = [...products];

    if (filterParam === "new") list = list.filter((p) => p.newArrival);
    if (selectedCategory) list = list.filter((p) => p.category === selectedCategory);
    if (selectedSizes.length > 0) {
      list = list.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)));
    }
    list = list.filter(
      (p) => p.salePrice >= priceRange[0] && p.salePrice <= priceRange[1]
    );

    if (sort === "newest") list = list.filter((p) => p.newArrival);
    if (sort === "price-low") list.sort((a, b) => a.salePrice - b.salePrice);
    if (sort === "price-high") list.sort((a, b) => b.salePrice - a.salePrice);

    return list;
  }, [filterParam, selectedCategory, selectedSizes, priceRange, sort]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-background-secondary border-b border-border py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-3xl text-dark-text">
            {selectedCategory
              ? categories.find((c) => c.slug === selectedCategory)?.name
              : filterParam === "new"
              ? "New Arrivals"
              : "All Products"}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-dark-text/50">Home</span>
            <span className="text-xs text-dark-text/30">/</span>
            <span className="text-xs text-rose-gold">Shop</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 text-sm text-dark-text border border-border px-4 py-2 rounded-sm hover:border-rose-gold transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filters
              {(selectedCategory || selectedSizes.length > 0) && (
                <span className="w-4 h-4 bg-rose-gold text-white text-[10px] rounded-full flex items-center justify-center">
                  {(selectedCategory ? 1 : 0) + selectedSizes.length}
                </span>
              )}
            </button>
            <p className="text-sm text-dark-text/60">
              {filtered.length} products
            </p>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none text-sm border border-border px-4 py-2 pr-8 rounded-sm bg-white text-dark-text focus:outline-none focus:border-rose-gold cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-dark-text/50 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? "block" : "hidden"
            } md:block w-64 shrink-0`}
          >
            <div className="bg-white border border-border rounded-lg p-5 sticky top-24 space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-playfair text-sm font-semibold text-dark-text mb-3 uppercase tracking-wide">
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left text-xs py-1.5 px-2 rounded transition-colors ${
                      !selectedCategory
                        ? "bg-rose-gold/10 text-rose-gold font-semibold"
                        : "text-dark-text/70 hover:text-rose-gold"
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left text-xs py-1.5 px-2 rounded transition-colors ${
                        selectedCategory === cat.slug
                          ? "bg-rose-gold/10 text-rose-gold font-semibold"
                          : "text-dark-text/70 hover:text-rose-gold"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="font-playfair text-sm font-semibold text-dark-text mb-3 uppercase tracking-wide">
                  Size
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`text-[10px] px-2 py-1 border rounded transition-colors ${
                        selectedSizes.includes(size)
                          ? "bg-rose-gold text-white border-rose-gold"
                          : "border-border text-dark-text/70 hover:border-rose-gold"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-playfair text-sm font-semibold text-dark-text mb-3 uppercase tracking-wide">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full accent-rose-500"
                    style={{ accentColor: "#C99A84" }}
                  />
                  <div className="flex justify-between text-xs text-dark-text/60">
                    <span>₹0</span>
                    <span>₹{priceRange[1].toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || selectedSizes.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSizes([]);
                  }}
                  className="flex items-center gap-1 text-xs text-rose-gold hover:text-hover"
                >
                  <X size={12} />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-playfair text-xl text-dark-text mb-2">No products found</p>
                <p className="text-sm text-dark-text/60">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-2 border-rose-gold border-t-transparent rounded-full" />
    </div>}>
      <ShopContent />
    </Suspense>
  );
}
