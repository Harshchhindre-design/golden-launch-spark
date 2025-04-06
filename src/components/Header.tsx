
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CtaButton from './CtaButton';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-gold font-bold text-xl md:text-2xl">DIGITAL<span className="text-white">AGENCY</span></span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#services" className="text-white hover:text-gold transition-colors">Services</a></li>
            <li><a href="#testimonials" className="text-white hover:text-gold transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="text-white hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <CtaButton>Claim Discount</CtaButton>
        </div>
        
        <button 
          className="md:hidden text-gold" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-lighter border-t border-gold/20 py-4">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#services" 
                  className="block text-white hover:text-gold transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="block text-white hover:text-gold transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block text-white hover:text-gold transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li className="pt-2">
                <CtaButton filled className="w-full">
                  Claim Discount
                </CtaButton>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
