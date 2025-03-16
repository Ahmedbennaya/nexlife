
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { storeLocations } from '@/lib/data';
import { MapPin } from 'lucide-react';

export function Map() {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeLocation, setActiveLocation] = useState(storeLocations[0].id);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-md"
    >
      <div className="w-full lg:w-1/3 bg-secondary p-6 flex flex-col">
        <h3 className="text-2xl font-display font-medium mb-6">Our Locations</h3>
        
        <div className="space-y-4">
          {storeLocations.map((location) => (
            <StoreCard 
              key={location.id}
              location={location}
              isActive={activeLocation === location.id}
              onClick={() => setActiveLocation(location.id)}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full lg:w-2/3 bg-gray-100 h-80 lg:h-auto">
        {/* Here would be a real map implementation */}
        <div className="h-full w-full relative bg-cover bg-center" style={{ backgroundImage: `url(${storeLocations.find(l => l.id === activeLocation)?.image})` }}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-display text-2xl font-medium mb-2">
                {storeLocations.find(l => l.id === activeLocation)?.name}
              </h3>
              <p className="max-w-md mx-auto">
                In a real implementation, this would be a Google Maps integration showing our store locations.
              </p>
              <Button variant="outline" className="mt-4 bg-white/10 hover:bg-white/20 border-white/20 text-white">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface StoreCardProps {
  location: typeof storeLocations[0];
  isActive: boolean;
  onClick: () => void;
}

function StoreCard({ location, isActive, onClick }: StoreCardProps) {
  return (
    <div 
      className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
        isActive 
          ? 'bg-primary text-primary-foreground shadow-sm' 
          : 'hover:bg-secondary-foreground/5'
      }`}
      onClick={onClick}
    >
      <h4 className="font-medium text-lg">{location.name}</h4>
      <p className={`text-sm mt-1 ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
        {location.address}
      </p>
      <div className={`mt-2 text-sm ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
        <p>{location.phone}</p>
        <p>{location.hours}</p>
      </div>
    </div>
  );
}
