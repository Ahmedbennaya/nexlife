
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { categories } from '@/lib/data';
import { cn } from '@/lib/utils';

export function CategorySection() {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-3 py-1 bg-primary/5 text-primary text-sm rounded-full"
          >
            Explore Our Categories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-medium mb-4"
          >
            Transform Every Window
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Browse our carefully curated collections to find the perfect window treatments for your home.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-display text-white mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm mb-4">{category.description}</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className={cn(
                    "w-full justify-center bg-white/10 backdrop-blur-sm border-white/20 text-white",
                    "hover:bg-white hover:text-primary transition-colors"
                  )}
                >
                  <a href={`/products?category=${category.id}`}>
                    Browse {category.name}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
