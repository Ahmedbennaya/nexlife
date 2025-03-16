
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subCategory?: string;
  images: string[];
  featured: boolean;
  new: boolean;
  inStock: boolean;
  variants?: ProductVariant[];
  specs?: Record<string, string>;
}

export interface ProductVariant {
  id: string;
  name: string;
  color?: string;
  material?: string;
  size?: string;
  price?: number;
  inStock: boolean;
  image?: string;
}

export const categories = [
  { 
    id: "curtains", 
    name: "Curtains", 
    image: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=800&auto=format&fit=crop", 
    description: "Elegant curtains to transform your windows and living spaces" 
  },
  { 
    id: "blinds", 
    name: "Blinds", 
    image: "https://images.unsplash.com/photo-1513716875652-59c99fd7ffd6?q=80&w=800&auto=format&fit=crop", 
    description: "Modern blinds for light control and privacy" 
  },
  { 
    id: "drapes", 
    name: "Drapes", 
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800&auto=format&fit=crop", 
    description: "Luxurious drapes for a touch of opulence" 
  },
  { 
    id: "accessories", 
    name: "Accessories", 
    image: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=800&auto=format&fit=crop", 
    description: "Finishings and hardware to complete your window treatments" 
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Sheer Curtains",
    description: "Elegant silk sheer curtains that allow soft, diffused light while maintaining privacy. Perfect for living rooms and bedrooms.",
    price: 129.99,
    currency: "USD",
    category: "curtains",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580237754870-0288d2199ed1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=800&auto=format&fit=crop"
    ],
    featured: true,
    new: true,
    inStock: true,
    variants: [
      { id: "1-1", name: "Ivory", color: "#FFF8E1", inStock: true },
      { id: "1-2", name: "Champagne", color: "#E8D0A9", inStock: true },
      { id: "1-3", name: "Dusty Rose", color: "#D4A5A5", inStock: false }
    ],
    specs: {
      "Material": "100% Silk",
      "Style": "Sheer",
      "Width": "54 inches per panel",
      "Length": "84, 96, or 108 inches",
      "Care": "Dry clean only"
    }
  },
  {
    id: "2",
    name: "Luxe Velvet Blackout Drapes",
    description: "Sumptuous velvet drapes with blackout lining for ultimate privacy and light control. The perfect statement piece for your interior.",
    price: 189.99,
    currency: "USD",
    category: "drapes",
    images: [
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617104678502-cde650d94b7a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577817864635-f57ee0c4f8a8?q=80&w=800&auto=format&fit=crop"
    ],
    featured: true,
    new: false,
    inStock: true,
    variants: [
      { id: "2-1", name: "Emerald", color: "#046307", inStock: true },
      { id: "2-2", name: "Navy", color: "#0A1C3F", inStock: true },
      { id: "2-3", name: "Burgundy", color: "#700F1B", inStock: true }
    ],
    specs: {
      "Material": "Cotton Velvet",
      "Lining": "Blackout",
      "Width": "50 inches per panel",
      "Length": "84, 96, or 108 inches",
      "Care": "Dry clean only"
    }
  },
  {
    id: "3",
    name: "Linen Textured Roman Blinds",
    description: "Clean and contemporary roman blinds with a textured linen finish. Ideal for modern interiors seeking a minimalist aesthetic.",
    price: 149.99,
    currency: "USD",
    category: "blinds",
    images: [
      "https://images.unsplash.com/photo-1513716875652-59c99fd7ffd6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585421514284-efb74320d393?q=80&w=800&auto=format&fit=crop"
    ],
    featured: true,
    new: false,
    inStock: true,
    variants: [
      { id: "3-1", name: "Natural", color: "#DDD5C4", inStock: true },
      { id: "3-2", name: "Stone", color: "#B7B3A8", inStock: true },
      { id: "3-3", name: "Charcoal", color: "#3E4042", inStock: true }
    ],
    specs: {
      "Material": "Linen Blend",
      "Style": "Roman",
      "Width": "24-48 inches",
      "Length": "36-72 inches",
      "Operation": "Cordless"
    }
  },
  {
    id: "4",
    name: "Wooden Venetian Blinds",
    description: "Classic wooden venetian blinds that bring warmth and texture to any room. Available in various wood finishes.",
    price: 159.99,
    currency: "USD",
    category: "blinds",
    images: [
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561123760-0b8c29a478d7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=800&auto=format&fit=crop"
    ],
    featured: false,
    new: false,
    inStock: true,
    variants: [
      { id: "4-1", name: "Oak", color: "#B68A5B", inStock: true },
      { id: "4-2", name: "Walnut", color: "#6D4F42", inStock: true },
      { id: "4-3", name: "Ebony", color: "#332421", inStock: true }
    ],
    specs: {
      "Material": "Real Wood",
      "Slat Size": "2 inches",
      "Width": "24-72 inches",
      "Length": "36-72 inches",
      "Operation": "Cord and Wand"
    }
  },
  {
    id: "5",
    name: "Premium Curtain Rods Set",
    description: "Complete your window treatment with our premium curtain rod set. Includes finials, brackets, and mounting hardware.",
    price: 79.99,
    currency: "USD",
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1622127922040-13cab637ee78?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598301257984-0cf5a4164645?q=80&w=800&auto=format&fit=crop"
    ],
    featured: false,
    new: true,
    inStock: true,
    variants: [
      { id: "5-1", name: "Polished Nickel", inStock: true },
      { id: "5-2", name: "Antique Brass", inStock: true },
      { id: "5-3", name: "Matte Black", inStock: true }
    ],
    specs: {
      "Material": "Metal",
      "Rod Diameter": "1.25 inches",
      "Length": "Adjustable 36-72 inches",
      "Package": "Rod, 2 finials, 3 brackets, hardware"
    }
  },
  {
    id: "6",
    name: "Embroidered Linen Panels",
    description: "Exquisite linen panels with delicate embroidery details. A timeless addition to your home décor.",
    price: 199.99,
    currency: "USD",
    category: "curtains",
    images: [
      "https://images.unsplash.com/photo-1529330384019-104e44638801?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619220661777-5baaefb5c257?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606946287794-1f231a0c668d?q=80&w=800&auto=format&fit=crop"
    ],
    featured: true,
    new: false,
    inStock: true,
    variants: [
      { id: "6-1", name: "Ivory/Gold", color: "#FFF8E1", inStock: true },
      { id: "6-2", name: "Grey/Silver", color: "#D3D3D3", inStock: true },
      { id: "6-3", name: "Navy/White", color: "#0A1C3F", inStock: false }
    ],
    specs: {
      "Material": "100% Linen",
      "Style": "Rod Pocket",
      "Width": "52 inches per panel",
      "Length": "84, 96, or 108 inches",
      "Care": "Dry clean recommended"
    }
  }
];

