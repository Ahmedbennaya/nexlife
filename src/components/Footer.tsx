
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-medium">Bargaoui Rideaux</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Elevating homes with premium curtains, drapes, blinds, and home decor since 1995. Tunisian craftsmanship with global design influences.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=curtains" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  Curtains
                </Link>
              </li>
              <li>
                <Link to="/products?category=drapes" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  Drapes
                </Link>
              </li>
              <li>
                <Link to="/products?category=blinds" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  Blinds
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover-underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to receive updates, exclusive offers, and more.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button>Subscribe</Button>
            </div>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  123 Avenue Habib Bourguiba, Tunis 1000, Tunisia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">+216 71 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">info@bargaoui-rideaux.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Bargaoui Rideaux Tahar. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <img src="https://via.placeholder.com/40x25/FFFFFF/808080?text=VISA" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/40x25/FFFFFF/808080?text=MC" alt="Mastercard" className="h-6" />
            <img src="https://via.placeholder.com/40x25/FFFFFF/808080?text=AMEX" alt="American Express" className="h-6" />
            <img src="https://via.placeholder.com/40x25/FFFFFF/808080?text=PAYPAL" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
