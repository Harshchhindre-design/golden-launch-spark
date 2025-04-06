
import React, { useEffect, useState } from 'react';
import { isFirstVisit } from '../utils/cookies';

// Using confetti from CDN for simplicity
declare const confetti: any;

const ConfettiEffect: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load confetti script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    script.async = true;
    
    script.onload = () => {
      setLoaded(true);
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    
    // Only show confetti if it's the first visit in 24 hours
    if (isFirstVisit()) {
      const duration = 3 * 1000; // 3 seconds
      const end = Date.now() + duration;
      
      const instance = confetti.create();
      
      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
          return;
        }
        
        // Confetti with our color theme
        instance({
          particleCount: 50,
          spread: 90,
          origin: { y: 0.6 },
          zIndex: 2000,
          colors: [
            '#E2B52C', // Gold - 70%
            '#E2B52C', 
            '#E2B52C',
            '#E2B52C',
            '#E2B52C',
            '#E2B52C',
            '#E2B52C',
            '#FFFFFF', // White - 20%
            '#FFFFFF',
            '#2D2D2D'  // Dark - 10%
          ],
          disableForReducedMotion: true
        });
      }, 200);
      
      return () => {
        clearInterval(interval);
      };
    }
  }, [loaded]);

  return null; // This component doesn't render anything visible
};

export default ConfettiEffect;
