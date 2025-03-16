
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative bg-secondary/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2005, Bargaoui Rideaux has been transforming homes with quality window treatments for over 18 years.
              </p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">
                  Tunisian Craftsmanship, Global Standards
                </h2>
                <p className="text-muted-foreground mb-4">
                  At Bargaoui Rideaux, we combine traditional Tunisian craftsmanship with modern design sensibilities to create window treatments that are both functional and beautiful.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our commitment to quality means we source only the finest fabrics and materials, and every product is made with meticulous attention to detail by our skilled artisans.
                </p>
                <Button asChild className="group">
                  <a href="/contact">
                    Contact Us
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=800&auto=format&fit=crop"
                  alt="Artisan crafting curtains"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do at Bargaoui Rideaux.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-primary font-medium">01</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on materials or craftsmanship. Every stitch, every fold, and every hem is made to last.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-primary font-medium">02</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to environmentally responsible practices, from sourcing to production to packaging.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <span className="text-primary font-medium">03</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We're with you from initial consultation to final installation and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground">
                The talented people behind Bargaoui Rideaux.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Ahmed Bargaoui",
                  position: "Founder & CEO",
                  image: "https://randomuser.me/api/portraits/men/1.jpg",
                },
                {
                  name: "Leila Sassi",
                  position: "Head of Design",
                  image: "https://randomuser.me/api/portraits/women/2.jpg",
                },
                {
                  name: "Youssef Ben Ali",
                  position: "Master Craftsman",
                  image: "https://randomuser.me/api/portraits/men/3.jpg",
                },
                {
                  name: "Fatima Trabelsi",
                  position: "Customer Relations",
                  image: "https://randomuser.me/api/portraits/women/4.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-muted-foreground">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
