
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import CountdownTimer from '../components/CountdownTimer';
import ConfettiEffect from '../components/ConfettiEffect';
import CtaButton from '../components/CtaButton';

const Index = () => {
  // Set countdown to 7 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  
  // Logic for mobile sticky CTA
  const [showMobileCta, setShowMobileCta] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCta(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Analytics tracking
  useEffect(() => {
    // Google Tag Manager would normally be initialized here
    console.log('Page viewed - Analytics event');
  }, []);
  
  return (
    <div className="bg-dark text-white min-h-screen">
      <ConfettiEffect />
      <Header />
      
      <main>
        <Hero />
        
        <div className="container mx-auto px-4 -mt-10 mb-10 relative z-10">
          <CountdownTimer endDate={endDate} />
        </div>
        
        <ServicesGrid />
        
        <TestimonialsSection />
        
        <section id="contact" className="py-20 bg-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="text-gold">Transform</span> Your Business?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Take advantage of our limited-time 20% discount and elevate your digital presence today.
            </p>
            
            <CtaButton filled className="text-lg px-8 py-4 shadow-lg shadow-gold/20">
              Claim Your Golden Discount
            </CtaButton>
          </div>
        </section>
      </main>
      
      <footer className="bg-dark-lighter py-8 border-t border-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-gold font-bold text-xl mb-4">DIGITAL<span className="text-white">AGENCY</span></div>
            <p className="text-gray-400">© {new Date().getFullYear()} Digital Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Mobile Sticky CTA */}
      {showMobileCta && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gold text-dark py-3 px-4 shadow-lg z-50">
          <button className="w-full font-bold flex items-center justify-center gap-2">
            Tap to Claim 20% →
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
