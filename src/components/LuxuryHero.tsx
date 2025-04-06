
import React, { useEffect, useRef } from 'react';
import CtaButton from './CtaButton';
import { Sparkles } from 'lucide-react';

const LuxuryHero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Generate luxury gold particles
    const container = particlesRef.current;
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random positioning and animation delay
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      
      container.appendChild(particle);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 luxury-texture overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black z-0"></div>
      
      <div ref={particlesRef} className="float-particles"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-shadow-gold leading-tight">
            Step Into a World of <span className="text-gold italic">Digital Excellence</span> – Your Exclusive <span className="text-gold">20%</span> Awaits
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 italic font-light">
            Where ERP, CRM, and Bespoke Digital Solutions Redefine Success.
          </p>
          
          <div className="mb-10 gold-shine-effect">
            <CtaButton filled className="text-lg px-8 py-4 shadow-lg shadow-gold/20 gold-gradient-border">
              <span className="flex items-center">
                Claim Your Golden Key <Sparkles className="ml-2 h-5 w-5" />
              </span>
            </CtaButton>
          </div>
          
          <div className="mt-16 py-3 px-6 glass-panel inline-block">
            <p className="text-gold font-medium flex items-center">
              <Sparkles className="mr-2 h-4 w-4" />
              Only 50 Golden Keys Available – Unlock Yours Now
              <Sparkles className="ml-2 h-4 w-4" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHero;
