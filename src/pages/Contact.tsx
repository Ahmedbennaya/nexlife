import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Map } from "@/components/Map";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add page transition animation
    document.body.classList.add('page-transition');
    
    const timer = setTimeout(() => {
      document.body.classList.remove('page-transition');
    }, 500);
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('page-transition');
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Hero section */}
          <div className="mb-12 text-center animate-fade-up">
            <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
              Get in Touch
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to help with any questions about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <ContactForm />
            </div>

            {/* Contact info and map */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-display font-medium mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start group smooth-transition">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 smooth-transition">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-muted-foreground">+216 71 123 456</p>
                      <p className="text-muted-foreground">+216 29 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start group smooth-transition">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 smooth-transition">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-muted-foreground">info@bargaouirideaux.com</p>
                      <p className="text-muted-foreground">support@bargaouirideaux.com</p>
                    </div>
                  </div>

                  <div className="flex items-start group smooth-transition">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 smooth-transition">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        123 Main Street, Tunis, Tunisia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group smooth-transition">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 smooth-transition">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
