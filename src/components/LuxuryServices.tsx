
import React from 'react';
import { 
  Database, 
  Users, 
  Globe, 
  BarChart2, 
  Search, 
  Palette, 
  MapPin, 
  Code, 
  Smartphone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: 'ERP Solutions',
    description: 'Precision-engineered workflows for unmatched efficiency',
    icon: <Database className="service-icon" />
  },
  {
    id: 2,
    title: 'CRM Integration',
    description: 'Cultivate relationships with elegance',
    icon: <Users className="service-icon" />
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Crafting digital masterpieces',
    icon: <Globe className="service-icon" />
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that command attention',
    icon: <BarChart2 className="service-icon" />
  },
  {
    id: 5,
    title: 'SEO Mastery',
    description: 'Dominating search engines with grace',
    icon: <Search className="service-icon" />
  },
  {
    id: 6,
    title: 'Graphics Design',
    description: 'Visual storytelling that captivates',
    icon: <Palette className="service-icon" />
  },
  {
    id: 7,
    title: 'Google My Business',
    description: 'Local presence with global sophistication',
    icon: <MapPin className="service-icon" />
  },
  {
    id: 8,
    title: 'Software Development',
    description: 'Bespoke solutions for discerning clients',
    icon: <Code className="service-icon" />
  },
  {
    id: 9,
    title: 'Mobile Apps',
    description: 'Elegant experiences in the palm of your hand',
    icon: <Smartphone className="service-icon" />
  }
];

const LuxuryServices: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Our <span className="text-gold">Signature</span> Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto italic">
            Immaculately crafted digital solutions to elevate your enterprise to new heights.
          </p>
        </div>
        
        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Carousel opts={{
            align: "start",
            loop: true,
          }}>
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.id} className="basis-full sm:basis-1/2">
                  <div className="service-card tilt-card h-full">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-2 text-gold font-playfair">{service.title}</h3>
                    <p className="text-gray-300 text-center italic">{service.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="relative inset-auto bg-dark-light border-gold/30 text-gold hover:bg-gold hover:text-dark" />
              <CarouselNext className="relative inset-auto bg-dark-light border-gold/30 text-gold hover:bg-gold hover:text-dark" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card tilt-card">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gold font-playfair">{service.title}</h3>
              <p className="text-gray-300 text-center italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryServices;