export const storeLocations = [
  {
    id: "store1",
    name: "Bargaoui Rideaux Flagship Store",
    address: "123 Avenue Habib Bourguiba, Tunis 1000, Tunisia",
    phone: "+216 71 123 456",
    email: "flagship@bargaoui-rideaux.com",
    hours: "Monday - Saturday: 9AM - 7PM, Sunday: Closed",
    coordinates: [10.181532, 36.806496],
    image: "https://images.unsplash.com/photo-1604014056158-479187468b55?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "store2",
    name: "Bargaoui Rideaux Sousse",
    address: "45 Avenue du 14 Janvier, Sousse 4000, Tunisia",
    phone: "+216 73 987 654",
    email: "sousse@bargaoui-rideaux.com",
    hours: "Monday - Saturday: 9AM - 6PM, Sunday: Closed",
    coordinates: [10.637729, 35.825603],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah L.",
    role: "Interior Designer",
    quote: "The quality of Bargaoui's curtains is exceptional. My clients are always impressed with the craftsmanship and elegant designs.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Mohammed A.",
    role: "Homeowner",
    quote: "I renovated my entire house and chose Bargaoui blinds for every room. The attention to detail and quality of service was outstanding.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Yasmine T.",
    role: "Hotel Manager",
    quote: "For our boutique hotel renovation, we needed elegant yet durable window treatments. Bargaoui delivered exactly what we needed, on time and within budget.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }
];
