
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Cycle through product images on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === product.images.length - 1 ? 0 : prev + 1
        );
      }, 1500);
      
      // Store the interval ID on the component instance
      (window as any).productCardInterval = interval;
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
    clearInterval((window as any).productCardInterval);
  };
  
  return (
    <motion.div 
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5 }}
    >
      {/* Product badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.new && (
          <Badge className="bg-primary text-white">New</Badge>
        )}
        {!product.inStock && (
          <Badge variant="secondary">Out of Stock</Badge>
        )}
      </div>
      
      {/* Wishlist button */}
      <Button 
        size="icon" 
        variant="ghost" 
        className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
      >
        <Heart className="h-5 w-5" />
      </Button>
      
      {/* Product image */}
      <Link to={`/products/${product.id}`} className="aspect-square overflow-hidden">
        <div className="relative h-full w-full">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} - Image ${index + 1}`}
              className={cn(
                "h-full w-full object-cover transition-all duration-700",
                currentImageIndex === index ? "opacity-100" : "opacity-0 absolute inset-0"
              )}
            />
          ))}
        </div>
      </Link>
      
      {/* Product info */}
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex flex-col flex-grow">
          <span className="text-sm text-muted-foreground mb-1">{product.category}</span>
          <Link to={`/products/${product.id}`} className="hover:underline">
            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-grow">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-muted/30">
          <span className="font-medium">
            {product.currency === 'USD' ? '$' : ''}
            {product.price.toFixed(2)}
          </span>
          <Button 
            size="sm" 
            className={cn(
              "transition-all duration-300",
              isHovered ? "w-full" : "w-10"
            )}
          >
            <ShoppingCart className="h-4 w-4 flex-shrink-0" />
            <span className={cn(
              "ml-2 whitespace-nowrap transition-all duration-300",
              isHovered ? "opacity-100 max-w-40" : "opacity-0 max-w-0"
            )}>
              Add to Cart
            </span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
