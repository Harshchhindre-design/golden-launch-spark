
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import LuxuryHero from '../components/LuxuryHero';
import LuxuryServices from '../components/LuxuryServices';
import LuxuryTestimonials from '../components/LuxuryTestimonials';
import LuxuryCountdown from '../components/LuxuryCountdown';
import LuxuryConfetti from '../components/LuxuryConfetti';
import CtaButton from '../components/CtaButton';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

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
      <LuxuryConfetti />
      <Header />
      
      <main>
        <LuxuryHero />
        
        <div className="container mx-auto px-4 -mt-16 mb-16 relative z-10">
          <LuxuryCountdown endDate={endDate} />
        </div>
        
        <LuxuryServices />
        
        <LuxuryTestimonials />
        
        <section id="contact" className="py-20 bg-dark luxury-texture">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Ready to <span className="text-gold">Transform</span> Your Digital Presence?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 italic">
              Seize this exclusive opportunity to elevate your brand with our premium digital expertise.
            </p>
            
            <div className="gold-shine-effect inline-block mb-8">
              <CtaButton filled className="text-lg px-8 py-4 shadow-gold gold-gradient-border">
                <span className="flex items-center">
                  Claim Your Golden Key <Sparkles className="ml-2 h-5 w-5" />
                </span>
              </CtaButton>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="glass-panel p-6 flex items-center gap-4 max-w-xs">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Star className="h-6 w-6 text-gold" />
                </div>
                <p className="text-sm text-gray-300">
                  <span className="text-gold font-semibold">Premium Support</span><br />
                  Dedicated team of experts at your service
                </p>
              </div>
              
              <div className="glass-panel p-6 flex items-center gap-4 max-w-xs">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-gold" />
                </div>
                <p className="text-sm text-gray-300">
                  <span className="text-gold font-semibold">Exclusive Offer</span><br />
                  Limited time 20% discount for new clients
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-dark-lighter py-12 border-t border-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-gold font-bold text-xl mb-6 font-playfair">DIGITAL<span className="text-white">AGENCY</span></div>
            <p className="text-gray-400 mb-8">Where digital craftsmanship meets business excellence</p>
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Digital Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Mobile Sticky CTA */}
      {showMobileCta && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-gold/20 py-3 px-4 shadow-lg z-50">
          <button className="w-full font-bold flex items-center justify-center gap-2 text-gold">
            <span>Tap to Unlock 20%</span> <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
