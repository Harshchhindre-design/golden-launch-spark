
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  client: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Their ERP system streamlined our operations! The implementation was smooth, and the team was highly professional throughout the process.",
    client: "Global Tech Solutions",
    stars: 5
  },
  {
    id: 2,
    content: "From SEO to app development, they deliver! Our organic traffic increased by 200% in just three months following their recommendations.",
    client: "Retail Innovations Inc.",
    stars: 5
  },
  {
    id: 3,
    content: "The web development team created a stunning website that perfectly captures our brand essence. Highly recommended!",
    client: "Creative Studio Agency",
    stars: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-gold">Success</span> Stories</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied clients about how our services transformed their businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-dark p-6 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="text-gold font-semibold">
                – {testimonial.client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
