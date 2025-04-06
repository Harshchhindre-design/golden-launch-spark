
import React, { useEffect, useState } from 'react';
import { isFirstVisit } from '../utils/cookies';

// Using confetti from CDN for simplicity
declare const confetti: any;

const LuxuryConfetti: React.FC = () => {
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
    
    // Optional: Add champagne pop sound for first visit
    if (isFirstVisit()) {
      const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-champagne-pop-cork-2879.mp3');
      
      // Only play sound if user has interacted with the page
      const playSound = () => {
        audio.volume = 0.2; // Subtle volume
        audio.play().catch(() => {}); // Catch and ignore autoplay restrictions
        document.removeEventListener('click', playSound);
      };
      
      document.addEventListener('click', playSound);
    }
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    
    // Only show confetti if it's the first visit in 24 hours
    if (isFirstVisit()) {
      const duration = 5 * 1000; // 5 seconds
      const end = Date.now() + duration;
      
      const instance = confetti.create();
      
      // Luxury confetti with gold, champagne and white colors, slower fall for elegant effect
      const launchConfetti = () => {
        instance({
          particleCount: 25,
          spread: 70,
          angle: 120,
          origin: { x: 0.5, y: 0.1 },
          gravity: 0.7, // Slower fall
          scalar: 1.2, // Larger confetti
          drift: 0.5, // Gentle drift
          ticks: 300, // Longer lasting particles
          shapes: ['circle', 'square'],
          colors: [
            '#E2B52C', // Gold - 50%
            '#E2B52C', 
            '#E2B52C',
            '#E2B52C', 
            '#E2B52C',
            '#F5DEB3', // Champagne - 30%
            '#F5DEB3',
            '#F5DEB3',
            '#FFFFFF', // White - 20%
            '#FFFFFF',
          ],
          disableForReducedMotion: true
        });
      };
      
      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
          return;
        }
        launchConfetti();
      }, 250);
      
      return () => {
        clearInterval(interval);
      };
    }
  }, [loaded]);

  return null; // This component doesn't render anything visible
};

export default LuxuryConfetti;
