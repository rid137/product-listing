import type { Product, Review } from "@/types"

// Mock categories
export const categories = ["Electronics", "Clothing", "Home", "Beauty", "Sports", "Books"]

// Mock products data
export const products: Product[] = [
  {
    id: "1",
    title: "Men's Casual T-Shirt",
    description: "Comfortable cotton t-shirt for everyday wear. Available in multiple colors and sizes.",
    price: 24.99,
    category: "Clothing",
    images: [
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    ],
    specifications: [
      { name: "Material", value: "100% Cotton" },
      { name: "Fit", value: "Regular" },
      { name: "Care", value: "Machine Wash" },
    ],
  },
  {
    id: "2",
    title: "Women's Running Shoes",
    description: "Lightweight and comfortable running shoes with excellent support and cushioning.",
    price: 89.99,
    category: "Sports",
    images: [
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    ],
    specifications: [
      { name: "Material", value: "Synthetic Mesh" },
      { name: "Sole", value: "Rubber" },
      { name: "Cushioning", value: "Responsive Foam" },
      { name: "Weight", value: "235g" },
    ],
  },
  {
    id: "3",
    title: "Smart Watch Series 5",
    description: "Track your fitness, receive notifications, and more with this advanced smartwatch.",
    price: 249.99,
    category: "Electronics",
    images: [
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    ],
    specifications: [
      { name: "Display", value: "1.7 inch AMOLED" },
      { name: "Battery Life", value: "Up to 18 hours" },
      { name: "Water Resistance", value: "50m" },
      { name: "Sensors", value: "Heart Rate, ECG, Oxygen" },
    ],
  },
  {
    id: "4",
    title: "Wireless Bluetooth Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life. Perfect for music lovers and professionals alike.",
    price: 129.99,
    category: "Electronics",
    images: [
      "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    ],
    specifications: [
      { name: "Battery Life", value: "30 hours" },
      { name: "Connectivity", value: "Bluetooth 5.0" },
      { name: "Noise Cancellation", value: "Active" },
      { name: "Weight", value: "250g" },
    ],
  },
  {
    id: "5",
    title: "Smartphone Pro Max",
    description: "The latest smartphone with cutting-edge features, amazing camera, and all-day battery life.",
    price: 999.99,
    category: "Electronics",
    images: [
      "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    ],
    specifications: [
      { name: "Screen", value: "6.7 inch OLED" },
      { name: "Processor", value: "A15 Bionic" },
      { name: "Storage", value: "256GB" },
      { name: "Camera", value: "48MP Triple Camera" },
    ],
  },
  {
    id: "6",
    title: "Stainless Steel Water Bottle",
    description: "Keep your drinks hot or cold for hours with this insulated water bottle.",
    price: 34.99,
    category: "Home",
    images: [
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    ],
    specifications: [
      { name: "Capacity", value: "750ml" },
      { name: "Material", value: "18/8 Stainless Steel" },
      { name: "Insulation", value: "Double-wall Vacuum" },
      { name: "Weight", value: "340g" },
    ],
  },
  {
    id: "7",
    title: "Wireless Charging Pad",
    description: "Convenient wireless charging for all Qi-enabled devices.",
    price: 29.99,
    category: "Electronics",
    images: [
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    ],
    specifications: [
      { name: "Input", value: "USB-C" },
      { name: "Output", value: "15W Max" },
      { name: "Compatibility", value: "Qi-enabled devices" },
      { name: "Size", value: "100mm diameter" },
    ],
  },
  {
    id: "8",
    title: "Ceramic Coffee Mug Set",
    description: "Set of 4 stylish ceramic coffee mugs, perfect for your morning brew.",
    price: 39.99,
    category: "Home",
    images: [
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
    ],
    specifications: [
      { name: "Material", value: "Ceramic" },
      { name: "Capacity", value: "350ml" },
      { name: "Dishwasher Safe", value: "Yes" },
      { name: "Microwave Safe", value: "Yes" },
    ],
  },
  {
    id: "9",
    title: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots and coin pocket.",
    price: 49.99,
    category: "Clothing",
    images: [
      "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
    ],
    specifications: [
      { name: "Material", value: "Genuine Leather" },
      { name: "Card Slots", value: "8" },
      { name: "Dimensions", value: "11.5 x 9.5 cm" },
    ],
  },  
  {
    id: "10",
    title: "Portable Bluetooth Speaker",
    description: "Compact speaker with powerful sound and waterproof design.",
    price: 79.99,
    category: "Electronics",
    images: [
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_.jpg"
    ],
    specifications: [
      { name: "Battery Life", value: "12 hours" },
      { name: "Waterproof Rating", value: "IPX7" },
      { name: "Connectivity", value: "Bluetooth 5.0" },
      { name: "Weight", value: "540g" },
    ],
  },
  {
    id: "11",
    title: "Yoga Mat",
    description: "Non-slip yoga mat with excellent cushioning for all types of yoga.",
    price: 45.99,
    category: "Sports",
    images: [
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-3.jpg"
    ],
    specifications: [
      { name: "Material", value: "TPE Foam" },
      { name: "Thickness", value: "6mm" },
      { name: "Dimensions", value: "183 x 61 cm" },
      { name: "Weight", value: "1.1kg" },
    ],
  },
  {
    id: "12",
    title: "Scented Candle Set",
    description: "Set of 3 scented candles in elegant glass jars.",
    price: 32.99,
    category: "Home",
    images: [
      "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UL640_QL65_ML3_.jpg"
    ],
    specifications: [
      { name: "Scents", value: "Vanilla, Lavender, Citrus" },
      { name: "Burn Time", value: "40 hours each" },
      { name: "Material", value: "Soy Wax" },
    ],
  },
  {
    id: "13",
    title: "Digital Drawing Tablet",
    description: "Professional drawing tablet with pressure sensitivity and wireless connectivity.",
    price: 199.99,
    category: "Electronics",
    images: [
      "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    ],
    specifications: [
      { name: "Active Area", value: "10 x 6.25 inches" },
      { name: "Pressure Levels", value: "8192" },
      { name: "Connectivity", value: "USB-C, Bluetooth" },
      { name: "Battery Life", value: "15 hours" },
    ],
  },
  {
    id: "14",
    title: "Facial Cleanser",
    description: "Gentle facial cleanser suitable for all skin types.",
    price: 19.99,
    category: "Beauty",
    images: [
      "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
    ],
    specifications: [
      { name: "Volume", value: "200ml" },
      { name: "Skin Type", value: "All Types" },
      { name: "Ingredients", value: "Water, Glycerin, Aloe Vera" },
    ],
  },  
  {
    id: "15",
    title: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbells for home workouts.",
    price: 299.99,
    category: "Sports",
    images: [
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_.jpg",
      "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
    ],
    specifications: [
      { name: "Weight Range", value: "5-52.5 lbs each" },
      { name: "Increments", value: "2.5 lbs" },
      { name: "Material", value: "Steel, Nylon" },
    ],
  },
  {
    id: "16",
    title: "Bestselling Novel",
    description: "The latest bestselling fiction novel that everyone is talking about.",
    price: 14.99,
    category: "Books",
    images: [
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UL640_QL65_ML3_.jpg"
    ],
    specifications: [
      { name: "Format", value: "Hardcover" },
      { name: "Pages", value: "384" },
      { name: "Language", value: "English" },
      { name: "Publisher", value: "Penguin Books" },
    ],
  },  
]

export const reviews: Review[] = [
  {
    id: "101",
    productId: "1",
    userName: "John D.",
    rating: 5,
    date: "2023-05-15",
    comment: "These headphones are amazing! The sound quality is excellent and the noise cancellation works perfectly.",
  },
  {
    id: "102",
    productId: "1",
    userName: "Sarah M.",
    rating: 4,
    date: "2023-04-22",
    comment: "Great headphones overall. Battery life is impressive, but they're a bit tight on my head.",
  },
  {
    id: "103",
    productId: "1",
    userName: "Michael T.",
    rating: 5,
    date: "2023-06-03",
    comment: "Best headphones I've ever owned. Worth every penny!",
  },
  {
    id: "104",
    productId: "2",
    userName: "Emily R.",
    rating: 5,
    date: "2023-05-28",
    comment: "This phone exceeds all my expectations. The camera is incredible and the battery lasts all day.",
  },
  {
    id: "105",
    productId: "2",
    userName: "David K.",
    rating: 3,
    date: "2023-04-15",
    comment: "Good phone but overpriced for what it offers. Camera is excellent though.",
  },
  {
    id: "106",
    productId: "3",
    userName: "Jessica L.",
    rating: 5,
    date: "2023-06-10",
    comment: "Perfect fit and very comfortable material. I bought three more in different colors!",
  },
  {
    id: "107",
    productId: "4",
    userName: "Robert P.",
    rating: 4,
    date: "2023-05-05",
    comment: "Very comfortable for running. Good support and cushioning.",
  },
  {
    id: "108",
    productId: "5",
    userName: "Lisa M.",
    rating: 5,
    date: "2023-06-15",
    comment: "This watch has changed my fitness routine. The tracking features are spot on!",
  },
  {
    id: "109",
    productId: "5",
    userName: "Kevin J.",
    rating: 4,
    date: "2023-05-20",
    comment: "Great smartwatch with lots of features. Battery could be better though.",
  },
]
