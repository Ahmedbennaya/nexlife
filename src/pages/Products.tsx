import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/slices/cartSlice";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Filter, Grid3X3, List, ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/lib/data";

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isHovered && product.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isHovered, product.images.length]);

  return (
    <motion.div 
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setCurrentImageIndex(0); }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.new && <Badge className="bg-primary text-white">New</Badge>}
        {!product.inStock && <Badge variant="secondary">Out of Stock</Badge>}
      </div>
      <Button 
        size="icon" 
        variant="ghost" 
        className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
      >
        <Heart className="h-5 w-5" />
      </Button>
      <Link to={`/products/${product.id}`} className="aspect-square overflow-hidden">
        <div className="relative h-full w-full">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} - Image ${index + 1}`}
              className={cn("h-full w-full object-cover transition-all duration-700", 
                currentImageIndex === index ? "opacity-100" : "opacity-0 absolute inset-0")}
            />
          ))}
        </div>
      </Link>
      <div className="flex flex-col p-4 flex-grow">
        <span className="text-sm text-muted-foreground mb-1">{product.category}</span>
        <Link to={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-medium text-lg mb-1">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-muted/30">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <Button size="sm" onClick={() => onAddToCart(product)}>
            <ShoppingCart className="h-4 w-4" />
            <span className="ml-2">Add to Cart</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setFilteredProducts(
      selectedCategory ? products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase()) : products
    );
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-3xl font-medium mb-4 text-center">Our Products</h1>
        <div className="lg:grid lg:grid-cols-4 gap-8">
          <aside className="lg:block bg-card rounded-lg p-6 shadow-sm sticky top-24">
            <h3 className="font-medium">Categories</h3>
            <button onClick={() => setSelectedCategory(null)} className="text-sm text-primary hover:underline">Reset</button>
            <div className="space-y-3">
              {categories.map(category => (
                <div 
                  key={category.id} 
                  className={cn("cursor-pointer px-3 py-2 rounded-md", 
                    selectedCategory === category.id ? "bg-primary/10 text-primary" : "hover:bg-secondary")}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </aside>
          <div className="lg:col-span-3">
            <div className="flex justify-end mb-6">
              <Button variant="ghost" size="icon" onClick={() => setIsGridView(true)} className={isGridView ? "bg-secondary" : ""}>
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsGridView(false)} className={!isGridView ? "bg-secondary" : ""}>
                <List className="h-4 w-4" />
              </Button>
            </div>
            {filteredProducts.length === 0 ? (
              <p className="text-center py-12">No products found.</p>
            ) : (
              <div className={cn("grid gap-6", isGridView ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1")}>
                {filteredProducts.map(product => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <ProductCard product={product} onAddToCart={() => dispatch(addItemToCart({ ...product, quantity: 1, image: product.images[0] }))} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
