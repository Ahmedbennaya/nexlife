
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { CategorySection } from '@/components/CategorySection';
import { motion } from 'framer-motion';
import { useInView } from '@/lib/animations';
import { testimonials } from '@/lib/data';

const Index = () => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <CategorySection />
        
        <FeaturedProducts />
        
        {/* Parallax Banner */}
        <section className="relative py-24 bg-fixed bg-cover bg-center h-[500px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1920&auto=format&fit=crop)' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-6"
            >
              Elevate Your Interior Design
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 max-w-3xl mb-8"
            >
              At Bargaoui Rideaux, we believe that every window deserves to be dressed beautifully. 
              Our curated collections blend timeless elegance with contemporary design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex space-x-3 md:space-x-6">
                <div className="text-white text-center">
                  <span className="block text-4xl md:text-5xl font-display font-medium">25+</span>
                  <span className="text-white/80 text-sm md:text-base">Years Experience</span>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div className="text-white text-center">
                  <span className="block text-4xl md:text-5xl font-display font-medium">1000+</span>
                  <span className="text-white/80 text-sm md:text-base">Happy Clients</span>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div className="text-white text-center">
                  <span className="block text-4xl md:text-5xl font-display font-medium">500+</span>
                  <span className="text-white/80 text-sm md:text-base">Designs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section ref={ref} className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-display font-medium mb-4"
              >
                What Our Clients Say
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-muted-foreground text-lg"
              >
                The satisfaction of our clients is our greatest reward.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm relative"
                >
                  <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-6xl text-primary/10 font-serif">
                    "
                  </div>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
