export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  salePrice: number;
  images: string[];
  sizes: string[];
  colors: string[];
  stock: number;
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  tags: string[];
  status: "active" | "inactive";
  rating: number;
  reviews: number;
};

export const categories = [
  { name: "Kurti", slug: "kurti", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80", icon: "👗" },
  { name: "Suits", slug: "suits", image: "https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=400&q=80", icon: "👘" },
  { name: "Cord Sets", slug: "cord-sets", image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4545?w=400&q=80", icon: "✨" },
  { name: "Palazzo", slug: "palazzo", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&q=80", icon: "🌸" },
  { name: "Dupatta", slug: "dupatta", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80", icon: "🧣" },
  { name: "T-Shirt", slug: "t-shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", icon: "👕" },
  { name: "Lower", slug: "lower", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80", icon: "👖" },
  { name: "Shorts", slug: "shorts", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80", icon: "🩳" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Floral Embroidered Suit Set",
    slug: "floral-embroidered-suit-set",
    description: "Beautiful floral embroidered suit set with intricate handwork. Perfect for festive occasions and casual wear. Made with premium cotton fabric for all-day comfort.",
    category: "suits",
    price: 2299,
    salePrice: 1699,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
      "https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=600&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blush Pink", "Ivory White", "Sage Green"],
    stock: 25,
    featured: true,
    bestSeller: true,
    newArrival: true,
    tags: ["floral", "embroidered", "festive"],
    status: "active",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Chikankari Straight Kurti",
    slug: "chikankari-straight-kurti",
    description: "Elegant chikankari work kurti with straight cut silhouette. Lightweight and breathable fabric ideal for summer days.",
    category: "kurti",
    price: 1299,
    salePrice: 899,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4545?w=600&q=80",
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Peach"],
    stock: 40,
    featured: true,
    bestSeller: true,
    newArrival: false,
    tags: ["chikankari", "kurti", "casual"],
    status: "active",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Printed Cord Set",
    slug: "printed-cord-set",
    description: "Trendy printed cord set with matching top and bottom. A perfect blend of style and comfort for modern women.",
    category: "cord-sets",
    price: 1899,
    salePrice: 1499,
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dusty Rose", "Mocha", "Cream"],
    stock: 18,
    featured: true,
    bestSeller: true,
    newArrival: true,
    tags: ["coord-set", "printed", "trendy"],
    status: "active",
    rating: 4.7,
    reviews: 67,
  },
  {
    id: "4",
    name: "Floral Organza Dupatta",
    slug: "floral-organza-dupatta",
    description: "Sheer organza dupatta with delicate floral prints and embroidered borders. Adds grace and elegance to any outfit.",
    category: "dupatta",
    price: 999,
    salePrice: 699,
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    ],
    sizes: ["Free Size"],
    colors: ["Pink", "Blue", "Yellow", "Green"],
    stock: 50,
    featured: false,
    bestSeller: true,
    newArrival: false,
    tags: ["dupatta", "organza", "floral"],
    status: "active",
    rating: 4.5,
    reviews: 43,
  },
  {
    id: "5",
    name: "Embroidered Anarkali Suit",
    slug: "embroidered-anarkali-suit",
    description: "Stunning embroidered anarkali suit with heavy dupatta. Perfect for weddings, parties, and festive celebrations.",
    category: "suits",
    price: 2899,
    salePrice: 1999,
    images: [
      "https://images.unsplash.com/photo-1583391733981-8498408ee4b6?w=600&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Royal Blue", "Maroon", "Forest Green"],
    stock: 12,
    featured: true,
    bestSeller: true,
    newArrival: true,
    tags: ["anarkali", "embroidered", "wedding"],
    status: "active",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "6",
    name: "Casual Cotton Kurti",
    slug: "casual-cotton-kurti",
    description: "Comfortable everyday cotton kurti with minimal prints. Easy to style for office, college, or casual outings.",
    category: "kurti",
    price: 799,
    salePrice: 599,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4545?w=600&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Lavender", "Coral"],
    stock: 60,
    featured: false,
    bestSeller: false,
    newArrival: true,
    tags: ["cotton", "casual", "everyday"],
    status: "active",
    rating: 4.3,
    reviews: 32,
  },
  {
    id: "7",
    name: "Silk Palazzo Set",
    slug: "silk-palazzo-set",
    description: "Luxurious silk palazzo set with wide-leg trousers and matching top. Effortlessly chic for any occasion.",
    category: "palazzo",
    price: 1699,
    salePrice: 1299,
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Champagne", "Rose Gold", "Midnight Blue"],
    stock: 20,
    featured: true,
    bestSeller: false,
    newArrival: true,
    tags: ["palazzo", "silk", "elegant"],
    status: "active",
    rating: 4.6,
    reviews: 28,
  },
  {
    id: "8",
    name: "Graphic Print T-Shirt",
    slug: "graphic-print-t-shirt",
    description: "Trendy graphic print tee with premium cotton blend. Soft, breathable and perfect for daily wear.",
    category: "t-shirt",
    price: 599,
    salePrice: 449,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Light Grey"],
    stock: 80,
    featured: false,
    bestSeller: false,
    newArrival: true,
    tags: ["t-shirt", "graphic", "casual"],
    status: "active",
    rating: 4.2,
    reviews: 15,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Neha Sharma",
    review: "Amazing quality and perfect fitting. Loved the fabric and design.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=100&q=80",
    location: "Delhi",
  },
  {
    id: 2,
    name: "Pooja Verma",
    review: "Superb collection! Exactly as shown in pictures. Will shop again.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Anjali Mehta",
    review: "Very comfy and stylish. Highly recommended!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    location: "Jaipur",
  },
  {
    id: 4,
    name: "Priya Gupta",
    review: "Fast delivery and beautiful packaging. The kurti quality is top-notch!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    location: "Bangalore",
  },
  {
    id: 5,
    name: "Ritu Singh",
    review: "Best ethnic wear collection at such affordable prices. Love it!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
    location: "Lucknow",
  },
];

export const collections = [
  {
    title: "Ethnic Suits",
    subtitle: "Timeless Elegance",
    slug: "suits",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
  },
  {
    title: "Cord Sets",
    subtitle: "Comfort Meets Style",
    slug: "cord-sets",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4545?w=800&q=80",
  },
  {
    title: "Dupatta Collection",
    subtitle: "Add Grace To Every Look",
    slug: "dupatta",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
  },
];
