
import React, { useEffect, useState } from 'react';
import { Timer, Clock } from 'lucide-react';

interface CountdownTimerProps {
  endDate: Date;
}

const LuxuryCountdown: React.FC<CountdownTimerProps> = ({ endDate }) => {
  const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const difference = +endDate - +new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [flipped, setFlipped] = useState<string | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      
      // Determine which unit changed to trigger flip animation
      if (newTimeLeft.seconds !== timeLeft.seconds) {
        setFlipped('seconds');
      } else if (newTimeLeft.minutes !== timeLeft.minutes) {
        setFlipped('minutes');
      } else if (newTimeLeft.hours !== timeLeft.hours) {
        setFlipped('hours');
      } else if (newTimeLeft.days !== timeLeft.days) {
        setFlipped('days');
      }
      
      setTimeLeft(newTimeLeft);
      
      // Reset flip state after animation
      setTimeout(() => setFlipped(null), 600);
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };
  
  const { days, hours, minutes, seconds } = timeLeft;
  
  const TimeUnit = ({ value, label, isFlipped }: { value: string, label: string, isFlipped: boolean }) => (
    <div className="flex flex-col items-center">
      <div className={`glass-panel p-3 md:p-4 w-16 md:w-20 h-16 md:h-24 flex items-center justify-center mb-2 ${isFlipped ? 'animate-flip' : ''}`}>
        <div className="text-2xl md:text-4xl font-bold text-gold">{value}</div>
      </div>
      <div className="text-xs md:text-sm text-gold/70 uppercase tracking-wider">{label}</div>
    </div>
  );
  
  return (
    <div className="glass-panel p-8 text-center relative">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-dark-lighter p-3 rounded-full border border-gold/30">
        <Clock className="text-gold h-6 w-6" />
      </div>
      
      <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-6 text-gold mt-3">Your Exclusive Access Expires in</h3>
      
      <div className="flex justify-center gap-4">
        <TimeUnit value={formatTime(days)} label="Days" isFlipped={flipped === 'days'} />
        <div className="text-2xl md:text-4xl font-bold text-gold self-center pb-5">:</div>
        <TimeUnit value={formatTime(hours)} label="Hours" isFlipped={flipped === 'hours'} />
        <div className="text-2xl md:text-4xl font-bold text-gold self-center pb-5">:</div>
        <TimeUnit value={formatTime(minutes)} label="Minutes" isFlipped={flipped === 'minutes'} />
        <div className="text-2xl md:text-4xl font-bold text-gold self-center pb-5">:</div>
        <TimeUnit value={formatTime(seconds)} label="Seconds" isFlipped={flipped === 'seconds'} />
      </div>
    </div>
  );
};

export default LuxuryCountdown;
