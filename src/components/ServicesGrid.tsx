
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
  Smartphone 
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'ERP Solutions',
    icon: <Database className="service-icon" />,
    description: 'Streamline operations with custom ERP systems'
  },
  {
    id: 2,
    title: 'CRM Integration',
    icon: <Users className="service-icon" />,
    description: 'Enhance customer relationships and engagement'
  },
  {
    id: 3,
    title: 'Web Development',
    icon: <Globe className="service-icon" />,
    description: 'Custom websites and web applications'
  },
  {
    id: 4,
    title: 'Digital Marketing',
    icon: <BarChart2 className="service-icon" />,
    description: 'Targeted campaigns for maximum ROI'
  },
  {
    id: 5,
    title: 'SEO Mastery',
    icon: <Search className="service-icon" />,
    description: 'Boost rankings and organic traffic'
  },
  {
    id: 6,
    title: 'Graphics Design',
    icon: <Palette className="service-icon" />,
    description: 'Eye-catching visuals and brand identity'
  },
  {
    id: 7,
    title: 'Google My Business',
    icon: <MapPin className="service-icon" />,
    description: 'Optimize local search presence'
  },
  {
    id: 8,
    title: 'Software Development',
    icon: <Code className="service-icon" />,
    description: 'Custom software solutions for your business'
  },
  {
    id: 9,
    title: 'Mobile Apps',
    icon: <Smartphone className="service-icon" />,
    description: 'iOS and Android app development'
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gold">Premium</span> Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your business with our expertise in multiple domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gold">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
