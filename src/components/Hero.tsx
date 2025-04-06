
import React from 'react';
import CtaButton from './CtaButton';

const Hero: React.FC = () => {
  return (
    <section className="relative hero-pattern min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Unlock <span className="text-gold">20% Off</span> Digital Excellence – Scan, Save, <span className="text-gold">Succeed!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Transform your business with our premium digital services. Limited time offer for new clients.
          </p>
          
          <div className="mb-8">
            <CtaButton filled className="text-lg px-8 py-4 shadow-lg shadow-gold/20">
              Claim Your Golden Discount
            </CtaButton>
          </div>
          
          <div className="mt-8 py-2 px-4 bg-gold/10 rounded-full inline-block">
            <p className="text-gold font-medium">
              Exclusive to First 50 Clients!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
