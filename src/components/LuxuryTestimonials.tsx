
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  client: string;
  position: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Their ERP system is the backbone of our empire. The implementation was seamless, and the team was highly professional throughout the process.",
    client: "Global Tech Solutions",
    position: "Chief Technology Officer",
    stars: 5
  },
  {
    id: 2,
    content: "From concept to code, they deliver art. Our organic traffic increased by 200% in just three months following their recommendations.",
    client: "Retail Innovations Inc.",
    position: "Marketing Director", 
    stars: 5
  },
  {
    id: 3,
    content: "The web development team created a stunning website that perfectly captures our brand essence. True digital craftsmen.",
    client: "Creative Studio Agency",
    position: "Chief Creative Officer",
    stars: 5
  }
];

const LuxuryTestimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 marble-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Client <span className="text-gold">Accolades</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto italic">
            The testament to our unwavering commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="glass-panel p-8 text-center relative tilt-card"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-dark-lighter p-4 rounded-full border border-gold/30">
                <Quote className="text-gold h-6 w-6" />
              </div>
              
              <div className="flex justify-center mb-6 mt-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div>
                <div className="text-gold font-semibold font-playfair">
                  {testimonial.client}
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  {testimonial.position}
                </div>
              </div>
              
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-4 w-24 border-t border-gold/30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryTestimonials;
